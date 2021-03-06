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

document.addEventListener("deviceready", main)

// manually trigger deviceready event if we are in dev mode
if(process.env.NODE_ENV === "development") {
    document.dispatchEvent(new CustomEvent("deviceready", {}))
    console.log("dispatched 'deviceready' manually")
}

function main()
{
    new Vue({
        el: "#app",
        {{#vuex}}
        store,
        {{/vuex}}
        template: "<App/>",
        components: { App }
    })
}
