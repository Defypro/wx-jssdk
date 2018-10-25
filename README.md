# wx-jssdk [![Build Status](https://img.shields.io/circleci/project/yangmingshan/@defy/wx-jssdk.svg)](https://circleci.com/gh/yangmingshan/@defy/wx-jssdk) [![Coverage Status](https://img.shields.io/codecov/c/github/yangmingshan/@defy/wx-jssdk.svg)](https://codecov.io/gh/yangmingshan/@defy/wx-jssdk) [![Downloads](https://img.shields.io/npm/dt/@defy/wx-jssdk.svg)](https://www.npmjs.com/package/vue-bus) [![Version](https://img.shields.io/npm/v/@defy/wx-jssdk.svg)](https://www.npmjs.com/package/@defy/wx-jssdk) [![License](https://img.shields.io/npm/l/@defy/wx-jssdk.svg)](https://www.npmjs.com/package/@defy/wx-jssdk)
提取微信官方JSSDK，部分api接口使用Promise包装，后期根据使用添加.

## Installation
You can install it via [npm](https://npmjs.com).
```
$ npm i @defy/wx-jssdk -S
```
When used with a module system, you must explicitly install the bus via Vue.use():
```
import Vue from 'vue';
import WxJssdk from '@defy/wx-jssdk'

Vue.prototype.$wx = WxJssdk;
```

## Usage
```
// ...
mounted() {
  this.$wx.config({debug = false, appId:'', timestamp:'', nonceStr:'', signature:'', jsApiList = []})
}
```
#### Trigger
```
// ...
methods: {
  scanQRCode() {
    this.$wx.scanQRCode().then(res=>{
    	console.log(res)
    })
  }
}
```
## License
[MIT](https://opensource.org/licenses/MIT)
