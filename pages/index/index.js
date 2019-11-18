import {request} from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
     bannerList:"",
     publicList:'',
    floordataList:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 轮播图
     this.getBanner()
    this.getPublic()
    this.getfloordata()
  },
 // 获取轮播图
  async getBanner(){
    //  request({
    //    url: "/home/swiperdata"
    //  }).then(result => {
    //   //  console.log(result)
    //    this.setData({
    //      bannerList: result.data.message
    //    })
    //  })
    let result = await request({ url: "/home/swiperdata"})
    console.log(result)
    this.setData({
         bannerList: result.data.message
       })
   },
  //  获取导航
  getPublic() {
    request({
      url:"/home/catitems"
    }).then(result => {
      // console.log(result.data.message)
      this.setData({
        publicList: result.data.message
      })
    })
  },
  // 获取楼层
  getfloordata() {
     request({
       url:"/home/floordata"
     }).then(res => {
       console.log(res.data.message)
       this.setData({
         floordataList: res.data.message
       })
     })
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
    
  }
})

