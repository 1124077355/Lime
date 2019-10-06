//location.js
Page( {
  
  mapViewTap: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res)
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 24
        })
      }
    })
  },
  chooseMapViewTap: function() {
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
        that.setData({
          location: {
            latitude: res.latitude,
            longitude: res.longitude,
            name: res.name
          }
        })
      }
    })
  }

})
