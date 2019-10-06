//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    banner: null,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    txtAds: '开发中心，灯控信息管理平台',
    advertise: null,
    movies: [
      { image: '/images_index/106.jpg', target: '', title:'123' },
      { image: '/images_index/16fsdd.jpg', target: '', title: '123' },
      { image: '/images_index/24sda.jpg', target: '', title: '123' },
      { image: '/images_index/j3zh.jpg', target: '', title: '123' }
    ]
  },
  /*
  * 首页banner
  */
  setBanner: function () {
    debugger;
    let that = this;
    util.fetch('http://dkpt.gxuwz.net:8089/', function (data) {
      that.setData({
        banner: data.data
      });
      
    });
  },
  /**
   * 首页文字广告
   */
  setTxtAds: function(){
    let that = this;
    util.fetch('http://dkpt.gxuwz.net:8089/', function (data) {
      that.setData({
        txtAds: data.data[0]
      });
    });
  },
  /**
   * 首页两块子banner
   */
  setSubBanner: function(){
    let that = this;
    util.fetch('http://dkpt.gxuwz.net:8089/', function (data) {
      that.setData({
        advertise: data.data
      });
    });
  },
  /**
   * 模块入口
   */
  setModule: function(){

  },
  /**
   * 入口
   */
  onLoad: function () {
    //var that = this;
   // that.setBanner();
   //that.setTxtAds();
  // that.setSubBanner();
   //that.setModule();
  }
});