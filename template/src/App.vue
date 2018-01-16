<template>
    <div id="app">
        <div class="container">
            <span>You are {{ $ons.platform.isAndroid() ? "on" : "not on" }} android</span>
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
