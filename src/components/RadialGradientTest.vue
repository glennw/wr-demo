<template>
  <div>
    <template v-for="prim in prims">
      <RadialGradient :prim=prim></RadialGradient>
    </template>
  </div>
</template>

<script>
import RadialGradient from './RadialGradient.vue'
import Color from '../js/color.js'

export default {
  props: [
    'params',
  ],
  components: {
    RadialGradient,
  },
  data () {
    return {
      prims: [
      ]
    };
  },
  mounted () {
    var self = this;
    var r = 0;

    var xc = this.params.complexity;
    var yc = this.params.complexity;
    var scale = this.params.scale;

    var w = 100.0 / xc;
    var h = 100.0 / yc;

    for (var y=0 ; y < yc ; ++y) {
      for (var x=0 ; x < xc ; ++x) {
        self.prims.push({
          top: x * w,
          left: y * h,
          width: w,
          height: h,
          scale: scale,
          rotation: 0,
          color1: new Color(),
          color2: new Color(),
        });
      }
    }

    var tick = function() {

      for (var i=0 ; i < self.prims.length ; ++i) {
        var prim = self.prims[i];
        prim.rotation = i + r;
        prim.color1.next();
        prim.color2.next();
      }

      r += 2;
      if (r > 360) {
        r = 0;
      }

      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }
}
</script>

<style scoped>
</style>
