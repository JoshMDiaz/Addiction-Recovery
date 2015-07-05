// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.chat', {
    url: "/chat",
    views: {
      'menuContent': {
        templateUrl: "templates/chat.html"
      }
    }
  })

  .state('app.counter', {
    url: "/counter",
    views: {
      'menuContent': {
        templateUrl: "templates/counter.html",
        controller: 'CounterCtrl'
      }
    }
  })

  .state('app.goals', {
    url: "/goals",
    views: {
      'menuContent': {
        templateUrl: "templates/goals.html"
      }
    }
  })

  .state('app.inspirational-messages', {
    url: "/inspirational-messages",
    views: {
      'menuContent': {
        templateUrl: "templates/inspirational-messages.html"
      }
    }
  })

  .state('app.local-meetings', {
    url: "/local-meetings",
    views: {
      'menuContent': {
        templateUrl: "templates/local-meetings.html"
      }
    }
  })

  .state('app.pdf', {
    url: "/pdf",
    views: {
      'menuContent': {
        templateUrl: "templates/pdf.html"
      }
    }
  })

  .state('app.reminders', {
    url: "/reminders",
    views: {
      'menuContent': {
        templateUrl: "templates/reminders.html"
      }
    }
  })

    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/counter');
});
