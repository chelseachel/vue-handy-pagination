# vue-handy-pagination
[![](https://img.shields.io/badge/npm-v0.1.1-green)](https://www.npmjs.com/package/vue-handy-pagination)
<br>
<br>
A Vue.js pagination component.<br>
Providing simple API, to customize pages, color and other styles very easily.<br>
[Online demo](https://codepen.io/chelseachel/full/JjYQOZj) <br>
<br>

## Installation
### NPM
```
npm install vue-handy-pagination --save
```
Import the component. 
```js
import Pagination from 'Pagination'
Vue.use(Pagination)
```
### CDN
```

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
### Customize style
Assign a value to a prop to customize color or other styles. Please reference the props below.
#### Example
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
### Props
Name | Description | Default | Type 
-|-|-|-
```totalPages``` | Total count of pages. | 20| ```Number``` 
```initialPage``` | Set a default page. | 1| ```Number``` 
```pre``` | Set text for button Prev. | Prev| ```String``` 
```next``` | Set text for button Next. | Next| ```String``` 
```color``` | Customize theme color, which will set the font color and the border color. | #666666| ```String``` 
```background``` | Customize background color. | #FFFFFF| ```String``` 
```weight``` | Pagination style. Providing two kinds of style: **normal** or **light**. | normal| ```String``` 
```ellipsis``` | Set text for the break view indicator. | ···| ```String``` 
```font``` | Set a font-family. | Avenir| ```String``` 
