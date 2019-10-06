// pages/mote/mote.js
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
    var serurl = getApp().serverUrl;
    var requesturl = serurl + "moteWeChat/getMoteList"; //调用接口
    var redisturl = "../moteStatus/moteStatus"
    var turl = serurl + "moteWeChat/getMoteStatus";
    let self = this;
    var classid = "获取基站列表";
    console.log(classid);
    wx.request({
      url: requesturl,
      data: {
        classid: classid
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        console.log(res.data)
        this.setData({ teacher: res.data });
      }
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