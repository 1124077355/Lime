//xf.js
//获取应用实例
var app = getApp();
Page({
  data: {
    remind: '加载中',
    moteData: [], // 中继数据
    listAnimation: {} // 列表动画
  },

  // 页面加载
  onLoad: function () {
    var _this = this;
    // if (!app._user.we.info.id || !app._user.we.info.name) {
    //   _this.setData({
    //     remind: '未绑定'
    //   });
    //   return false;
    // }
    // _this.setData({
    //   id: app._user.we.info.id,
    //   name: app._user.we.info.name
    // });
    wx.request({
      url: app.serverUrl + "moteWeChat/getMoteStatus",
      method: 'GET',
      // data: app.key({
      //   openid: app._user.openid,
      //   id: app._user.we.info.id
      // }),
      success: function (res) {
        console.log("000 " + res.data + " 111 " + res.data.status);
        if (res.data ) {
          // 为每一个学年设置是否显示当前学年学费详情的标志open, false表示不显示
          var list = res.data.reverse();
          console.log("222 "+list)
          for (var i = 0, len = list.length; i < len; ++i) {
            list[i].open = false;
          }
          list[0].open = false;
          _this.setData({
            remind: '',
            moteData: list
          });
        } else {
          _this.setData({
            remind: res.data.message || '未知错误'
          });
        }

      },

      fail: function (res) {
        app.showErrorModal(res.errMsg);
        _this.setData({
          remind: '网络错误'
        });
      }
    });
  },

  // 展示中继详情
  slideDetail: function (e) {

    var id = e.currentTarget.id,
      list = this.data.moteData;
    // 每次点击都将当前open换为相反的状态并更新到视图，视图根据open的值来切换css
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].uid == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      moteData: list
    });
  }
});