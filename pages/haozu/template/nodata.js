
function showNoData(obj){
  console.log("过来了");
  if (typeof obj == 'object'){
    var that = getCurrentPages()[getCurrentPages().length - 1];//获取当前page实例
    obj.isShow = true;//开启toast
    that.setData({
      showView: obj
    });
  } else if (typeof obj == 'string'){
    var that = getCurrentPages()[getCurrentPages().length - 1];//获取当前page实例
    var objData = { title: obj, duration: 1000, isShow: true };
    that.setData({
      showView: objData
    });
  }
}

function hideNoData(){
  var that = getCurrentPages()[getCurrentPages().length - 1];//获取当前page实例
}

/**
 * 对外抛出showNoData，hideNoData
 */
module.exports = {
  showNoData: showNoData,
  hideNoData: hideNoData
}