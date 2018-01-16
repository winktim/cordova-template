<template>
    <div id="app">
        <div class="container">
            <span>Hello at \{{ Date.now() }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {}
    },
    components: {}
}
</script>

<style scoped lang="scss">
  @import "bootstrap";
</style>
