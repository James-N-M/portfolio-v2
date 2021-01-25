<template>
    <div role="tabpanel" v-show="isActive">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Tab",
    props: {
        title: String,
        active: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            isActive: this.active,
        }
    }
}
</script>

<style scoped>

</style>