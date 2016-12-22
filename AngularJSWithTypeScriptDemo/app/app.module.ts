/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
((): void=> {
    var app = angular.module("angularWithTS", ['ngRoute','angularWithTS.components']);
   
    app.config(angularWithTS.Routes.configureRoutes);
})() 