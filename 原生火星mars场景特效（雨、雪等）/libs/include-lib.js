/* 2017-12-7 11:57:13 | 修改 木遥（QQ：346819890） */
//第三方类库加载管理js，方便切换lib
(function () {
    var r = new RegExp("(^|(.*?\\/))(include-lib\.js)(\\?|$)"),
        s = document.getElementsByTagName('script'), targetScript;
    for (var i = 0; i < s.length; i++) {
        var src = s[i].getAttribute('src');
        if (src) {
            var m = src.match(r);
            if (m) {
                targetScript = s[i];
                break;
            }
        }
    }

    // 当前版本号,用于清理浏览器缓存
    var cacheVersion = "20181024";

    // cssExpr 用于判断资源是否是css
    var cssExpr = new RegExp('\\.css');

    function inputLibs(list) {
        if (list == null || list.length == 0) return;

        for (var i = 0, len = list.length; i < len; i++) {
            var url = list[i];
            if (cssExpr.test(url)) {
                var css = '<link rel="stylesheet" href="' + url + '?time=' + cacheVersion + '">';
                document.writeln(css);
            } else {
                var script = '<script type="text/javascript" src="' + url + '?time=' + cacheVersion + '"><' + '/script>';
                document.writeln(script);
            }
        }
    }

    //加载类库资源文件
    function load() {
        var arrInclude = (targetScript.getAttribute('include') || "").split(",");
        var libpath = (targetScript.getAttribute('libpath') || "");

        if (libpath.lastIndexOf('/') != libpath.length - 1)
            libpath += "/";

        var libsConfig = {
          "jquery": [
            libpath + "jquery/jquery-2.1.4.min.js",
          ],
          'font-awesome': [
            libpath + "fonts/font-awesome/css/font-awesome.min.css",
        ],
        'cesium': [
            libpath + "cesium/Build/Cesium/Cesium.js",
        ],
        'mars3d': [
            libpath + "mars3d/mars3d.css",
            libpath + "mars3d/mars3d.js",
        ],
        'bootstrap': [
            libpath + "bootstrap/bootstrap.min.css",
            libpath + "bootstrap/bootstrap.min.js",
        ],
        'bootstrap-slider': [
            libpath + "bootstrap/bootstrap-slider.css",
            libpath + "bootstrap/bootstrap-slider.min.js",
        ],
        'bootstrap-table': [
            libpath + "bootstrap/bootstrap-table.min.css",
            libpath + "bootstrap/bootstrap-table.min.js",
            libpath + "bootstrap/bootstrap-table-zh-CN.min.js",
        ],
        }


        for (var i in arrInclude) {
            var key = arrInclude[i];
            inputLibs(libsConfig[key]);
        }

    }

    load();
})();
