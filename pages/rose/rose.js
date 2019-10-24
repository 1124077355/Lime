const wxCharts = require("../../utils/wxcharts.js");
var windowW = 0;
Page({

  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 屏幕宽度
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth
    });
    console.log(this.data.imageWidth);

    //计算屏幕宽度比列
    //windowW = this.data.imageWidth / 375;
    windowW = this.data.imageWidth;

    /*wx.getSystemInfo({
      success: function(res) {
        console.log(res.windowWidth);
        console.log(res.windowHeight);
      },
    })*/

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    //base_rate
    new wxCharts({
      canvasId: "base_rate",
      type: "ring",
      series: [
        {
          name: "已完成",
          data: 80,
          //color: '#ff6600'
        },
        {
          name: "未完成",
          data: 100 - 80,
          color: '#eeeeee'
        }
      ],
      width: (windowW / 3),
      height: (windowW / 3),
      dataLabel: false,
      legend: false,
      title: { // 显示百分比
        name: 80 + '%',
        color: '#7cb5ec',
        fontSize: 14
      },
      extra: {
        pie: {
          offsetAngle: -90
        },
        ringWidth: 13,
      }
    });

    //mote_rate
    new wxCharts({
      canvasId: "mote_rate",
      type: "ring",
      series: [
        {
          name: "已完成",
          data: 80,
          //color: '#ff6600'
        },
        {
          name: "未完成",
          data: 100 - 80,
          color: '#eeeeee'
        }
      ],
      width: (windowW/3),
      height: (windowW/3),
      dataLabel: false,
      legend: false,
      title: { // 显示百分比
        name: 80 + '%',
        color: '#7cb5ec',
        fontSize: 14
      },
      extra: {
        pie: {
          offsetAngle: -90
        },
        ringWidth: 13,
      }
    });

    //terminal_rate
    new wxCharts({
      canvasId: "terminal_rate",
      type: "ring",
      series: [
        {
          name: "已完成",
          data: 80,
          //color: '#ff6600'
        },
        {
          name: "未完成",
          data: 100 - 80,
          color: '#eeeeee'
        }
      ],
      width: (windowW / 3),
      height: (windowW / 3),
      dataLabel: false,
      legend: false,
      title: { // 显示百分比
        name: 80 + '%',
        color: '#7cb5ec',
        fontSize: 14
      },
      extra: {
        pie: {
          offsetAngle: -90
        },
        ringWidth: 13,
      }
    });

    //failure rate
    new wxCharts({
      animation: true,
      canvasId: 'failure_rate',
      type: 'ring',
      extra: {
        pie: {
          offsetAngle: -90
        },
        ringWidth: 17,
      },
      title: {
        name: '70%',
        color: '#7cb5ec',
        fontSize: 25
      },
      subtitle: {
        name: '故障率',
        color: '#666666',
        fontSize: 15
      },
      series: [
        {
          name: "已完成",
          data: 70,
          //color: '#ff6600'
        },
        {
          name: "未完成",
          data: 100 - 70,
          color: '#eeeeee'
        }
      ],
      width: (windowW/2),
      height: (windowW/2),
      dataLabel: false,
      legend: false,
      padding: 0
    });

    //Lighting rate
    new wxCharts({
      animation: true,
      canvasId: 'Lighting_rate',
      type: 'ring',
      extra: {
        pie: {
          offsetAngle: -90
        },
        ringWidth: 17,
      },
      title: {
        name: '70%',
        color: '#7cb5ec',
        fontSize: 25
      },
      subtitle: {
        name: '亮灯率',
        color: '#666666',
        fontSize: 15
      },
      series: [
        {
          name: "已完成",
          data: 70,
          //color: '#ff6600'
        },
        {
          name: "未完成",
          data: 100 - 70,
          color: '#eeeeee'
        }
      ],
      width: (windowW/2),
      height: (windowW/2),
      dataLabel: false,
      legend: false,
      padding: 0
    });

    //test
    //test
    new wxCharts({
      animation: true,
      canvasId: 'Electricity_statistics',
      type: 'line',
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11','12'],
      yAxis: {
        title: '用电量 (wh)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      series: [{ // 数据列表
        name: ' ',
        data: [0.2, 0.3, 0.4, 0.3, 0.5, 0.4,0.3,0.3,0.4,0.5,0.5,0.4]
      }],
      width: 320,
      height: 200,
      dataLabel: true, // 是否在图表中显示数据内容值
      legend: false, // 是否显示图表下方各类别的标识
      dataPointShape: true,
      extra: {
        lineStyle: 'curve' // (仅对line, area图表有效) 可选值：curve曲线，straight直线 (默认)
      }
    });

    //
    new wxCharts({
      animation: true,
      canvasId: 'Fault_statistics',
      type: 'line',
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      yAxis: {
        title: '次数',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      series: [{ // 数据列表
        name: ' ',
        data: [1, 0, 1, 2, 2, 0, 0, 0, 0, 1, 1, 0]
      }],
      width: 320,
      height: 200,
      dataLabel: true, // 是否在图表中显示数据内容值
      legend: false, // 是否显示图表下方各类别的标识
      dataPointShape: true,
      extra: {
        lineStyle: 'curve' // (仅对line, area图表有效) 可选值：curve曲线，straight直线 (默认)
      }
    });
  },
})
