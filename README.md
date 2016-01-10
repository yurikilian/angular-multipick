angular-multipick
===================


A Jquery UI / Primefaces picklist similar component built for use on Angular JS.

----------


Usage
-------------

Just clone this repository and add the following dep to your ***Angular JS*** project:
	- ***angular-multipick.js***


#### Load the angular-multipick module to your app

```
// Add the multipck module on my application
var app = angular.module('myApplication',['angular-multipick']);
```

####Start using

```
// All we need is an array for store the result list added on select target 
// and an array of json objects for the source itens

<div multipick results="resultList" itens='itens'>
</div>
```

####JSON Objects

Following the example above, we need create the following JSON objects using Angular JS:

- The source list:
```
// the itens that will be used on multipick list
app.controller('MyCtrl',function($scope){ 
...
$scope.itens = [{
					label:"My Item 1",
					value:"myItem1"
				},{
					label:"My Item 2",
					value:"myItem2"
				},{
					label:"My Item 3",
					value:"myItem3"
				},{
					label:"My Item 4",
					value:"myItem4"
				},{
					label:"My Item 5",
					value:"myItem5"
				},{
					label:"My Item 6",
					value:"myItem6"
				},
];
... 
```

and a result list:

```
app.controller('MyCtrl',function($scope){ 
...

// the itens that will be used on multipick list
$scope.resultList = [];

...
```
