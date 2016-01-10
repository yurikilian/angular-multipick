# angular-multipick
A Jquery UI / Primefaces picklist similar component built for use on Angular JS.

Usage
-------------

Just clone this repository and add the following dep to your project:
	- angular-multipick.js

Load the angular-multipick module to your app:

```
// Add the multipck module on my application
var app = angular.module('myApplication',['angular-multipick']);
```

Start using:

```
// All we need is an array for store the result list added on select target 
// and an array of json objects for the source itens
<div multipick results="resultList" itens='itens'></div>

```
