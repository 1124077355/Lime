Page({
  data:{
    loginIn:false //登录状态
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    console.log("纯纯粹粹" + that.data.loginIn);
    if(!that.data.loginIn){
      console.log("2222");
      wx.navigateTo({
        url:'../login/login'
      });
    }
    //wx.navigateTo({
     // success: function (res) {
       // console.log("45454"+res.data);
       // thit.setData({
       //   gets: res.data
        //})
     // },
     // url: '../user/user'
   // });
  }
})