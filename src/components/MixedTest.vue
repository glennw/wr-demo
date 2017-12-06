<template>
  <div>
    <template v-for="prim in prims">
      <RoundedRect v-if="prim.kind == 'RoundedRect'" :prim=prim></RoundedRect>
      <Gradient v-else-if="prim.kind == 'Gradient'" :prim=prim></Gradient>
      <RadialGradient v-else-if="prim.kind == 'RadialGradient'" :prim=prim></RadialGradient>
      <Border v-else-if="prim.kind == 'Border'" :prim=prim></Border>
      <BoxShadow v-else-if="prim.kind == 'BoxShadow'" :prim=prim></BoxShadow>
    </template>
  </div>
</template>

<script>
import Border from './Border.vue'
import BoxShadow from './BoxShadow.vue'
import Color from '../js/color.js'
import Gradient from './Gradient.vue'
import RadialGradient from './RadialGradient.vue'
import RoundedRect from './RoundedRect.vue'

export default {
  props: [
    'params',
  ],
  components: {
    Border,
    BoxShadow,
    Gradient,
    RadialGradient,
    RoundedRect,
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

    var kinds = ['RoundedRect', 'Gradient', 'RadialGradient', 'Border', 'BoxShadow'];
    var styles = ['sold', 'dashed', 'dotted'];

    for (var y=0 ; y < yc ; ++y) {
      for (var x=0 ; x < xc ; ++x) {
        var kind = Math.floor(Math.random() * kinds.length);
        var style = Math.floor(Math.random() * styles.length);

        self.prims.push({
          kind: kinds[kind],
          top: x * w,
          left: y * h,
          width: w,
          height: h,
          scale: scale,
          rotation: 0,
          style: styles[style],
          color: new Color(),
          color1: new Color(),
          color2: new Color(),
          shadowColor: new Color(),
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
