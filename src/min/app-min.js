(function () {
  'use strict';

  angular.module('app', ['ui.router']);

}());


(function (app) {
  'use strict';

  app.controller('App', App);

  function App(){
    var vm = this;
    vm.message = 'Hello, World2';
  }


}(angular.module('app')));


(function (app) {
  'use strict';

  app.config(config);

  function config($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
      url:'/',
      controller: 'App as vm',
      templateUrl: '../src/app.template.html'
    });

    $urlRouterProvider.otherwise('/');
  }

}(angular.module('app')));


// @codekit-prepend "app.module.js";
// @codekit-prepend "app.controller.js";
// @codekit-prepend "app.config.js";


