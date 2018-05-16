// pages/view/building.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentFilter: "-1",
    currentSLTab: "0",
    curDistrictId:"-1",
    district: [
      {
        "name": "海淀",
        "district_id": "173",
        "pinyin": "haidian"
      },
      {
        "name": "朝阳",
        "district_id": "174",
        "pinyin": "chaoyang"
      },
      {
        "name": "东城",
        "district_id": "175",
        "pinyin": "dongcheng"
      },
      {
        "name": "西城",
        "district_id": "176",
        "pinyin": "xicheng"
      }
    ],
    streat: [
      {
        "id": 0,
        "name": "全海淀",
        "district_id": "173"
      },
      {
        "id": "66",
        "name": "中关村",
        "pinyin": "zhongguancunsq",
        "district_id": "173"
      },
      {
        "id": "68",
        "name": "蓟门桥",
        "pinyin": "jimenqiaosq",
        "district_id": "173"
      },
      {
        "id": "69",
        "name": "大钟寺",
        "pinyin": "dazhongsisq",
        "district_id": "173"
      },
      {
        "id": "70",
        "name": "马甸",
        "pinyin": "madiansq",
        "district_id": "173"
      },
      {
        "id": "71",
        "name": "五道口",
        "pinyin": "wudaokousq",
        "district_id": "173"
      },
      {
        "id": "72",
        "name": "上地",
        "pinyin": "shangdisq",
        "district_id": "173"
      },
      {
        "id": "74",
        "name": "清河",
        "pinyin": "qinghesq",
        "district_id": "173"
      },
      {
        "id": "75",
        "name": "西三旗",
        "pinyin": "xisanqisq",
        "district_id": "173"
      },
      {
        "id": "76",
        "name": "五棵松",
        "pinyin": "wukesongsq",
        "district_id": "173"
      },
      {
        "id": "77",
        "name": "紫竹桥",
        "pinyin": "zizhuqiaosq",
        "district_id": "173"
      },
      {
        "id": "78",
        "name": "公主坟",
        "pinyin": "gongzhufensq",
        "district_id": "173"
      },
      {
        "id": "82",
        "name": "白石桥",
        "pinyin": "baishiqiaosq",
        "district_id": "173"
      },
      {
        "id": "84",
        "name": "海淀其他",
        "pinyin": "haidianqitasq",
        "district_id": "173"
      },
      {
        "id": "85",
        "name": "四季青",
        "pinyin": "sijiqingsq",
        "district_id": "173"
      },
      {
        "id": "88",
        "name": "学院路",
        "pinyin": "xueyuanlusq",
        "district_id": "173"
      },
      {
        "id": "89",
        "name": "牡丹园",
        "pinyin": "mudanyuansq",
        "district_id": "173"
      }
    ]
    
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
    if (this.data.currentFilter == _val){
      _val = "-1"
    }

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
    
  },

  clickItem: function(e){
    let disId = e.target.dataset.districtId;
    this.setData({
      curDistrictId: disId
    })
    

  }


})