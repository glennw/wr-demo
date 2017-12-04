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
                   this.prim.color +
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
    box-shadow: 4px 4px 8px black;
    position: absolute;
}
</style>
