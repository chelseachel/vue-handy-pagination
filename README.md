# vue-handy-pagination
a Vue.js pagination component.<br>
Providing simple API, and you can customize pages, color and other styles very easily.<br>
[Online demo](https://codepen.io/chelseachel/full/JjYQOZj) <br>
Docs under development...<br>

## Installation
---
### NPM
```
npm install vue-handy-pagination --save
```
import the component:
```javascript
import Pagination from 'Pagination'
Vue.use(Pagination)
```
## Usage
---
### Basic Usage
```javascript
<pagination 
  :totlePages="28"
  :initialPage="1">
</pagination>
```
### Example
```javascript
<template>
  <pagination 
    :totlePages="totlePages"
    :initialPage="initialPage">
  </pagination>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      totlePages: 28,
      initialPage: 10
    }
  }
</script>
```
