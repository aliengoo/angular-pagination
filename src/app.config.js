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
