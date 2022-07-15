app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.6',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: 'Pizza Siziliana',
      description: 'Pizza with mozzarella, anchovies, kalamata olivs and basil',
      price: 12.5
    },
    {
      name: 'Prosciutto e panchetta',
      description: 'Ham, panchetta, marinarasaus, mozzarella',
      price: 13.1
    },
    {
      name: 'Pizza quattro formaggi',
      description: 'Pizza with ricotta, gorgonzola, goat and mozzarella cheese',
      price: 11.75
    }
  ];

  $scope.extras = [
    {
      name: 'Caper',
      price: 2.5
    },
    {
      name: 'Kalamata Olivs',
      price: 3.0
    },
    {
      name: 'Extra Mozzarella Cheese',
      price: 2.00
    }
  ];

  $scope.sherlock = {
    series: "Sherlock",
    genre: "Crime drama",
    season: 3,
    episode: "The Empty Hearse",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  },

  $scope.arrested_development = {
    series: "Arrested Development",
    genre: "Sitcom",
    season: 2,
    episode: "Righteous Brothers",
    description: "The model home collapses. Tobias and Kitty head to Las Vegas together.",
    datetime: new Date(2014, 11, 31, 23, 00, 00, 00)
  }

  $scope.posts = [
    {
      author: {
        name: 'Calvin Broadus, Jr.'
      },
      comment: {
        text: 'How much for that dogg in the window?'
      }
    },


    {
      author: {
        name: 'Matthew Healy'
      },
      comment: {
        text: 'I used to have a recurring dream when I was younger.'
      }
    }
  ]

}]);