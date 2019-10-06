
var data = [
  { name: "基站", value: 50, color: "#80e0ed" },
  { name: "中继", value: 40, color: "#9197ed" },
  { name: "终端", value: 0, color: "#e4ff99" },
];

Page({
  onLoad: function (options) {
    var options = {
      data: data,
      legend: "{c}",
      chartRatio: 0.95,
      style: "rose",
      showLegend: true,
      showLabel: true,
      animation: true
    };
    this.roseComp = this.selectComponent("#rose");
    this.roseComp.setOptions(options);
    this.roseComp.initChart(320, 213);
  }
});