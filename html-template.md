### html template

```html
<!-- html5 doctype -->
<!doctype html>
<!-- lang 属性设置，中文页面尽量不要设置为 "en"，这会开启 Chrome 默认提示是否翻译网页 -->
<html lang="zh-cn">
<head>
<!-- 声明文档字符编码 -->
<meta charset="utf-8">
<!-- 
默认情况下不考虑使用渲染模式设置
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
-->
<!-- 页面描述 -->
<meta name="description" content="页面描述，控制在150字以内" />
<!-- 页面关键词 -->
<meta name="keywords" content="关键字列表" />
<!-- author -->
<meta name="author" content="basecss, i@basecss.net" />
<!-- 搜索引擎抓取设置 -->
<meta name="robots" content="index, follow" />
<!-- 为移动设备设置 viewport -->
<!-- width=device-width 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边 http://bigc.at/ios-webapp-viewport-meta.orz -->
<meta name="viewport" content="width=device-width,initial-scale=1, minium-scale=1, user-scalable=no">
<!-- iOS 移动设备添加主屏幕标题设置 -->
<meta name="apple-mobile-web-app-title" content="My App" > <!--iOS6 新增的特性-->
<!-- 是否启用全屏模式 -->
<meta name="apple-mobile-web-app-capable" content="yes">
<!-- 全屏时状态颜色设置 -->
<meta name="apple-mobile-web-status-bar-style" content="black-translucent">
<!-- 禁用电话号码自动识别 -->
<meta name="format-detection" content="telephone=no">
<!-- 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari）, 默认禁用 -->
<!--
<meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
-->
<!-- iOS 图标 -->
<!-- rel="apple-touch-icon-precomposed"启用图标高亮 -->
<!-- 非视网膜 iPhone 低于 iOS 7 -->
<link rel="apple-touch-icon" href="icon57.png" sizes="57x57">
<!-- 非视网膜 iPad 低于 iOS 7 -->
<link rel="apple-touch-icon" href="icon72.png" sizes="72x72">
<!-- 非视网膜 iPad iOS 7 -->
<link rel="apple-touch-icon" href="icon76.png" sizes="76x76">
<!-- 视网膜 iPhone 低于 iOS 7 -->
<link rel="apple-touch-icon" href="icon114.png" sizes="114x114">
<!-- 视网膜 iPhone iOS 7 -->
<link rel="apple-touch-icon" href="icon120.png" sizes="120x120">
<!-- 视网膜 iPad 低于 iOS 7 -->
<link rel="apple-touch-icon" href="icon144.png" sizes="144x144">
<!-- 视网膜 iPad iOS 7 -->
<link rel="apple-touch-icon" href="icon152.png" sizes="152x152">
<!-- Android 启动图标 -->
<link rel="shortcut icon" sizes="128x128" href="icon.png">
<!-- iOS 启动画面 -->
<!-- iPad 竖屏 768 x 1004（标准分辨率） -->
<link rel="apple-touch-startup-image" sizes="768x1004" href="/splash-screen-768x1004.png" />
<!-- iPad 竖屏 1536x2008（Retina） -->
<link rel="apple-touch-startup-image" sizes="1536x2008" href="/splash-screen-1536x2008.png" />
<!-- iPad 横屏 1024x748（标准分辨率） -->
<link rel="apple-touch-startup-image" sizes="1024x748" href="/Default-Portrait-1024x748.png" />
<!-- iPad 横屏 2048x1496（Retina） -->
<link rel="apple-touch-startup-image" sizes="2048x1496" href="/splash-screen-2048x1496.png" />
<!-- iPhone/iPod Touch 竖屏 320x480 (标准分辨率) -->
<link rel="apple-touch-startup-image" href="/splash-screen-320x480.png" />
<!-- iPhone/iPod Touch 竖屏 640x960 (Retina) -->
<link rel="apple-touch-startup-image" sizes="640x960" href="/splash-screen-640x960.png" />
<!-- iPhone 5/iPod Touch 5 竖屏 640x1136 (Retina) -->
<link rel="apple-touch-startup-image" sizes="640x1136" href="/splash-screen-640x1136.png" />
<!-- Windows 8 磁贴颜色 -->
<meta name="msapplication-TileColor" content="#000"/>
<!-- Windows 8 磁贴图标 --> 
<meta name="msapplication-TileImage" content="icon.png"/> 
<!-- 添加 RSS 订阅 -->
<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />
<!-- 添加 favicon icon -->
<link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
<!-- 页面标题 -->
<title>标题</title>
</head>

<body>

</body>
</html>
```

**参考阅读：**

- https://github.com/yisibl/blog/issues/1
- http://himeters.com/update-ios-webapp-touch-icon
- http://jinlong.github.io/blog/2013/09/23/safari-ios7-html5-problems-apis-review/
- http://developer.apple.com/library/ios/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html
- http://developer.apple.com/library/ios/#documentation/UserExperience/Conceptual/MobileHIG/IconsImages/IconsImages.html#//apple_ref/doc/uid/TP40006556-CH14
- http://developer.android.com/design/style/iconography.html