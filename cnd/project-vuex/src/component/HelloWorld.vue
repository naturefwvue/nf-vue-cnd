<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msg1 }}</h1>
    <p>
      尝试一下vue文件，目前没找到方法，也许需要Babel和webpack。
    </p>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const msg1 = '存cdn方式'
    return {
      msg1
    }
  }
}
</script>
