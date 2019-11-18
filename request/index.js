let num = 0
export const request = (params) => {
  num++
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  let baseUrl = "https://api.zbztb.cn/api/public/v1"
  return new Promise((resove, reject) => {
    wx.request({
      ...params,
      url:baseUrl + params.url,
      success: (result) => {
        resove(result)
        wx.stopPullDownRefresh()

      },
      fail: (err) => {
        reject(err)
      },
      complete() {
        num--
        if(num === 0) {

        wx.hideLoading()
        }
      }
    })
  })
}