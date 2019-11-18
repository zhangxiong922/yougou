// pages/cart/index.js
import { request } from "../../request/index.js"
import { getSetting, chooseAddress, openSetting } from "../../utils/wxAddress.js"
import regeneratorRuntime from "../../lib/runtime/runtime.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    goods: [],
    allPrice: 0,
    allNum: 0
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
    let address = wx.getStorageSync("address") 
    let goods = wx.getStorageSync("goods") 
   goods = goods.filter(v => v.flag)
    this.setData({
      address
    })
    this.setFlagsNum(goods)
  },
  // 封装全选和计算
  setFlagsNum(goods) {
    // 总价格 总数量
    let allPrice = 0
    let allNum = 0
    goods.forEach(v => {
        allPrice += v.num * v.goods_price
        allNum += v.num
    })
    this.setData({
      goods,
      allPrice,
      allNum,
    })
  },
 
//  支付
  pay() {
    let token = wx.getStorageSync("token")
    if(!token) {
      wx.navigateTo({
        url: '/pages/auth/index',
      })
    }
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