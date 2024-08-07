/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the 'License');
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an 'AS IS' BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });


})();



var launch = angular.module('launch', ['ngClipboard', 'ngRoute']);

launch.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'partials/about.html'
      }).
      when('/creator-info', {
        templateUrl: 'partials/creator-info.html'
      }).
      otherwise({
        templateUrl: 'partials/colors.html'
      });
  }]);


launch.controller('ColorsController', function($scope) {
    $scope.contacts = [
    [{
      color: '#e51c23',
      name: 'red',
      shade: '500',
      text: '#FFF'
    },{
      color: '#ff5177',
      name: 'red',
      shade: 'A200',
      text: '#FFF'
    }], [{
      color: '#e91e63',
      name: 'pink',
      shade: '500',
      text: '#FFF'
    },{
      color: '#ff4081',
      name: 'pink',
      shade: 'A200',
      text: '#FFF'
    }], [{
      color: '#9c27b0',
      name: 'purple',
      shade: '500',
      text: '#FFF'
    },{
      color: '#e040fb',
      name: 'purple',
      shade: 'A200',
      text: '#FFF'
    }], [{
      color: '#673ab7',
      name: 'deep purple',
      shade: '500',
      text: '#FFF'
    },{
      color: '#7c4dff',
      name: 'deep purple',
      shade: 'A200',
      text: '#FFF'
    }], [{
      color: '#3f51b5',
      name: 'indigo',
      shade: '500',
      text: '#FFF'
    },{
      color: '#536dfe',
      name: 'indigo',
      shade: 'A200',
      text: '#FFF'
    }], [{
      color: '#5677fc',
      name: 'blue',
      shade: '500',
      text: '#FFF'
    },{
      color: '#6889ff',
      name: 'blue',
      shade: 'A200',
      text: '#FFF'
    }], [{
      color: '#03a9f4',
      name: 'light blue',
      shade: '500',
      text: '#FFF'
    },{
      color: '#40c4ff',
      name: 'light blue',
      shade: 'A200',
      text: '#FFF'
    }], [{
      color: '#00bcd4',
      name: 'cyan',
      shade: '500',
      text: '#FFF'
    },{
      color: '#18ffff',
      name: 'cyan',
      shade: 'A200',
      text: '#212121'
    }], [{
      color: '#009688',
      name: 'teal',
      shade: '500',
      text: '#FFF'
    },{
      color: '#64ffda',
      name: 'teal',
      shade: 'A200',
      text: '#212121'
    }], [{
      color: '#259b24',
      name: 'green',
      shade: '500',
      text: '#FFF'
    },{
      color: '#5af158',
      name: 'green',
      shade: 'A200',
      text: '#212121'
    }], [{
      color: '#8bc34a',
      name: 'light green',
      shade: '500',
      text: '#FFF'
    },{
      color: '#b2ff59',
      name: 'light green',
      shade: 'A200',
      text: '#212121'
    }], [{
      color: '#cddc39',
      name: 'lime',
      shade: '500',
      text: '#212121'
    },{
      color: '#eeff41',
      name: 'lime',
      shade: 'A200',
      text: '#212121'
    }], [{
      color: '#ffeb3b',
      name: 'yellow',
      shade: '500',
      text: '#212121'
    },{
      color: '#ffff00',
      name: 'yellow',
      shade: 'A200',
      text: '#212121'
    }], [{
      color: '#ffc107',
      name: 'amber',
      shade: '500',
      text: '#212121'
    },{
      color: '#ffd740',
      name: 'amber',
      shade: 'A200',
      text: '#212121'
    }], [{
      color: '#ff9800',
      name: 'orange',
      shade: '500',
      text: '#FFF'
    },{
      color: '#ffab40',
      name: 'orange',
      shade: 'A200',
      text: '#FFF'
    }], [{
      color: '#ff5722',
      name: 'deep orange',
      shade: '500',
      text: '#FFF'
    },{
      color: '#ff6e40',
      name: 'deep orange',
      shade: 'A200',
      text: '#FFF'
    }]

    ];

    $scope.current = '#3F51B5';
    $scope.accent = '#ff4081';
    $scope.text = '#FFF';

    $scope.mobileClick = function(color) {
      if (color.shade == '500') {
          $scope.current = color.color;
          $scope.text = color.text;
        } else if (color.shade == 'A200') {
          $scope.accent = color.color;
      }

    }


    $scope.getSelectedColor = function(color) {

      if (color.shade == '500') {
          $scope.current = color.color;
          $scope.text = color.text;
        } else if (color.shade == 'A200') {
          $scope.accent = color.color;
      }

      document.getElementById("copied").className = "open";
      setTimeout(function(){document.getElementById("copied").className = "closed"},1000);
    }


    $scope.getTextToCopy = function(color) {
        return color.color;
    }

});