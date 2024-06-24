
function showSnow() {
  // 是否开启下雪效果
  function setSnow(val) {
    snowEffect.enabled = val;
  }

  // 速度
  function setSpeed(value) {
    snowEffect.speed = value;
  }
  //
  function setScale(value) {
    snowEffect.scale = value;
  }

  map.scene.fog.density = 0.001;
  map.scene.fog.minimumBrightness = 0.9;

  snowEffect = new mars3d.effect.SnowEffect({
    speed: 20,
    maxHeight: 20000, // 大于此高度后不显示
  });
  map.addEffect(snowEffect);

  function initUI(options) {
    $("#chkSnow").change(function () {
      var val = $(this).is(":checked");
      snowCheck=val
      setSnow(val);
    });

    $("#snowSpeed")
      .slider({ min: 1, max: 100, step: 1, value: 20 })
      .on("change", (e) => {
        if (e?.value) {
          setSpeed(e.value.newValue);
        }
      });
  }
  initUI();
}
