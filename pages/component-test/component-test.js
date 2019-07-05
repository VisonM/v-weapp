// pages/component-test/component-test.js
import {
  Toast,
  Loading
} from "./../../components/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch1: false,
    'starIndex1': 0,
    dialog: false,
    fade: false,
    segment: ['Segment1', 'Segment2', 'Segment3'],
    news: [{
        title: '廊坊发生刑事案件',
        url: 'xxxx',
        imgSrc: 'http://img5.imgtn.bdimg.com/it/u=2918240254,2454690875&fm=26&gp=0.jpg',
      },
      {
        title: '小伙四万网购奔驰',
        url: 'xxxx',
        imgSrc: 'http://img3.imgtn.bdimg.com/it/u=3013567159,2250112086&fm=26&gp=0.jpg',
      },
      {
        title: '家人去世请假被拒',
        url: 'xxxx',
        imgSrc: 'http://img5.imgtn.bdimg.com/it/u=180988904,275450817&fm=26&gp=0.jpg',
      },
      {
        title: '于正秒删',
        url: 'xxxx',
        imgSrc: 'http://img2.imgtn.bdimg.com/it/u=1094944933,4065700883&fm=26&gp=0.jpg',
      },
      {
        title: '岳华去世',
        url: 'xxxx',
        imgSrc: 'http://img1.imgtn.bdimg.com/it/u=822102141,3878875172&fm=26&gp=0.jpg',
      },
      {
        title: '美将退出中导条约',
        url: 'xxxx',
        imgSrc: 'http://img4.imgtn.bdimg.com/it/u=1828593470,806721422&fm=26&gp=0.jpg',
      },
      {
        title: '范丞丞悼念粉丝',
        url: 'xxxx',
        imgSrc: 'http://img4.imgtn.bdimg.com/it/u=3939936779,946895769&fm=26&gp=0.jpg',
      },
      {
        title: '梅西骨折',
        url: 'xxxx',
        imgSrc: 'http://img4.imgtn.bdimg.com/it/u=3830398842,3489851318&fm=26&gp=0.jpg',
      },
      {
        title: '女子踩到男子',
        url: 'xxxx',
        imgSrc: 'http://img3.imgtn.bdimg.com/it/u=3348027003,368668260&fm=26&gp=0.jpg',
      },
      {
        title: '福原爱宣布退役',
        url: 'xxxx',
        imgSrc: 'http://img1.imgtn.bdimg.com/it/u=440375388,3364532017&fm=26&gp=0.jpg',
      },
      {
        title: '郭炳湘病逝',
        url: 'xxxx',
        imgSrc: 'http://img4.imgtn.bdimg.com/it/u=3133605357,944042545&fm=26&gp=0.jpg',
      },
    ],
    tabs: [{
        text: '微博',
        icon: 'weibo',
        iconSize: '32rpx',
        iconColor: '#ef473a',
      },
      {
        text: '脸书',
        icon: 'facebook',
        iconSize: '32rpx',
        iconColor: '#ef473a',
      },
      {
        text: '苹果',
        icon: 'apple',
        iconSize: '32rpx',
        iconColor: '#ef473a',
      },
      {
        text: '安卓',
        icon: 'android',
        iconSize: '32rpx',
        iconColor: '#ef473a',
        disabled: true
      },
      {
        text: '腾讯',
        icon: 'tencent',
        iconSize: '32rpx',
        iconColor: '#ef473a'
      },
      {
        text: 'QQ',
        icon: 'QQ',
        iconSize: '32rpx',
        iconColor: '#ef473a'
      },
    ],
    tabs2: [
      '英雄联盟',
      '绝地求生',
      'DNF',
      '炉石传说'
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("component-test")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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

  },
  onSwitchChange(e) {
    this.setData({
      switch1: e.detail.value
    })
  },
  onRateChange(e) {
    const index = e.detail.index;
    this.setData({
      'starIndex1': index
    })
  },
  handleOpenDialog() {
    this.setData({
      dialog: true
    })
  },
  handleCloseDialog() {
    this.setData({
      dialog: false
    })
  },
  toggleTest() {
    this.setData({
      fade: !this.data.fade
    })
  },
  handleShowToast() {
    console.time("toast")
    let resultPromise = Toast.show({
      position: 'top',
      message: 'middle'
    });
  },
  handleShowLoading() {
    Loading.show({
      hideCb: () => {
        console.log("我被关闭了")
      }
    })
    setTimeout(() => {
      Loading.hide()
    }, 3000);
  }
})