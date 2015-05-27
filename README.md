# Mobile Starter 
一个移动端页面脚手架

## CSS框架
CSS框架力求精简，只提供简单的结构支持，具体样式全由使用者决定。

#### Slide Menu
要使用Slide Menu，你必须将你的页面内容用一个容器包住。Slide Menu的结构像下面这样：
```html
<nav class="slide-menu right-slide-menu">
	<!-- 菜单内容 -->
</nav>
<div class="has-slide-menu has-right-slide-menu">
	<!-- 你的页面内容 -->
</div>
```
Javascript:
```javascript
new SlideMenu({
    trigger: '.menu' //触发Slide Menu的元素
})
```
侧边菜单显示的时候, 会在body上加.slide-menu-active的类名, 如果你的页面内容里有position是fixed的内容，这些内容的显示有不正确，你要自行指定这些内容的位置, 如：
```css
.menu-active .a-fixed-position-div {
  left: 294px;
}
```
Slide Menu支持左侧和右侧，上面的是右侧菜单，如果你要一个左侧的，把上面的right改成left就好。

## TODO

* Modernizr
* WebP
* srcset
* video
* mock
* SPA
* CSS MODULE:FORM 