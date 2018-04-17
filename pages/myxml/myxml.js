// pages/myxml/myxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"wxs 条件渲染案例",
    condition:true,
    length:1,
    flag:false,

    a: 1,
    b: 2,
    c: 3,

    objecttest: {
      key: 'Hello '
    },
    array: ['MINA'],

    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],

    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },


    bindClick:'Click me!',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  tapName: function (event){
    console.log('绑定事件')
    this.setData({
      bindClick:'修改绑定事件文案'
    })
  }
})