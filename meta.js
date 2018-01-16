module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name (all lowercase)"
    },
    "prompts": {
      "package": {
        "type": "string",
        "required": true,
        "message": "Package name (ex: io.cordova.helloworld)"
      },
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
  "completeMessage": "Run\n\n {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n"
}
