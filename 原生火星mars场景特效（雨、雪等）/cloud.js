function showCloud(){
    eventTarget = new mars3d.BaseClass()

    // 创建矢量数据图层
    if(!graphicLayer){
        graphicLayer = new mars3d.layer.GraphicLayer()
        map.addLayer(graphicLayer)
    }
    function addDemoGraphic1(graphicLayer) {
        var graphic = new mars3d.graphic.CloudPrimitive({
          position: [116.353072, 30.859836, 2000],
          style: {
            scale: new Cesium.Cartesian2(5500, 1000),
            maximumSize: new Cesium.Cartesian3(50, 15, 13),
            slice: 0.3,
            label: {
            //   text: "一团云",
              font_size: 18,
              color: "#ffffff",
              pixelOffsetY: -10,
              distanceDisplayCondition: true,
              distanceDisplayCondition_far: 90000,
              distanceDisplayCondition_near: 0
            }
          },
          attr: { remark: "示例1" }
        })
        graphicLayer.addGraphic(graphic)
      }

      function addDemoGraphic2(graphicLayer) {
        var graphic = new mars3d.graphic.CloudPrimitive({
          position: [116.332891, 30.856537, 1500],
          style: {
            scale: new Cesium.Cartesian2(3500, 800),
            maximumSize: new Cesium.Cartesian3(50, 12, 15),
            slice: 0.36
          },
          attr: { remark: "示例2" }
        })
        graphicLayer.addGraphic(graphic)
      }

      function addDemoGraphic3(graphicLayer) {
        var graphic = new mars3d.graphic.CloudPrimitive({
          position: [116.371649, 30.851072, 1389],
          style: {
            scale: new Cesium.Cartesian2(5000, 1000),
            maximumSize: new Cesium.Cartesian3(50, 12, 15),
            slice: 0.49
          },
          attr: { remark: "示例3" }
        })
        graphicLayer.addGraphic(graphic)
      }
      
      function addDemoGraphic4(graphicLayer) {
        var graphic = new mars3d.graphic.CloudPrimitive({
          position: new mars3d.LngLatPoint(116.350075, 30.848636, 1500),
          style: {
            scale: new Cesium.Cartesian2(2300, 900),
            maximumSize: new Cesium.Cartesian3(13, 13, 13),
            slice: 0.2
          },
          attr: { remark: "示例4" }
        })
        graphicLayer.addGraphic(graphic)
      }
      
// 批量生成测试数据
function addRandomGraphicByCount(num) {
    graphicLayer.clear()
  
    for (var j = 0; j < num; ++j) {
      var position = randomPoint()
      var scaleX = getRandomNumberInRange(500, 2000)
      var scaleY = scaleX / 2.0 - getRandomNumberInRange(0, scaleX / 4.0)
      var depth = getRandomNumberInRange(30, 50)
      var aspectRatio = getRandomNumberInRange(1.5, 2.1)
      var cloudHeight = getRandomNumberInRange(5, 20)
  
      var graphic = new mars3d.graphic.CloudPrimitive({
        position,
        style: {
          scale: new Cesium.Cartesian2(scaleX, scaleY),
          maximumSize: new Cesium.Cartesian3(aspectRatio * cloudHeight, cloudHeight, depth),
          slice: getRandomNumberInRange(0.2, 0.6)
        }
      })
      graphicLayer.addGraphic(graphic)
    }
  }
  
  // 取区域内的随机点
  function randomPoint() {
    var jd = getRandomNumberInRange(116.29 * 1000, 116.39 * 1000) / 1000
    var wd = getRandomNumberInRange(30.8 * 1000, 30.88 * 1000) / 1000
    var height = getRandomNumberInRange(2000, 4000)
    return new mars3d.LngLatPoint(jd, wd, height)
  }
  
  function getRandomNumberInRange(minValue, maxValue) {
    return minValue + Cesium.Math.nextRandomNumber() * (maxValue - minValue)
  }

  // 开始绘制
  function startDrawGraphic() {
    graphicLayer.startDraw({
      type: "cloud",
      style: {
        scale: new Cesium.Cartesian2(2300, 900),
        maximumSize: new Cesium.Cartesian3(13, 13, 13),
        slice: 0.2
      }
    })
  }

  function initUI(options) {
    // 加一些演示数据
    if(graphicLayerCheck){
        addDemoGraphic1(graphicLayer)
        addDemoGraphic2(graphicLayer)
        addDemoGraphic3(graphicLayer)
        addDemoGraphic4(graphicLayer)
    }
    bindAttributePannel()
    // setTimeout(() => {
    //   if (graphicLayer) {
    //     $("#enabledShowHide").attr("checked", graphicLayer.show)
    //   }
    // }, 500)

    // 图层状态
    $("#enabledShowHide").change(function () {
      var val = $(this).is(":checked")
      graphicLayer.show = val
      graphicLayerCheck = val

    })
    $("#onClickFlyTo").click(function () {
      graphicLayer.flyTo()
    })

    // 数据测试 - 生成和清除
    $("#addRandomGraphicByCount").click(function () {

      addRandomGraphicByCount($("#count").val())
      graphicLayer.flyTo({ duration: 0, heading: 0, pitch: -40, scale: 1.2 })
      refreshTabelFn()

      var graphics = graphicLayer.getGraphics()
      editorGraphic = graphics[graphics.length - 1]
    })
    $("#onClickClear").click(function () {
      graphicLayer.clear()
    })

    $("#btnImpFile").click(function () {
      $("#input_draw_file").click()
    })

    $("#input_draw_file").change(function (e) {
      var file = this.files[0]
      onClickImpFile(file)
    })
  }
  initUI()
  refreshTabelFn()
  function refreshTabelFn() {
    setTimeout(() => {
      refreshTabel(graphicLayer)
    }, 100)
  }
}