// detail.js
var app = getApp()
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentPage :0,
  },

  onLoad: function (options) {
    var that = this;
    console.log("detail loadinng ...");
    // 商品详情
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/goods/inqgoods?id=' + options.id,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          shopppingDetails: res.data.data,
        })
        var goodsPicsInfo = [];
        // var goodsPicsObj = {};
        var goodspic = res.data.data.goodspics;
        var goodspics = goodspic.substring(0, goodspic.length - 1);
        var goodspicsArr = goodspics.split("#");
        for (var i = 0; i < goodspicsArr.length; i++) {
          goodsPicsInfo.push({
            "picurl": goodspicsArr[i]
          });
        }
        that.setData({
          goodsPicsInfo: goodsPicsInfo,
        })
      }
    })

  }
})