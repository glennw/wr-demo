<template>
    <RoundedRectsTest v-if="params.test == 'RoundedRects'" :params=params></RoundedRectsTest>
    <GradientTest v-else-if="params.test == 'Gradient'" :params=params></GradientTest>
    <RadialGradientTest v-else-if="params.test == 'RadialGradient'" :params=params></RadialGradientTest>
    <BorderTest v-else-if="params.test == 'Border'" :params=params></BorderTest>
    <BoxShadowTest v-else-if="params.test == 'BoxShadow'" :params=params></BoxShadowTest>
    <MixedTest v-else-if="params.test == 'Mixed'" :params=params></MixedTest>
</template>

<script>
import RoundedRectsTest from './RoundedRectsTest.vue'
import GradientTest from './GradientTest.vue'
import RadialGradientTest from './RadialGradientTest.vue'
import BorderTest from './BorderTest.vue'
import BoxShadowTest from './BoxShadowTest.vue'
import MixedTest from './MixedTest.vue'

export default {
    data () {
        const urlParams = new URLSearchParams(location.search);
        var params = {};

        for (var pair of urlParams.entries()) {
            params[pair[0]] = pair[1];
        }

        return {
            params: params,
        };
    },
    components: {
        RoundedRectsTest,
        GradientTest,
        RadialGradientTest,
        BorderTest,
        BoxShadowTest,
        MixedTest,
    },
}
</script>

<style scoped>
div {
    position: absolute;
    left: 10%;
    top: 10%;
    width: 80%;
    height: 80%;
}
</style>
