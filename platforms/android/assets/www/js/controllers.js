angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  var gerarNoZero = function() { return { ano: 1, receita: null, custo: null, investimento: 10000 } };
    $scope.dados = [];
    $scope.dados[0] = gerarNoZero();
    $scope.taxasDeDesconto = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    $scope.numeroDeAnos = '1';

    $scope.alterarNumeroDeAnos = function(numeroDeAnos) {
      $scope.dados = [];
      //$scope.dados[0] = gerarNoZero();

      for (var i = 0; i < numeroDeAnos; i++)
        $scope.dados.push({ ano: $scope.dados.length, ano: i+1, receita: 15000, custo: 9000, investimento: null });
    }

    $scope.calcularSomaDaReceita = function() {
      var soma = 0;
      for (var i = 0; i < $scope.dados.length; i++) {
        soma += $scope.dados[i].receita;
      }
      return soma;
    }

    $scope.calcularSomaDoCusto = function() {
      var soma = 0;
      for (var i = 0; i < $scope.dados.length; i++) {
        soma += $scope.dados[i].custo;
      }
      return soma;
    }

    $scope.calcularSomaDoFluxoDeCaixa = function() {
      var soma = 0;
      for (var i = 0; i < $scope.dados.length; i++) {
        soma += $scope.dados[i].receita - $scope.dados[i].custo;
      }
      return soma;
    }

    $scope.calcularSomaDaPorcentagem = function(porcentagem) {
      var soma = 0;
      for (var i = 0; i < $scope.dados.length; i++) {
        var fluxoDeCaixa = $scope.dados[i].receita - $scope.dados[i].custo
        soma += fluxoDeCaixa / porcentagem;
      }
      return soma;
    }

    $scope.calcularTaxaDeDesconto = function(linha, taxaIndex) {
      var fluxoDeCaixa = linha.receita - linha.custo;
      var inicial = 1 + ($scope.taxasDeDesconto[taxaIndex] / 100);

      var fator = Math.pow(inicial, linha.ano);
      //($scope.taxasDeDesconto[1] / 100) + 1;

      return fluxoDeCaixa / fator;
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

/*.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})*/

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

function calc(){
  if(document.getElementById('popup').style.display == 'block')
    document.getElementById('popup').style.display = 'none';
  else
    document.getElementById('popup').style.display = 'block';
}
