// import { isRef, isReactive, toRaw } from 'vue'
import config from './nf-indexedDB.config.js'

/**
 * 基于Promise封装的操作库
 */
const nfIndexedDB = () => {
  /**
  * config:
  *  dbName: 数据库名称，
  *  ver: 数据库版本号
  */

  /**
   * IndexedDB 数据库对象
   * 判断浏览器是否支持
   * */
  const myIndexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB
  if (!myIndexedDB) {
    console.log('你的浏览器不支持IndexedDB')
  }

  let _db // 内部保存的 indexed 数据库 的实例

  /**
  * 把vue的ref、reactive转换成原始对象
  */
  const _vueToObject = (vueObject) => {
    let _object = vueObject
    return _object
    // 针对Vue3做的类型判断
    if (Vue.isRef(_object)) {
      // 如果是 vue 的 ref 类型，替换成 ref.value
      _object = _object.value
    }
    if (Vue.isReactive(_object)) {
      // 如果是 vue 的 reactive 类型，那么获取原型，否则会报错
      _object = Vue.toRaw(_object)
    }
    return _object
  }

  // ======== 数据库操作 ================
  /**
  * 打开 indexedDB 数据库。
  * dbName：数据库名称；
  * version：数据库版本。
  * 可以不传值。
  */
  const dbOpen = (dbName, version) => {
    // 创建数据库，并且打开
    const name = config.dbName || dbName
    const ver = config.ver || version
    const dbRequest = myIndexedDB.open(name, ver)
    // 记录数据库版本是否变更
    let isChange = false
    /* 该域中的数据库myIndex */
    if (config.debug) {
      console.log('dbRequest - 打开indexedDb数据库：', dbRequest)
    }
    // 打开数据库的 promise
    const dbPromise = new Promise((resolve, reject) => {
      // 数据库打开成功的回调
      dbRequest.onsuccess = (event) => {
        // _db = event.target.result
        // 数据库成功打开后，记录数据库对象
        _db = dbRequest.result
        if (isChange) { // 如果变更，则设置初始数据
          setup().then(() => {
            resolve(_db)
          })
        } else {
          resolve(_db)
        }
      }

      dbRequest.onerror = (event) => {
        reject(event) // 返回参数
      }
    })

    // 创建表
    // 第一次打开成功后或者版本有变化自动执行以下事件，一般用于初始化数据库。
    dbRequest.onupgradeneeded = (event) => {
      isChange = true
      _db = event.target.result /* 数据库对象 */
      // 建立对象表
      for (let i = 0; i < config.objectStores.length; i++) {
        const object = config.objectStores[i]
        // 验证有没有，没有的话建立一个对象表
        if (!_db.objectStoreNames.contains(object.objectStoreName)) {
          const objectStore = _db.createObjectStore(object.objectStoreName, { keyPath: 'id' }) /* 创建person仓库(表) 主键 */
          // objectStore = _db.createObjectStore('person',{autoIncrement:true});/*自动创建主键*/
          // 建立索引
          if (typeof object.index !== 'undefined') {
            for (let i = 0; i < object.index.length; i++) {
              const index = object.index[i]
              objectStore.createIndex(index.name, index.name, { unique: index.unique })
            }
            if (config.debug) {
              console.log('onupgradeneeded - 建立了一个新的对象仓库：', objectStore)
            }
          }
        }
      }
    }

    // 返回 Promise 实例 —— 打开Indexed库
    return dbPromise
  }

  /**
  * 设置初始数据
  */
  const setup = () => {
    // 定义一个 Promise 的实例
    const objectPromise = new Promise((resolve, reject) => {
      const arrStore = []
      // 遍历，获取表名集合，便于打开事务
      for (const key in config.objects) {
        arrStore.push(key)
      }
      const tranRequest = _db.transaction(arrStore, 'readwrite')

      // 遍历，添加数据（对象）
      for (const key in config.objects) {
        const objectArror = config.objects[key]
        const store = tranRequest.objectStore(key)
        // 清空数据
        store.clear().onsuccess = (event) => {
          // 遍历添加数据
          for (let i = 0; i < objectArror.length; i++) {
            store
              .add(objectArror[i])
              .onsuccess = (event) => {
                if (config.debug) {
                  console.log(`添加成功！key:${key}-i:${i}`)
                }
              }
          }
        }
      }

      // 遍历后统一返回
      tranRequest.oncomplete = (event) => {
        // tranRequest.commit()
        if (config.debug) {
          console.log('setup - oncomplete')
        }
        resolve()
      }
      tranRequest.onerror = (event) => {
        reject(event)
      }
    })
    return objectPromise
  }


  /**
  * 删除整个store。
  * storeName：对象仓库名；
  */
  const deleteStore = (storeName) => {
    // 定义一个 Promise 的实例
    const objectPromise = new Promise((resolve, reject) => {
      // 定义个函数，便于调用
      const _deleteStore = () => {
        const tranRequest = _db.transaction(storeName, 'readwrite')
        tranRequest
          .objectStore(storeName) // 获取store
          .delete() // 清空对象仓库里的对象
          .onsuccess = (event) => { // 成功后的回调
            resolve(event)
          }
        tranRequest.onerror = (event) => {
          reject(event) // 失败后的回调
        }
      }
      // 判断数据库是否打开
      if (typeof _db === 'undefined') {
        dbOpen().then(() => {
          _deleteStore()
        })
      } else {
        _deleteStore()
      }
    })
    return objectPromise
  }

  /**
  * 删除数据库。
  * dbName：数据库名；
  */
  const deleteDB = (dbName) => {
    // 定义一个 Promise 的实例
    const objectPromise = new Promise((resolve, reject) => {
      // 删掉整个数据库
      myIndexedDB.deleteDatabase(dbName).onsuccess = (event) => {
        resolve(event)
      }
    })
    return objectPromise
  }

  // ======== 增删改操作 ===================================
  /**
  * 添加对象。
  * storeName：对象仓库名；
  * object：要添加的对象
  */
  const addObject = (storeName, object) => {
    const _object = _vueToObject(object)
    // 定义一个 Promise 的实例
    const objectPromise = new Promise((resolve, reject) => {
      // 定义个函数，便于调用
      const _addObject = () => {
        const tranRequest = _db.transaction(storeName, 'readwrite')
        tranRequest
          .objectStore(storeName) // 获取store
          .add(_object) // 添加对象
          .onsuccess = (event) => { // 成功后的回调
            resolve(event.target.result) // 返回对象的ID
          }
        tranRequest.onerror = (event) => {
          reject(event)
        }
      }

      // 判断数据库是否打开
      if (typeof _db === 'undefined') {
        dbOpen().then(() => {
          _addObject()
        })
      } else {
        _addObject()
      }
    })
    return objectPromise
  }

  /**
  * 修改对象。
  * storeName：对象仓库名；
  * object：要修改的对象
  */
  const updateObject = (storeName, object) => {
    const _object = _vueToObject(object)
    // 定义一个 Promise 的实例
    const objectPromise = new Promise((resolve, reject) => {
      // 定义个函数，便于调用
      const _updateObject = () => {
        const tranRequest = _db.transaction(storeName, 'readwrite')
        // 按照id获取对象
        tranRequest
          .objectStore(storeName) // 获取store
          .get(_object.id) // 获取对象
          .onsuccess = (event) => { // 成功后的回调
            // 从仓库里提取对象，把修改值合并到对象里面。
            const newObject = { ...event.target.result, ..._object }
            // 修改数据
            tranRequest
              .objectStore(storeName) // 获取store
              .put(newObject) // 修改对象
              .onsuccess = (event) => { // 成功后的回调
                if (config.debug) {
                  console.log('updateObject -- onsuccess- event:', event)
                }
                resolve(event.target.result)
              }
          }

        tranRequest.onerror = (event) => {
          reject(event)
        }
      }
      // 判断数据库是否打开
      if (typeof _db === 'undefined') {
        dbOpen().then(() => {
          _updateObject()
        })
      } else {
        _updateObject()
      }
    })
    return objectPromise
  }

  /**
  * 依据id删除对象。
  * storeName：对象仓库名；
  * id：要删除的对象的key值，注意类型要准确。
  */
  const deleteObject = (storeName, id) => {
    // 定义一个 Promise 的实例
    const objectPromise = new Promise((resolve, reject) => {
      // 定义个函数，便于调用
      const _deleteObject = () => {
        const tranRequest = _db.transaction(storeName, 'readwrite')
        tranRequest
          .objectStore(storeName) // 获取store
          .delete(id) // 删除一个对象
          .onsuccess = (event) => { // 成功后的回调
            resolve(event.target.result)
          }
        tranRequest.onerror = (event) => {
          reject(event)
        }
      }
      // 判断数据库是否打开
      if (typeof _db === 'undefined') {
        dbOpen().then(() => {
          _deleteObject()
        })
      } else {
        _deleteObject()
      }
    })
    return objectPromise
  }

  /**
  * 清空store里的所有对象。
  * storeName：对象仓库名；
  */
  const clearStore = (storeName) => {
    // 定义一个 Promise 的实例
    const objectPromise = new Promise((resolve, reject) => {
      // 定义个函数，便于调用
      const _clearStore = () => {
        const tranRequest = _db.transaction(storeName, 'readwrite')
        tranRequest
          .objectStore(storeName) // 获取store
          .clear() // 清空对象仓库里的对象
          .onsuccess = (event) => { // 成功后的回调
            resolve(event)
          }
        tranRequest.onerror = (event) => {
          reject(event)
        }
      }
      // 判断数据库是否打开
      if (typeof _db === 'undefined') {
        dbOpen().then(() => {
          _clearStore()
        })
      } else {
        _clearStore()
      }
    })
    return objectPromise
  }

  // ======== 获取对象、查询对象、分页功能 ===================================
  /**
  * 获取对象。
  * storeName：对象仓库名；
  * id：要获取的对象的key值，注意类型要准确，只能取一个。
  * 如果不设置id，会返回store里的全部对象
  */
  const getObject = (storeName, id) => {
    const objectPromise = new Promise((resolve, reject) => {
      const _getObject = () => {
        const tranRequest = _db.transaction(storeName, 'readonly')
        const store = tranRequest.objectStore(storeName) // 获取store
        let dbRequest
        // 判断是获取一个，还是获取全部
        if (typeof id === 'undefined') {
          dbRequest = store.getAll()
        } else {
          dbRequest = store.get(id)
        }

        dbRequest.onsuccess = (event) => { // 成功后的回调
          if (config.debug) {
            console.log('getObject -- onsuccess- event:', id, event)
          }
          resolve(event.target.result) // 返回对象
        }
    
        tranRequest.onerror = (event) => {
          reject(event)
        }
      }
      // 判断数据库是否打开
      if (typeof _db === 'undefined') {
        dbOpen().then(() => {
          _getObject()
        })
      } else {
        _getObject()
      }
    })

    return objectPromise
  }

  /*
  // index === value
  // 仅匹配 "Donna"
  var singleKeyRange = IDBKeyRange.only("Donna");

  // index >= value
  // 匹配所有超过“Bill”的，包括“Bill”
  var lowerBoundKeyRange = IDBKeyRange.lowerBound("Bill");

  // index > value
  // 匹配所有超过“Bill”的，但不包括“Bill”
  var lowerBoundOpenKeyRange = IDBKeyRange.lowerBound("Bill", true);

  // index < value
  // 匹配所有不超过“Donna”的，但不包括“Donna”
  var upperBoundOpenKeyRange = IDBKeyRange.upperBound("Donna", true);

  // index between value1 and value2
  // 匹配所有在“Bill”和“Donna”之间的，但不包括“Donna”
  var boundKeyRange = IDBKeyRange.bound("Bill", "Donna", false, true);

  // 使用其中的一个键范围，把它作为 openCursor()/openKeyCursor 的第一个参数
  index.openCursor(boundKeyRange).onsuccess = (event) => {
    var cursor = event.target.result;
    if (cursor) {
      // 当匹配时进行一些操作
      cursor.continue();
    }
  };
  */

  /**
  * 依据 索引+游标，获取对象，可以获取多条。
  * storeName：对象仓库名。
  * page：{
  *   start:开始,
  *   count:数量,
  *   description:'next' 
  *   // next 升序
  *   // prev 降序
  *   // nextunique 升序，只取一
  *   // prevunique 降序，只取一
  * }
  * findInfo = {
  *   indexName: 'groupId',
  *   indexKind: '=', // '>','>=','<','<=','between',
  *   indexValue: 1,
  *   betweenInfo: {
  *     v1:1,
  *     v2:2,
  *     v1isClose:true,
  *     v2isClose:true,
  *   },
  *   where：(object) => {
  *     reutrn true/false
  *   }
  * }
  */
  const findObject = (storeName, findInfo = {}, page = {}) => {
    const _start = page.start || 0
    const _count = page.count || 0
    const _end = _start + _count
    const _description = page.description || 'prev' // 默认倒序

    // 查询条件，按照主键或者索引查询
    let keyRange = null
    if (typeof findInfo.indexName !== "undefined") {
      if (typeof findInfo.indexKind !== "undefined") {
        const id = findInfo.indexValue
        const dicRange = {
          "=":IDBKeyRange.only(id),
          ">":IDBKeyRange.lowerBound(id, true),
          ">=":IDBKeyRange.lowerBound(id),
          "<":IDBKeyRange.upperBound(id, true),
          "<=":IDBKeyRange.upperBound(id)
        }
        switch (findInfo.indexKind) {
          case '=':
          case '>':
          case '>=':
          case '<':
          case '<=':
            keyRange = dicRange[findInfo.indexKind]
            break
          case 'between':
            const betweenInfo = findInfo.betweenInfo
            keyRange = IDBKeyRange.bound(betweenInfo.v1,betweenInfo.v2,betweenInfo.v1isClose,betweenInfo.v2isClose)
            break
        }
      }
    }
    console.log('findObject - keyRange', keyRange)

    const objectPromise = new Promise((resolve, reject) => {
      // 定义个函数，便于调用
      const _findObjectByIndex = () => {
        const dataList = []
        let cursorIndex = 0
        const tranRequest = _db.transaction(storeName, 'readonly')
        const store = tranRequest.objectStore(storeName)
        let cursorRequest 
        // 判断是否索引查询
        if (typeof findInfo.indexName === "undefined") {
          cursorRequest = store.openCursor(keyRange, _description)
        } else {
          cursorRequest = store
            .index(findInfo.indexName)
            .openCursor(keyRange, _description)
        }

        cursorRequest.onsuccess = (event) => {
          const cursor = event.target.result
          if (cursor) {
            if (_end === 0 || (cursorIndex >= _start && cursorIndex < _end)) {
              // 判断钩子函数
              if (typeof findInfo.where === 'function') {
                if (findInfo.where(cursor.value, cursorIndex)) {
                  dataList.push(cursor.value)
                  cursorIndex++
                }
              } else { // 没有设置查询条件
                dataList.push(cursor.value)
                cursorIndex++
              }
            }
            cursor.continue()
          }
          // tranRequest.commit()
        }

        tranRequest.oncomplete = (event) => {
          if (config.debug) {
            console.log('findObjectByIndex - dataList', dataList)
          }
          resolve(dataList)
        }
        tranRequest.onerror = (event) => {
          console.log('findObjectByIndex - onerror', event)
          reject(event)
        }
      }

      // 判断数据库是否打开
      if (typeof _db === 'undefined') {
        dbOpen().then(() => {
          _findObjectByIndex()
        })
      } else {
        _findObjectByIndex()
      }
    })
    return objectPromise
  }

  return {
    dbOpen, // 打开数据库
    setup, // 初始化、升级数据库
    clearStore, // 清空对象仓库里的所有对象
    deleteStore, // 删掉对象仓库
    deleteDB, // 删除数据库
    addObject, // 添加对象
    updateObject, // 修改对象
    deleteObject, // 删除对象
    getObject, // 依据ID获取对象，或者获取全部store
    findObject // index 查询和分页
  }
}

export default nfIndexedDB
