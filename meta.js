module.exports = {
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name (all lowercase)"
        },
        "package": {
            "type": "string",
            "required": true,
            "message": "Package name (ex: io.cordova.helloworld)"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "Cordova project"
        },
        "author": {
            "type": "string",
            "message": "Author"
        },
        "vuex": {
            "type": "confirm",
            "message": "Install Vuex for state management?"
        }
    },
    "filters": {
        "src/store.js": "vuex"
    },
    "completeMessage": "Run\n\ncd {{destDirName}}\nnpm install\nnpm run build"
}
