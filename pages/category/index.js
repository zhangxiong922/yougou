// pages/category/index.js
import {request} from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
      scrollLeft:'',
      scrollRight:'',
      idx : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getScroll()
    let keys = wx.getStorageSync("keys")
    // console.log(keys)

    if(!keys) {
      this.getScroll()
      // console.log(1)
    } else {
      // console.log(2)

      let scrollRight = keys[0].children
      this.setData({
        scrollLeft: keys,
        scrollRight
      })

    }
  },
  
  // 左侧列表点击
  txtClick(e) {
    // console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    this.setData({
      idx:index
    })
    let scrollRight =this.data.scrollLeft[index].children
    this.setData({
      
      scrollRight
    })
  },
  // scroll列表
 async getScroll() {
    // request({
    //   url: 'categories'
    // }).then(res => {
    //   // console.log(res)
    //   let scrollRight = res.data.message[0].children
    //   this.setData({
    //     scrollLeft:res.data.message,
    //     scrollRight
    //   })
    //   wx.setStorageSync("keys", res.data.message)
    // })
   let res = await request({ url: '/categories'})
  //  console.log(res)
   let scrollRight = res.data.message[0].children
      this.setData({
        scrollLeft:res.data.message,
        scrollRight
      })
   wx.setStorageSync("keys", res.data.message)
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