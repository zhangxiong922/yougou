// pages/goods_detail/index.js
import { request } from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
     goods_id:0,
     goods_obj:{},
     isFlag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.goods_id)
     console.log(options)
     this.setData({
       goods_id:options.goods_id
     })
     this.getList()
  },
     async getList() {
       console.log(this.data.goods_id)
       let goods_id = this.data.goods_id
       console.log(goods_id)
       let res = await request({
         url:"/goods/detail",
         data: { goods_id }
         })
         console.log(res)
       let shuju = res.data.message
         this.setData({
           goods_obj:shuju
         })
     },
    //  点击放大图片
  bigImage(e) {
    let urls = this.data.goods_obj.pics.map(v => v.pics_mid)
    console.log(e)
    let current = urls[e.currentTarget.dataset.img]
    wx.previewImage({
      current, // 当前显示图片的http链接
      urls // 需要预览的图片http链接列表
    })
  },
  // 加入购物车
  setGoods() {
     let goods = wx.getStorageSync("goods") || []
    let index = goods.findIndex(v => v.pics[0].goods_id == this.data.goods_id)
    console.log(index)
    if(index == -1) {
      this.data.goods_obj.num = 1;
      this.data.goods_obj.flag = true
      goods.push(this.data.goods_obj)
    } else {
      goods[index].num++
    }
    wx.setStorageSync("goods", goods)
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000,
      mask:true
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
    let currentPages = getCurrentPages() 
    console.log(currentPages)
    let flagsArr = wx.getStorageSync("flagsArr") || []
    let isFlags = flagsArr.some(v => v.goods_id == this.data.goods_id)
    if (isFlags) {
      this.setData({
        isFlag: true
      })
    } else {
      this.setData({
        isFlag: false
      })
    }
    
  },
  // 点击收藏
  shoucang() {
    let flagsArr = wx.getStorageSync("flagsArr") || []
    console.log(flagsArr)
   let isFlags = flagsArr.some(v => v.goods_id == this.data.goods_id)
   console.log(isFlags)
   if(isFlags) {
     this.setData({
       isFlag:false
     })
     let index = flagsArr.findIndex(v => v.goods_id == this.data.goods_id)
     console.log(index)
     flagsArr.splice(index,1)
     wx.setStorageSync("flagsArr", flagsArr)
   } else {
     this.setData({
       isFlag: true
     })
     flagsArr.push(this.data.goods_obj)
     wx.setStorageSync("flagsArr", flagsArr)
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