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
            return "background-color: " +
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
                   "deg)";
        }
    },
}
</script>

<style scoped>
div {
    position: absolute;
    border-radius: 16px;
}
</style>
