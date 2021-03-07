
const reactive = Vue.reactive
const shallowReactive = Vue.shallowReactive
const readonly = Vue.readonly
const shallowReadonly = Vue.shallowReadonly

/**
 * 普通js对象的person
 */
export const person = {
  name: 'jyk',
  age: 18,
  contacts: {
    QQ: 11111,
    phone: 123456789
  }
}

/**
 * js对象的 reactive 响应式代理
 */
export const personReactive = reactive({
  name: 'jykReactive',
  age: 18,
  contacts: {
    QQ: 11111,
    phone: 123456789
  }
})

/**
 * js对象的 shallowReactive 响应式代理
 */
export const personShallowReactive = shallowReactive({
  name: 'jykShallowReactive',
  age: 18,
  contacts: {
    QQ: 11111,
    phone: 123456789
  }
})

/**
 * js对象的 readonly 响应式代理
 */
export const personReadonly = readonly({
  name: 'jykReadonly',
  age: 18,
  contacts: {
    QQ: 11111,
    phone: 123456789
  }
})

/**
 * js对象的 shallowReadonly 响应式代理
 */
export const personShallowReadonly = shallowReadonly({
  name: 'jykShallowReadonly',
  age: 18,
  contacts: {
    QQ: 11111,
    phone: 123456789
  }
})
