<a name="Router"></a>

## Router
`mce-router` is an element that responds to url hash change.
mce-router watches the url hash changes, find a proper route, and load html.
On the other hand, mce-route(without r) does fetch, template caching, transition, and replacing, and throws error if erroneous
A router has div.router-html to show the path-related contents.

### example
```
<mce-router>
  <mce-route path="page1" import="page1.html" no-cache=""></mce-route>
  <mce-route path="page2" import="page2.html"></mce-route>
  <mce-route path="not-found" import="not-found.html"></mce-route>
  <mce-route path="" redirect="page1"></mce-route>
</mce-router>
``` 

 <iframe frameborder="no" width="100%" height="300" src="https://embed.plnkr.co/DiFMep?show=preview"></iframe>

### `mce-router` atttibutes
 |name          |value     |description                                                  |
 |--------------|----------|-------------------------------------------------------------|
 |base-path     | url path | Optional. default '/', base path of this router. All route path will be prefixed with this base path.
 |import        | url      | **required**, url of partial html
 |no-cache      | boolean  | Optional,Indicates that the route view template is not cached.
 |resolve-func  | function | Optional, route level resolve function. e.g. data loading. The resolved data will be set to `<mce-route>` element as a data. e.g. `$0.data.foo`, `$0.data.bar`
 |on-route-start| function | Optional, injector function to be executed before route starts.
 |on-route-end  | function | Optional, injector function to be executed after route ends.
 |on-http-start | function | Optional, injector function to be executed before all http requests calls. This can change http request. It must return `fetch` [call option](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)
 |on-http-end   | function | Optional, injector function to be executed after all http responses. This can change http response. It must return a Promise

#### `resolve-func` example
```
   &lt;mce-router resolve-func="routerResolve()">....&lt;/mce-router>
   &lt;script>
     function routerResolve(route) {
       console.log('executing router-resolve');
       return new Promise(function(resolve, reject) {
         setTimeout(function() { resolve({data: 'router'}); }, 1000);
       });
     },
   &lt;/script>
```
#### `on-http-start` example
```
   &lt;mce-router resolve-func="onHttpStart">....&lt;/mce-router>
   &lt;script>
     function onHttpStart(route) {
       console.log('executing on-http-start');
       return {method: 'GET'}; // must return httpOptions
     },
   &lt;/script>
```
#### `on-http-end` example
```
   &lt;mce-router on-http-end="onHttpEnd">....&lt;/mce-router>
   &lt;script>
     function onHttpEnd(response) { 
       console.log('executing on-http-end');
       return response.text(); // must return a promise
     }
   &lt;/script>
```
#### `on-route-start` example
```
  &lt;mce-router on-route-start="onRouteStart">....&lt;/mce-router>
  &lt;script>
    function onRouteStart(route) { 
      console.log('executing on-route-start');
      return route;
    }
  &lt;/script>
```
#### `on-route-end` example
```
   &lt;mce-router on-route-end="onRouteEnd">....&lt;/mce-router>
   &lt;script>
     function onRouteEnd(route) { 
       console.log('executing on-route-end');
       return route;
     }
   &lt;/script>
```

