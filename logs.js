

Page({
  data: {
    logs: [],
  },
  onLoad() {
    let that=this;
    wx.cloud.database().collection("10-10ranklis").where({
      _id: '6730287260127945013b98322112f68c'
  }).get({
     success(res){
       console.log("request success",res)
       that.setData({
         datalist:res.data
       })
    },
     fail(res){
      console.log("request success",res)
     } 
    })

  }
})
