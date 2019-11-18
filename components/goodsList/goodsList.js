// components/goodsList/goodsList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      list:{
        type:Array,
        value:[]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
     idx:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    listClick(e) {
      console.log(e.currentTarget.dataset.idx)
      this.setData({
        idx: e.currentTarget.dataset.idx
      })
      let { idx } = e.currentTarget.dataset
      this.triggerEvent('getIndex',idx)
    }
  }
 
})
