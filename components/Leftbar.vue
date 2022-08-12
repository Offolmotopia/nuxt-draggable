<template>
    <draggable class="leftbar" v-model="elements" :clone="addElement" :group="{name: 'elements', pull: 'clone', put: false}" item-key="id">
        <template #item="{ element }">
            <div class="element">{{element.name}}</div>
        </template>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable';
export default {
    data() {
        return {
            elements: [{name: 'headline', id: 0}, {name: 'text', id: 1}, {name: 'image', id: 2}],
        }
    },
    components: {draggable},
    methods: {
        addElement({ name, id}) {
            return {
                name, 
                id: Date.now()
            }
        }
    }
}
</script>

<style lang="scss" scoped   >
    .leftbar {
        width: 80px;
        height: 100%;
        background: black;

        display: flex;
        flex-direction: column;

        .element {
            height: 60px;
            color: white;
            font-size: 12px;
        }
    }
</style>