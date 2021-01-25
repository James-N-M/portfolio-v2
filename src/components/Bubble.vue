<template>
    <a class="no-underline grow" :href="href">
        <div class="bg-gray-800 h-24 w-24 sm:h-32 rounded-full sm:w-32 m-8 flex items-center justify-center" :title="title">
            <font-awesome-icon :class="['text-5xl', color]" :icon="[iconType, icon]"></font-awesome-icon>
        </div>
    </a>
</template>

<script>
export default {
    name: "Bubble",
    props: {
        title: String,
        href: String,
        iconType: String,
        icon: String,
        color: String
    },
    data: function () {
        return {}
    }
}
</script>

<style scoped>
.grow {
    transition: all .2s ease-in-out;
}

.grow:hover {
    transform: scale(1.2);
}
</style>