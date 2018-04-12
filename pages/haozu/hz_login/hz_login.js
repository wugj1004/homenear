// pages/haozu/hz_login/hz_login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_name: "wugj",
    user_pwd: ""
  },

  /**
   * 登录按钮
   */
  login: function (e) {
    console.log("closewindow");
    wx.navigateBack({})();
  },
})