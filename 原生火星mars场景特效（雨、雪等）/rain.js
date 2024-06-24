function showRain() {
  // 大气层外光圈
  map.scene.skyAtmosphere.hueShift = -0.8;
  map.scene.skyAtmosphere.saturationShift = -0.7;
  map.scene.skyAtmosphere.brightnessShift = -0.33;
  // 雾化效果
//   map.scene.fog.density = 0.001;
  map.scene.fog.minimumBrightness = 0.7;
  // 雨效果
  rainEffect = new mars3d.effect.RainEffect({
    speed: 10,
    size: 40,
    direction: 10,
    maxHeight: 20000,
  });
  map.addEffect(rainEffect);

  // 是否开启特效
  function setEffect(val) {
    rainEffect.enabled = val
  }
  
  // 粒子速度
  function setSpeed(value) {
    rainEffect.speed = value
  }
  
  // 粒子大小
  function setSize(value) {
    rainEffect.size = value
  }
  
  // 粒子方向
  function setDirection(value) {
    rainEffect.direction = value
  }
  function initUI(options) {
    $("#chkRainEffect").change(function () {
      var val = $(this).is(":checked");
      rainCheck=val
      setEffect(val);
    });

    $("#rainSpeed")
      .slider({ min: 1, max: 100, step: 1, value: 10 })
      .on("change", (e) => {
        if (e?.value) {
          setSpeed(e.value.newValue);
        }
      });

    $("#rainSize")
      .slider({ min: 1, max: 100, step: 1, value: 20 })
      .on("change", (e) => {
        if (e?.value) {
          setSize(e.value.newValue);
        }
      });
    $("#rainDirection")
      .slider({ min: -89, max: 89, step: 1, value: -30 })
      .on("change", (e) => {
        if (e?.value) {
          setDirection(e.value.newValue);
        }
      });
  }

  initUI();

}
