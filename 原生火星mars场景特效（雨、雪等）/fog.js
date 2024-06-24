function showFog() {
  // 雾效果
  fogEffect = new mars3d.effect.FogEffect({
    maxHeight: 20000, // 大于此高度后不显示
    fogByDistance: new Cesium.Cartesian4(100, 0.0, 10000, 0.9),
    color: Cesium.Color.WHITE,
  });
  map.addEffect(fogEffect);

  /**
   * 释放当前地图业务的生命周期函数
   * @returns {void} 无
   */
  function onUnmounted() {
    map = null;
  }

  // 是否开始雾效果
  function setFogEffect(val) {
    fogEffect.enabled = val;
  }

//   // 改变雾的颜色
//   function setColor(color) {
//     fogEffect.color = Cesium.Color.fromCssColorString(color);
//   }

  // 修改近距离和远距离
  function setDistanceX(val) {
    fogEffect.fogByDistance.x = val;
  }

  function setDistanceZ(val) {
    fogEffect.fogByDistance.z = val;
  }

  function initUI(options) {
    $("#chkFogEffect").change(function () {
      var val = $(this).is(":checked");
      fogCheck=val
      setFogEffect(val);
    });

    $("#fogByDistanceX")
      .slider({ min: 1, max: 5000, step: 1, value: 100 })
      .on("change", (e) => {
        var value = e.value.newValue;
        if (value > fogEffect.fogByDistance.z) {
        //   haoutil.msg("近距离不能大于远距离");
          return;
        }
        setDistanceX(value);
      });
    $("#fogByDistanceZ")
      .slider({ min: 100, max: 50000, step: 1, value: 10000 })
      .on("change", (e) => {
        var value = e.value.newValue;
        if (value < fogEffect.fogByDistance.x) {
        //   haoutil.msg("远距离 不能小于 近距离");
          return;
        }
        setDistanceZ(value);
      });

    // $("#txtColor").minicolors({
    //   position: "bottom left",
    //   control: "saturation",
    //   change: function (color, opacity) {
    //     setColor(color);
    //   },
    // });
  }
  initUI();
}
