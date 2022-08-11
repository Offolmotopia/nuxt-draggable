<template>
    <Draggable class="leftbar" v-model="elements" :group="{ pull: 'clone' }">
        <div class="element" v-for="(element, idx) in elements" :key="idx">{{element.name}}</div>
    </Draggable>
</template>

<script>
export default {
    data() {
        return {
            elements: [{name: 'headline'}, {name: 'text'}, {name: 'image'}],
        }
    },
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