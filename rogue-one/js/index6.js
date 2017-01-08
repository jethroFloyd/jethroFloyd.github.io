
angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
})
.controller('AppCtrl', function($scope) {
    var imagePath = 'img/bids/';

    $scope.phones = [
      {
        type: 'Home',
        number: '(555) 251-1234',
        options: {
          icon: 'communication:phone'
        }
      },
      {
        type: 'Cell',
        number: '(555) 786-9841',
        options: {
          icon: 'communication:phone',
          avatarIcon: true
        }
      },
      {
        type: 'Office',
        number: '(555) 314-1592',
        options: {
          face : imagePath
        }
      },
      {
        type: 'Offset',
        number: '(555) 192-2010',
        options: {
          offset: true,
          actionIcon: 'communication:phone'
        }
      }
    ];
    $scope.todos = [
      {
        face : imagePath + 'chicken' + '.jpg',
       who: 'Chicken',
        what: 'Number of Bids -  2',
        when: '3:08PM',
        notes: " Best Rate: Rs. 30/Kg"
      },
      {
        face : imagePath + 'paneer' + '.jpg',
        who: 'Paneer',
        what: 'Number of Bids -  45',
        when: '3:08PM',
        notes: " Best Rate: Rs. 180/Kg"
      },
      {
        face : imagePath + 'rice' + '.jpg',
        who: 'Rice',
        what: 'Number of Bids -  21',
        when: '3:08PM',
        notes: " Best Rate: Rs. 38/Kg"
      },
      {
        face : imagePath + 'potato' + '.jpg',
       who: 'Potato',
        what: 'Number of Bids -  22',
        when: '3:08PM',
        notes: " Best Rate: Rs. 9/Kg"
      },
      {
        face : imagePath + 'tomato' + '.jpg',
        who: 'Tomato',
        what: 'Number of Bids -  22',
        when: '3:08PM',
        notes: " Best Rate: Rs. 12/Kg"
      },
    ];
});

