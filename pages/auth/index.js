// pages/auth/index.js
import { request } from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime.js"
import {login} from "../../utils/wxAddress.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 支付授权
 async userInfo(e) {
 console.log(e)
    let { encryptedData, rawData, iv, signature} = e.detail
    let code = ""
  // wx.login({
  //   success:(res) =>{
  //     console.log(res)
  //     code = res.code
  //   }
  // })
  let loginRes = await login()
  console.log(loginRes)
  code = loginRes.code
  console.log(code)

   let payObj = { encryptedData, rawData, iv, signature, code}
   let res = await request({
     url:"/users/wxlogin",
     method:"POST",
     data:payObj
   })
   console.log(res)
  //  没有企业的appID是无法成功的
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