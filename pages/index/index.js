//index.js
//获取应用实例
const app = getApp()
console.log(app.weichat);

var touchDot = 0; //触摸时的原点

var time = 0; // 时间记录，用于滑动时且时间小于1s则执行左右滑动

var interval = ""; // 记录/清理 时间记录

var nth = 0; // 设置活动菜单的index

var nthMax = 3; //活动菜单的最大个数

var tmpFlag = true; // 判断左右华东超出菜单最大值时不再执行滑动事件

Page({
  data: {
    selectArray: [{
      "name": "社区1111"
    }, {
        "name": "社区222"
    }, {
        "name": "社区333",
    }, {
        "name": "社区444",
    }, {
        "name": "社区555",
    }, {
        "name": "社区666",
    }, {
        "name": "社区777",
    }, {
        "name": "社区8888",
    }, {
        "name": "社区9999",
    }, {
        "name": "社区0000",
    }],
    selectShow: false, //初始option不显示
    nowText: "暂无可用社区", //初始内容
    animationData: {}, //右边箭头的动画
  },
 

  setText: function (e) {
    var nowData = this.data.selectArray; //当前option的数据是引入组件的页面传过来的，所以这里获取数据只有通过this.properties
    var nowIdx = e.target.dataset.index; //当前点击的索引
    //再次执行动画，注意这里一定，一定，一定是this.animation来使用动画
    this.animation.rotate(0).step();
    this.setData({
      nowText: nowData[nowIdx].name,
      selectShow: false,
      animationData: this.animation.export(),
    });
  },

  selectToggle: function () {
    var nowShow = this.data.selectShow; //获取当前option显示的状态
    //创建动画
    var animation = wx.createAnimation({
      timingFunction: "ease"
    })
    this.animation = animation;
    if (nowShow) {
      animation.rotate(0).step();
      this.setData({
        animationData: animation.export()
      })
    } else {
      animation.rotate(180).step();
      this.setData({
        animationData: animation.export()
      })
    }
    this.setData({
      selectShow: !nowShow
    })
  },

  toggleDialog() {
    this.selectToggle();
  },
})