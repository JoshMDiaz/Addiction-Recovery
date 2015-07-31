angular.module('arApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

// CounterCtrl
.controller('CounterCtrl', function($scope, $ionicModal) {
  $scope.counter = 0;
  $scope.plus = function() {
    $scope.counter += 1;
  };
  $scope.undo = function() {
    if($scope.counter > 0 ) {
      $scope.counter -= 1;
    }
  };

  $scope.reset = function() {
    $scope.counter = 0;
    $scope.modal.show();
    $scope.randomScripture();
  };
  $scope.counterScripturesArray = [
    {
      scripture: "10) When Jesus had lifted up himself, and saw none but the woman, he said unto her, Woman, where are those thine accusers? hath no man condemned thee? 11) She said, No man, Lord. And Jesus said unto her, Neither do I condemn thee: go, and sin no more. 12) Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.",
      chapter: "John 8: 10-12"
    },
    // {
    //   scripture: "You'll be fine!",
    //   chapter: "John 8: 10-12"
    // },
    // {
    //   scripture: "Get up and try again!",
    //   chapter: "John 8: 10-12"
    // },
    // {
    //   scripture: "You got this!",
    //   chapter: "John 8: 10-12"
    // }
  ];
  // $scope.counterScripturesArray = ["It's ok!", "You'll be fine!", "Get up and try again!", "You got this!"];
  $scope.randomScripture = function() {
    $scope.scripture = $scope.counterScripturesArray[Math.floor(Math.random() * $scope.counterScripturesArray.length)];
    return $scope.scripture;
  };



  $ionicModal.fromTemplateUrl('templates/counter-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  })
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
