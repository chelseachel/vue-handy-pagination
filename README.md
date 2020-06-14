# vue-handy-pagination
[![](https://img.shields.io/badge/npm-v0.1.1-green)](https://www.npmjs.com/package/vue-handy-pagination)
<br>
<br>
A Vue.js pagination component.<br>
Providing simple API, to customize pages, color and other styles very easily.<br>
<br>
**[Online Demo](https://chelseachel.github.io/vue-handy-pagination/)** <br>
<br>

## Installation
### NPM
Install the npm package.
```
npm install vue-handy-pagination --save
```
Import the component. 
```js
import Vue from 'vue'
import Pagination from 'Pagination'
Vue.use(Pagination)
```
### CDN
Use the source file in browser.
```js
<script src="https://unpkg.com/vue-handy-pagination@latest/dist/vue.pagination.js"></script>
```
## Usage
### Basic Usage
```vue
<pagination 
  :totalPages="28"
  :initialPage="1">
</pagination>
```
#### Example
Bind a variable.
```vue
<template>
  <pagination 
    :totalPages="totalPages"
    :initialPage="initialPage">
  </pagination>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      totalPages: 28,
      initialPage: 10
    }
  }
</script>
```
Bind different variables, to customize color or other styles. Please reference the props below. <br>
**[ View demo.](https://chelseachel.github.io/vue-handy-pagination/)** <br>
```vue
<template>
  <pagination 
    :totalPages="totalPages"
    :color="color"
    :background="background"
    :weight="weight">
  </pagination>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      totalPages: 28,
      color: '#cca8bb',
      background: '#fffafa',
      weight: 'light'
    }
  }
</script>
```
### Custom Event
Listen for a custom event ```@changePage``` when page get changed.
```vue
<template>
  <pagination 
    :totalPages="totalPages"
    @changePage="getCurrentPage(page)">
  </pagination>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      totalPages: 28,
    }
  },
  methods: {
    getCurrentPage(page) {
      console.log(page)
    }
  }
</script>
```
## Props
Name | Description | Default | Type 
-|-|-|-
```totalPages``` | Total count of pages. | 20 | ```Number``` 
```initialPage``` | Set a default page. | 1 | ```Number``` 
```pre``` | Set text for button Prev. | 'Prev' | ```String``` 
```next``` | Set text for button Next. | 'Next' | ```String``` 
```color``` | Customize theme color, which will set the font color and the border color. | '#2C3E50' | ```String``` 
```background``` | Customize background color. | '#FFFFFF' | ```String``` 
```weight``` | Pagination style. Providing two kinds of style: **normal** or **light**. | normal| ```String``` 
```ellipsis``` | Set text for the break view indicator. | '···' | ```String``` 
```font``` | Set a font-family. | 'Avenir' | ```String``` 

## Events
Event |Description | Example
-|-|-
changePage | This event will be triggered whenever page get changed. <br>The callback receives the current page number as an argument. | ```@changePage="getCurrentPage(page)"```

