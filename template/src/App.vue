<template>
    <div id="app">
        <div class="container">
            <span>You are \{{ isAndroid ? "on" : "not on" }} android</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            isAndroid: $ons.platform.isAndroid()
        }
    },
    components: {}
}
</script>

<style scoped lang="scss">
  @import "bootstrap";
</style>
