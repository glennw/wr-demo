<template>
	<div :style=style>
    </div>
</template>

<script>
export default {
    props: [
        'rect',
    ],
    computed: {
        style() {
            return "background-color: " +
                   this.rect.color.color +
                   "; top: " +
                   this.rect.top +
                   "%; left: " +
                   this.rect.left +
                   "%; width: " +
                   this.rect.width +
                   "%; height: " +
                   this.rect.height +
                   "%; transform: scale(" +
                   this.rect.scale +
                   ") rotate(" +
                   this.rect.rotation +
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
