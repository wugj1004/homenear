// pages/custome_component/custome_component.js

// var myBehavior = require('../behavior/common/mybehavior');
import myBehavior from "../behavior/common/mybehavior.js";

Component({
  
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
    
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { },

    onTap:function () {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  },
  //自定义组件外部导入样式
  externalClasses: ['my-class'],

  behaviors: [myBehavior],

})