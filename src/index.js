const wx = require('../lib/jweixin-1.4.0');

const extend = {
    /**
     * 加载配置
     * @param debug 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
     * @param appId 必填，公众号的唯一标识
     * @param timestamp 必填，生成签名的时间戳
     * @param nonceStr 必填，生成签名的随机串
     * @param signature 必填，签名
     * @param jsApiList 必填，需要使用的JS接口列表
     */
    config({debug = false, appId, timestamp, nonceStr, signature, jsApiList = []} = {}) {
        jsApiList = jsApiList.length === 0 ? [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'translateVoice',
            'startRecord',
            'stopRecord',
            'onVoiceRecordEnd',
            'playVoice',
            'onVoicePlayEnd',
            'pauseVoice',
            'stopVoice',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'
        ] : jsApiList;
        wx.config({
            debug: debug,
            appId: appId,
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signature,
            jsApiList: jsApiList
        });
    },
    /**
     * 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
     * @param title 分享标题
     * @param link 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
     * @param imgUrl 分享图标
     * @returns {Promise<any>}
     */
    updateTimelineShareData({title, link, imgUrl} = {}) {
        return new Promise((resolve) => {
            wx.updateTimelineShareData({
                title: title,
                link: link,
                imgUrl: imgUrl
            }, (res) => {
                resolve(res);
            });
        })
    },
    /**
     * 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
     * @param title 分享标题
     * @param desc 分享描述
     * @param link 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
     * @param imgUrl 分享图标
     * @returns {Promise<any>}
     */
    updateAppMessageShareData({title, desc, link, imgUrl} = {}) {
        return new Promise((resolve) => {
            wx.updateTimelineShareData({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl
            }, (res) => {
                resolve(res);
            });
        })
    },
    /**
     * 微信扫一扫
     * @param needResult 默认为0，扫描结果由微信处理，1则直接返回扫描结果
     * @param scanType 可以指定扫二维码还是一维码，默认二者都有
     * @returns {Promise<any>}
     */
    scanQRCode(needResult = 1, scanType = ["qrCode", "barCode"]) {
        return new Promise(resolve => {
            wx.scanQRCode({
                needResult: needResult,
                scanType: scanType,
                success: function (res) {
                    resolve(res);
                }
            });
        })
    },
    /**
     * 批量隐藏功能按钮接口
     * @param menuList 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     */
    hideMenuItems(menuList = []) {
        wx.hideMenuItems({
            menuList
        });
    },
    /**
     * 批量显示功能按钮接口
     * @param menuList 要显示的菜单项，附录3-所有菜单项列表
     */
    showMenuItems(menuList = []) {
        wx.showMenuItems({
            menuList
        });
    },
    /**
     * 隐藏所有非基础按钮接口
     */
    hideAllNonBaseMenuItem() {
        wx.hideAllNonBaseMenuItem();
    },
    /**
     * 显示所有功能按钮接口
     */
    showAllNonBaseMenuItem() {
        wx.showAllNonBaseMenuItem();
    }
}

module.exports = {...wx, ...extend};