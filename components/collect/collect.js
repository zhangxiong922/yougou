// components/collect/collect.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     tbs:{
       type:Array,
       value:[]
     },
     tbss:{
       type:Array,
       value:[]
     },
     tbsss:{
       type: Array,
       value: []
     }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    setHeader(e) {
      console.log(e.target.dataset.id)
      this.data.tbs.forEach(v => {
        v.flag = false
        if(v.id == e.target.dataset.id) {
          v.flag = true
        }
      })
        console.log(this.data.tbs)
      this.triggerEvent('zifn',this.data.tbs)
    },
    navCollect(e) {
      console.log(e.target.dataset.id)
        this.data.tbss.forEach(v => {
          v.flag = false;
          if (v.id == e.target.dataset.id) {
            v.flag = true
          }
        })
      console.log(this.data.tbss)
      this.triggerEvent('NavCollect', this.data.tbss)

    }
  }
})
