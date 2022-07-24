<template>
    <nav class="bg-gray-800 sticky flex items-center justify-around sm:justify-end sm:text-2xl text-xl w-full z-50">
        <ScrollLink class="text-white p-2 sm:mr-8 no-underline grow" href="#About">About</ScrollLink>
        <ScrollLink class="text-white p-2 sm:mr-8 no-underline grow" href="#Work">Work</ScrollLink>
        <ScrollLink class="hidden md:inline-block no-underline p-2 sm:mr-8 text-white grow" href="#Talks">Talks</ScrollLink>
        <ScrollLink class="text-white p-2 sm:mr-8 no-underline grow" href="#Contact">Contact</ScrollLink>
        <a class="text-white p-2 sm:mr-8 no-underline grow" href="https://linktr.ee/getsomemoore94">
            <font-awesome-icon :class="['text-xxl', 'text-white']"
                               :icon="['fas', 'feather-alt']"></font-awesome-icon>
        </a>
    </nav>
</template>

<script>

import ScrollLink from "@/components/ScrollLink";

export default {
    name: "TopNav",
    components: {
        ScrollLink
    }
}
</script>

<style scoped>
nav {
    top: 0;
}
.grow {
    transition: all .2s ease-in-out;
}

.grow:hover {
    transform: scale(1.2);
}
</style>