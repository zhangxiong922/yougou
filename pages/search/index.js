// pages/search/index.js
import { request } from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      qsearch:[],
      flag:true,
      value:""
  },
  timeOut:-1,
  setQuery(e) {
    // console.log(e)
    let value = e.detail.value.trim()
    if(!value) {
      this.setData({
        flag: true,
        qsearch: [],
      })
      return
    }
    this.setData({
      flag:false,
      value
    })
    clearTimeout(this.timeOut)
    this.timeOut = setTimeout(() => {
        
    this.qsearch(value)
    },1000)
  },
  async qsearch(query ) {
     let res = await request({
       url:"/goods/qsearch",
       data:{
         query
       }
     })
     console.log(res)
     this.setData({
       qsearch:res.data.message
     })
  },
  quxiao() {
    this.setData({
      flag: true,
      qsearch: [],
      value:''
    })
    clearTimeout(this.timeOut)
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

  }
})