export const getSetting = () => {
 return new Promise((resove,reject) => {
   wx.getSetting({
     success(res) {
       resove(res)
     }
   })
 })
}

export const chooseAddress =  () => {
  return new Promise((resove, reject) => {
    wx.chooseAddress({
      success(res) {
        resove(res)
      }
    })
  })
}

export const openSetting =  () => {
  return new Promise((resove, reject) => {
    wx.openSetting({
      success(res) {
        resove(res)
      }
    })
  })
}

export const login = () => {
  return new Promise((resove, reject) => {
    wx.login({
      success(res) {
        resove(res)
      }
    })
  })
}