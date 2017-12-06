<template>
	  <div :style=style>
    </div>
</template>

<script>
export default {
    props: [
        'prim',
    ],
    computed: {
        style() {
            return "background: " +
                   "radial-gradient(" +
                   this.prim.color1.color +
                   ", " +
                   this.prim.color2.color +
                   ")" +
                   "; top: " +
                   this.prim.top +
                   "%; left: " +
                   this.prim.left +
                   "%; width: " +
                   this.prim.width +
                   "%; height: " +
                   this.prim.height +
                   "%; transform: scale(" +
                   this.prim.scale +
                   ") rotate(" +
                   this.prim.rotation +
                   "deg)";
        }
    },
}
</script>

<style scoped>
div {
    border: 2px solid black;
    position: absolute;
}
</style>
