// pages/collect/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     
    collectHead: [{
      id: 1,

      value:"商品收藏",
      flag:true
    },
      {
        id: 2,

        value: "品牌收藏",
        flag: false
      },
      {
        id: 3,

        value: "店铺收藏",
        flag: false
      },
      {
        id: 4,

        value: "浏览足迹",
        flag: false
      }
    ],
     collectNav:[
       {
         id:1,
         value:"全部",
         flag:true
       },
       {
         id: 2,
         value: "正在热卖",
         flag: false
       },
       {
         id: 3,
         value: "即将上线",
         flag: false
       }
     ],
    flagsArr:[]
  },
  // 子传父
  pfn(res) {
     console.log(res)
     this.setData({
       collectHead:res.detail
     })
  },
  navCollect(res) {
    this.setData({
      collectNav: res.detail
    })
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
      let flagsArr = wx.getStorageSync("flagsArr")
    this.setData({
      flagsArr
    })
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

  }
})