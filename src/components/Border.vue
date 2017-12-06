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
                   this.prim.color.color +
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
                   "deg); border: 2px " +
                   this.prim.style +
                   " black;";
        }
    },
}
</script>

<style scoped>
div {
    border-radius: 16px;
    position: absolute;
}
</style>
