// pages/cart/index.js
import { request } from "../../request/index.js"
import { getSetting, chooseAddress, openSetting } from "../../utils/wxAddress.js"
import regeneratorRuntime from "../../lib/runtime/runtime.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
     address:{},
     goods:[],
     flags:false,
     allPrice:0,
     allNum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     

  },
  // 添加地址
 async getAdress() {
   let res1 = await getSetting()
   console.log(res1)
   let ress = res1.authSetting["scope.address"]
   if (ress == false) {
     let openRes = await openSetting()
   } 
     let chooseRes = await chooseAddress()
     console.log(chooseRes)
   chooseRes.juTiAddress = chooseRes.provinceName + chooseRes.cityName + chooseRes.countyName + chooseRes.detailInfo
   wx.setStorageSync("address", chooseRes)
  // //  this.onShow()
    
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
    let address = wx.getStorageSync("address") || {}
    let goods = wx.getStorageSync("goods") || []
    this.setData({
      address
      
    })
    this.setFlagsNum(goods)
  },
// 修改选中状态
  setCheck(e) {
    console.log(e.currentTarget.dataset.id)
    let goods = this.data.goods
    let index = goods.findIndex(v => v.goods_id == e.currentTarget.dataset.id)
    console.log(index)
    goods[index].flag = !goods[index].flag
    
    this.setFlagsNum(goods)
  },
  // 封装全选和计算
  setFlagsNum(goods) {
    // 总价格 总数量
    let allPrice = 0
    let allNum = 0
    let flags = true
    goods.forEach(v => {
      if (v.flag) {
        allPrice += v.num * v.goods_price
        allNum += v.num
      } else {
        flags = false
      }
    })
    flags = goods.length == 0 ? false : flags
    this.setData({
goods,
      allPrice,
      allNum,
      flags
    })
    wx.setStorageSync("goods", goods)
  },
  // 全选框
  allCheck() {
    console.log(12)
    let flags = this.data.flags
    flags = !flags
    console.log(flags)
      let goods = this.data.goods
      goods.forEach(v => v.flag = flags)
      console.log(goods)
    this.setFlagsNum(goods)
    
  },
  // 减商品数量
  prevGoodsNum(e) {
    console.log(e.currentTarget.dataset.id)
    let goods_id = e.currentTarget.dataset.id
    let goods = this.data.goods
    let index = goods.findIndex(v => v.goods_id == goods_id)
    console.log(index)
    
    if (goods[index].num == 1) {
      wx.showModal({
        title: '提示',
        content: '确定要删除此商品吗',
        success:(res) => {
          if (res.confirm) {
            console.log('用户点击确定')
            goods.splice(index,1)
            console.log(goods)
            this.setFlagsNum(goods)
          } else if (res.cancel) {
            console.log('用户点击取消')
            
          }
        }
      })
    } else {
      goods[index].num--
    this.setFlagsNum(goods)
    }
           
   

  },
  // 加商品数量
  addGoodsNum(e) {
    let goods_id = e.currentTarget.dataset.id
    let goods = this.data.goods
    let index = goods.findIndex(v => v.goods_id == goods_id)
    console.log(index)
    goods[index].num++
    this.setFlagsNum(goods)

  },
  // 页面跳转
  nav() {
     if(!this.data.address.userName) {
       wx.showToast({
         title: '您还没添加收货地址',
         duration: 2000,
         icon:'none'
       })
     } else {
       if(this.data.goods.length == 0) {
         wx.showToast({
           title: '您还没添加商品',
           duration: 2000,
           icon: 'none'
         
         })
       } else {
         if(this.data.allNum == 0) {
           wx.showToast({
             title: '您还没添加可结算商品',
             duration: 2000,
             icon: 'none'

           })
         } else {

         wx.navigateTo({
           url:"/pages/pay/index"
         })
         }
       }
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