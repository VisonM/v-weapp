// pages/lottie/index.js
// import lottie from 'lottie-miniapp';
// console.log(lottie)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    anidata: null,
    aniPath: '',
    width: 200,
    height: 200
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    func3.call(this)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})

function func3() {
  this.setData({
    aniPath: 'https://assets5.lottiefiles.com/datafiles/jEgAWaDrrm6qdJx/data.json'
  })
}
//success https://assets1.lottiefiles.com/packages/lf20_g8SKoA.json
//O'clock https://assets6.lottiefiles.com/packages/lf20_KqyKvM.json
//rotate-loading https://assets7.lottiefiles.com/packages/lf20_tB5qur.json
//dot-suceess https://assets5.lottiefiles.com/datafiles/jEgAWaDrrm6qdJx/data.json
//gift https://assets5.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json
//bicycle-loading https://assets10.lottiefiles.com/datafiles/jW5K6vtuzJFJSxd/data.json