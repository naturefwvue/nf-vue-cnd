
const reactive = Vue.reactive
const shallowReactive = Vue.shallowReactive
const readonly = Vue.readonly
const shallowReadonly = Vue.shallowReadonly

/**
 * 普通js对象的 person
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
 * person 的 reactive 代理
 */
export const personReactive = reactive(person)

/**
 * js对象的 reactive 响应式代理
 */
export const objectReactive = reactive({
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
export const objectShallowReactive = shallowReactive({
  name: 'jykShallowReactive',
  age: 18,
  contacts: {
    QQ: 11111,
    phone: 123456789
  }
})

/**
 * reactive 的 shallowReactive 响应式代理
 */
export const retShallowReactive = shallowReactive(objectReactive)

// ================================================

/**
 * person 的 readonly 代理
 */
export const objectReadonly = readonly(person)

/**
 * reactive 的 readonly 代理
 */
export const reactiveReadonly = readonly(objectReactive)

/**
 * person 的 shallowReadonly 响应式代理
 */
export const objectShallowReadonly = shallowReadonly(person)

/**
 * reactive 的 shallowReadonly 响应式代理
 */
export const reactiveShallowReadonly = shallowReadonly(objectReactive)

// ================================================
