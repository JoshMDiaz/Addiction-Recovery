angular.module('arApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  // $scope.loginData = {};

  // // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };
  //
  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);
  //
  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
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
      verse: "10 When Jesus had lifted up himself, and saw none but the woman, he said unto her, Woman, where are those thine accusers? hath no man condemned thee?<br><br>11 She said, No man, Lord. And Jesus said unto her, Neither do I condemn thee: go, and sin no more.<br><br>12 Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.",
      chapter: "John 8: 10-12"
    },
    {
      verse: "19 Therefore, lift up your heads, and rejoice, and put your trust in God, in that God who was the God of Abraham, and Isaac, and Jacob; and also, that God who brought the children of Israel out of the land of Egypt, and caused that they should walk through the Red Sea on dry ground, and fed them with manna that they might not perish in the wilderness; and many more things did he do for them.",
      chapter: "Mosiah 7: 19"
    },
    {
      verse: "18 I am encompassed about, because of the temptations and the sins which do so easily beset me.<br><br>19 And when I desire to rejoice, my heart groaneth because of my sins; nevertheless, I know in whom I have trusted.<br><br>20 My God hath been my support; he hath led me through mine afflictions in the wilderness; and he hath preserved me upon the waters of the great deep.<br><br>28 Awake, my soul! No longer droop in sin. Rejoice, O my heart, and give place no more for the enemy of my soul.<br><br>29 Do not anger again because of mine enemies. Do not slacken my strength because of mine afflictions.<br><br>30 Rejoice, O my heart, and cry unto the Lord, and say: O Lord, I will praise thee forever; yea, my soul will rejoice in thee, my God, and the rock of my salvation.",
      chapter: "2 Nephi 4: 18-20, 28-30"
    },
    {
      verse: "19 For the natural man is an enemy to God, and has been from the fall of Adam, and will be, forever and ever, unless he yields to the enticings of the Holy Spirit, and putteth off the natural man and becometh a saint through the atonement of Christ the Lord, and becometh as a child, submissive, meek, humble, patient, full of love, willing to submit to all things which the Lord seeth fit to inflict upon him, even as a child doth submit to his father.",
      chapter: "Mosiah 3:19"
    }
  ];
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

.controller('InspirationalMsgsCtrl', function($scope, $stateParams) {
  $scope.inspirationalMessages = [
    {
      author: "1",
      message: "Test1",
    },
    {
      author: "2",
      message: "Test2",
    },
    {
      author: "3",
      message: "Test3",
    },
    {
      author: "4",
      message: "Test4",
    },
    {
      author: "5",
      message: "Test5",
    },
    {
      author: "6",
      message: "Test6",
    },
    {
      author: "7",
      message: "Test7",
    }
  ]
})

// .controller('InspirationalMsgCtrl', function($scope, $stateParams) {
// })

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
