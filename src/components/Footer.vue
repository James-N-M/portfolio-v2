<template>
  <div>
    <footer class="bg-gray-800 flex flex-col h-32 items-center justify-center text-white">
      <p class="mt-1 leading-loose">
          <font-awesome-icon class="text-green-500" :icon="['fas', 'terminal']"></font-awesome-icon> thanks for checking in
      </p>
      <p>built with tailwindcss and <a href="https://github.com/James-N-M/luna">Luna</a></p>
      <p class="mt-0">&copy; James Moore</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>