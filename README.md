<h1 id="angular-multipick">angular-multipick</h1>

<p>A Jquery UI / Primefaces picklist similar component built for use on Angular JS.</p>

<hr>



<h2 id="usage">Usage</h2>

<p>Just clone this repository and add the following dep to your <strong><em>Angular JS</em></strong> project: <br>
    - <strong><em>angular-multipick.js</em></strong></p>



<h4 id="load-the-angular-multipick-module-to-your-app">Load the angular-multipick module to your app</h4>



<pre class="prettyprint"><code class=" hljs coffeescript"><span class="hljs-regexp">//</span> Add the multipck <span class="hljs-built_in">module</span> <span class="hljs-literal">on</span> my application
<span class="hljs-reserved">var</span> app = angular.<span class="hljs-built_in">module</span>(<span class="hljs-string">'myApplication'</span>,[<span class="hljs-string">'angular-multipick'</span>]);</code></pre>



<h4 id="start-using">Start using</h4>



<pre class="prettyprint"><code class=" hljs vhdl">// <span class="hljs-keyword">All</span> we need <span class="hljs-keyword">is</span> an <span class="hljs-keyword">array</span> <span class="hljs-keyword">for</span> store the result list added <span class="hljs-keyword">on</span> <span class="hljs-keyword">select</span> target 
// <span class="hljs-keyword">and</span> an <span class="hljs-keyword">array</span> <span class="hljs-keyword">of</span> json objects <span class="hljs-keyword">for</span> the source itens

&lt;div multipick results=<span class="hljs-string">"resultList"</span> itens=<span class="hljs-attribute">'itens</span>'&gt;
&lt;/div&gt;</code></pre>



<h4 id="json-objects">JSON Objects</h4>

<p>Following the example above, we need create the following JSON objects using Angular JS:</p>



<h5 id="the-source-list">The source list:</h5>

<pre class="prettyprint"><code class=" hljs r">app.controller(<span class="hljs-string">'MyCtrl'</span>,<span class="hljs-keyword">function</span>($scope){ 
<span class="hljs-keyword">...</span>
// the itens loaded on multipick <span class="hljs-keyword">source</span> list
$scope.itens = [{
                    label:<span class="hljs-string">"My Item 1"</span>,
                    value:<span class="hljs-string">"myItem1"</span>
                },{
                    label:<span class="hljs-string">"My Item 2"</span>,
                    value:<span class="hljs-string">"myItem2"</span>
                },{
                    label:<span class="hljs-string">"My Item 3"</span>,
                    value:<span class="hljs-string">"myItem3"</span>
                },{
                    label:<span class="hljs-string">"My Item 4"</span>,
                    value:<span class="hljs-string">"myItem4"</span>
                },{
                    label:<span class="hljs-string">"My Item 5"</span>,
                    value:<span class="hljs-string">"myItem5"</span>
                },{
                    label:<span class="hljs-string">"My Item 6"</span>,
                    value:<span class="hljs-string">"myItem6"</span>
                },
];
<span class="hljs-keyword">...</span> </code></pre>

<h5 id="and-a-result-list">and a result list:</h5>

<pre class="prettyprint"><code class=" hljs r">app.controller(<span class="hljs-string">'MyCtrl'</span>,<span class="hljs-keyword">function</span>($scope){ 
<span class="hljs-keyword">...</span>

// the itens that will be used as result of multipick list
$scope.resultList = [];

<span class="hljs-keyword">...</span></code></pre>

<h4 id="notes-about-customization">Notes about customization:</h4>

<blockquote>
  <p>The style of select and options element were built on twitter bootstrap just for scaffolding.  <br>
  Feel free to change that and build your own style.</p>
</blockquote>

<h2 id="known-issues">Known Issues</h2>

<ul>
<li>The double click event is fired by the select element. Even firing double click outside the selected options, it will go to the target list. This implementation uses HTML select elements and on Internet Explorer the  element doesn’t fire double click.</li>
</ul>