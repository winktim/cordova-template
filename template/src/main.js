import "onsenui/css/onsenui.css"
import "onsenui/css/onsen-css-components.css"

import Vue from "vue"
import VueOnsen from "vue-onsenui"
{{#vuex}}
import store from "./store"
{{/vuex}}

import App from "./App"

Vue.config.productionTip = false

Vue.use(VueOnsen)

new Vue({
    el: "#app",
    {{#vuex}}
    store,
    {{/vuex}}
    template: "<App/>",
    components: { App }
})
