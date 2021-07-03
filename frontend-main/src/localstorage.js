
        var app = angular.module("aplicacao",[]);

        app.controller("retangulo", function($scope){

            $scope.calculo = function(){
            $scope.resultado = ($scope.vbase * $scope.valtura); 
        }

        });
        