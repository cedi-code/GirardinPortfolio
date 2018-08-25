<template>
    <div class="hobbyContent" v-on:click="">

    </div>
</template>

<script>
    export default {
        name: "HobbyBox",
        data () {
          return {
            expanded: false,
            isMobile: false
            }
        },
    }
</script>

<style scoped>
  .hobbyContent {
    padding: 10px;

  }
</style>
