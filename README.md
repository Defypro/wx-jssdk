# wx-jssdk [![Author](https://img.shields.io/badge/author-defy-green.svg)](https://github.com/defypro) [![Build Status](https://travis-ci.org/defypro/wx-jssdk.svg?branch=master)](https://travis-ci.org/defypro/wx-jssdk) [![Downloads](https://img.shields.io/npm/dt/@defy/wx-jssdk.svg)](https://www.npmjs.com/package/@defy/wx-jssdk) [![Version](https://img.shields.io/npm/v/@defy/wx-jssdk.svg)](https://www.npmjs.com/package/@defy/wx-jssdk) [![License](https://img.shields.io/npm/l/@defy/wx-jssdk.svg)](https://www.npmjs.com/package/@defy/wx-jssdk)
提取微信官方JSSDK，部分api接口使用Promise包装，后期根据使用添加.
[微信JS-SDK说明文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)根据文档在对应API后面加上`Async`

## Installation
You can install it via [npm](https://npmjs.com).
```
$ npm i @defy/wx-jssdk -S
```

```
import Vue from 'vue';
import WxJssdk from '@defy/wx-jssdk'

Vue.prototype.$wx = WxJssdk;
```

## Usage
```
// ...
mounted() {
  this.$wx.configAsync({debug = false, appId:'', timestamp:'', nonceStr:'', signature:'', jsApiList = []}).then(res => {
    console.log(res);
  }).catch(e => {
    console.log(e);
  )
}
```
#### Trigger
```
// ...
methods: {
  scanQRCode() {
    this.$wx.scanQRCodeAsync().then(res=>{
    	console.log(res)
    })
  }
}
```
## License
[MIT](https://opensource.org/licenses/MIT)
