// pages/view/building.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentFilter: "-1",
    currentSLTab: "0",
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


  switchFilter: function (e) {
    let _val = e.target.dataset.val
    this.setData({
      currentFilter: _val
    })

  },

  switchBtn: function (e) {


    let _id = e.target.dataset.id
    this.setData({
      currentSLTab: _id
    })
  },

  hiddenPop: function (e) {
    this.setData({
      currentFilter: "-1"
    })
  },

  emptyFun:function(e){
    
  }
})