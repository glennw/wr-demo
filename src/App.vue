<template>
  <div id="app">
    <stage></stage>
  </div>
</template>

<script>
import Stage from './components/Stage.vue'

export default {
  components: {
    Stage
  },
  data () {
    return {
    }
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  background: #aaaaaa;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
