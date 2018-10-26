import { wx } from './jweixin-1.4.0'

/**
 * 加载配置
 * @param params
 * @returns {Promise<any>}
 */
wx.configAsync = (params = {debug: false, appId: '', timestamp: '', nonceStr: '', signature: '', jsApiList: []}) => {
    return new Promise((resolve, reject) => {
        wx.config(params);
        wx.ready(resolve);
        wx.error(function (res) {
            reject(new Error(res.errMsg));
        });
    });
};

/**
 * 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
 * @param params
 * @returns {Promise<any>}
 */
wx.updateTimelineShareDataAsync = (params = {}) => {
    return new Promise((resolve, reject) => {
        params.fail = res => {
            reject(res);
        };
        wx.updateTimelineShareData(params, (res) => {
            resolve(res);
        });
    })
};

/**
 * 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
 * @param params
 * @returns {Promise<any>}
 */
wx.updateAppMessageShareDataAsync = (params = {}) => {
    return new Promise((resolve, reject) => {
        params.fail = res => {
            reject(res);
        };
        wx.updateTimelineShareData(params, (res) => {
            resolve(res);
        });
    })
};

/**
 * 调用扫一扫
 * @param params
 * @returns {Promise<any>}
 */
wx.scanQRCodeAsync = (params = {needResult: 1, scanType: ["qrCode", "barCode"]}) => {
    return new Promise((resolve, reject) => {
        wx.scanQRCode({
            needResult: params.needResult,
            scanType: params.scanType,
            success(res) {
                resolve(res);
            },
            fail(res) {
                reject(res);
            }
        });
    })
};

export default wx