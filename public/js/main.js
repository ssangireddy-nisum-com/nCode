require.config({
    baseUrl: "../js",
    paths: {
        //path for modules
        "nCodeApp": "modules/NCodeModule/app",
        "nCodeConfig": "modules/NCodeModule/config",

        "jquery": "lib/jquery",
        "angular": 'lib/angular',
        "uiRouter": "lib/angular-ui-router"
    },
    shim: {
        'angular': {
            'exports': 'angular'
        }
    }
});
function start() {
    require(['jquery','angular'], function($, angular) {
          require(["nCodeConfig"], function(defaultConfig) {
              angular.bootstrap(document, ["nCode"]);
          });
    });
}
start();
