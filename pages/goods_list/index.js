// pages/goods_list/index.js
import {request} from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // goods_id:'',
    goods_list:[],
    // goods_search:''
   
    // 总数量
    total:"",
    list:[
      {
        id:1,
        value:"综合",
        flag:true
      },
      {
          id:2,
          value:"销量",
          flag:false
      },
      {
         id:3,
         value:"价格",
         flag:false
      }
    ]
  },
    queryList:{
      query:'',
      cid:'',
      pagenum:1,
      pagesize:10
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
      this.queryList.query = options.query || ''
     this.queryList.cid = options.id || ""
      this.getList()
  },
  //  渲染列表
  async getList() {
    
    console.log(this.queryList)
    let res = await request({
      url: "/goods/search",
      data: this.queryList
    })
    console.log(res.data.message.goods)
    let resList = res.data.message.goods
  //  let keys = wx.getStorageSync("resList") || []
    resList = [...this.data.goods_list,...resList]
    // wx.setStorageSync("resList", keys)
    console.log(resList)
    this.setData({
      goods_list: resList,
      total: res.data.message.total
    })

  },
 

 
  pfn(e) {
    //  console.log(e.detail)
     let {list} = this.data
     list.forEach((v,i) => i == e.detail ? v.flag = true : v.flag = false)
     this.setData({
       list
     })
    //  console.log(this.data.list)
  

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
    console.log("lla")
    this.queryList.pagenum = 1;
    this.setData({
      goods_list: []
    })
    this.getList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("pp")
    let { pagenum, pagesize } = this.queryList
    let total = this.data.total;
    console.log(total)
    if (total >= pagenum * pagesize) {
      console.log("有下一页")

      pagenum++;
      this.queryList.pagenum = pagenum;
      this.getList()
    } else {
      wx.showToast({
        title: '没有数据了',
        icon: 'none',
        duration: 2000
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})