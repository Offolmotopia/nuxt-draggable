<template>
    <div class="viewport">

    </div>
</template>

<script>

export default {
    computed: {
        components() {
            return this.$store.state.getters.components
        }
    },

}
</script>

<style lang="scss" scoped>
    .viewport {
        width: 100%;
        height: 100%;
    }
</style>