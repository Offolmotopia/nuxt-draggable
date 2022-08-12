<template>
    <draggable class="viewport" v-model="viewportElements" :group="{name: 'elements'}" item-key="id">
        <template #item="{ element }">
            <div class="element">{{element.name}}</div>
        </template>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable';
export default {
    computed: {
        components() {
            return this.$store.state.getters.components
        }
    },
    data() {
        return {
            viewportElements: [{name: 'example', id: 4}]
        }
    },
    components: {draggable}

}
</script>

<style lang="scss" scoped>
    .viewport {
        width: 100%;
        height: 100%;

        .element { 
            color: black;
            height: 60px;
            font-size: 12px;
        }
    }
</style>