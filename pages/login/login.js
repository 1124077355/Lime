Page({
  data:{
    
  },
  doRegist: function(options){
    var formObject = options.detail.value;
    //console.log("login0000 " + formObject);
    var name = formObject.name;
    var password = formObject.password;
    //判断
    if(name == null || password == null) {
      wx.showToast({
        title: '用户名或密码错误',
        icon: 'none',
        duration: 3000
      })
    }else {
      //var serverUrl = app.serverUrl;
      wx.request({
        url: 'http://dkpt.gxuwz.net:8089/loginWeChat/webLogin?name='+name+'&password='+password,
        method: 'POST',
        data: {
          name: name,
          password: password
        },
        header: {
          'content-type': 'application/json'
        },
        success: function(res) {
          console.log("登陆的状态"+res.data);
          var status = res.data.normalize;
          //console.log("登陆的返回码"+status);
          if(res.data == true) {
            wx.showToast({
              title: '用户注册成功',
              icon: 'none',
              duration: 3000,           
              success: function () {
                wx.switchTab({
                  url: '../user/user'
                })
              }
            });      
          }else if(status == 500) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 3000
            })
          }
        }
      })
    }
    
  }
})