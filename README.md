# Xizang_Visualization_Platform
In the process of creation... MUC student's sophomore creative works

#### 技术栈

后端： koa2框架，nodejs, web socket

前端：vue， vuex, vueRouter，echarts



## 使用

#### 后端服务

```
cd back-end
node app.js
```

#### 前端服务

```
cd front-end
npm run serve
```


#### 开发修改历程

> 2.19 进度及需求分析

<img width="1724" alt="image-20240219161845964" src="https://github.com/MucOtto/Xizang_Visualization_Platform/assets/122969909/ad160bcb-6573-4b8d-9d32-1b7844d2c032">

#### 需求分析

在left-top位置布置热门景点的信息，按照图片、简介、指数，具有轮播循环的效果，暂不设置交互效果。

​		1、数据库字段设计：

​			id int 

​			name（景点名称）varchar

​			imgUrl(图片地址） varchar

​			introduction(景点简介)	varchar

​			cratedTime（创建时间）	datetimestamp

​			updateTime（更新时间）	datetimestamp

​			deleted（逻辑删除）	tinyint		"0代表逻辑未删除 1代表逻辑删除"

​		2、生成Json文件

​		3、样式表的设计



#### 实现效果

<img width="1724" alt="image-20240219220901319" src="https://github.com/MucOtto/Xizang_Visualization_Platform/assets/122969909/b60ccfcc-afcc-4fad-b8f7-00c059af5da0">




> 2.20 实现点击地图省份完成在主页面渐变的呈现具体内容

目前问题： 没有数据源。西藏所有有关GDP，旅游业，旅游人数等数据基本全是关于拉萨，有关类似阿里地区的数据可以说是凤毛麟角。初步替代方案=> 点击显示当地的风景，同时风景图片可以自动切换或手动切换。

#### 需求分析

读取我存储的照片 同时具有自动播放下一张的效果 同时两边设有小箭头 可以进行手动切换 当手动切换的时候 自动播放的计时时间归零

​		1、 设计数据库(给每个省份都准备这样一个库，共七个)，库的命名规则采用：地区前两个字的拼音 + Pic  *例：lasaPic*

​			1、数据库字段设计：

​			id int 

​			imgUrl(图片地址） varchar

​			cratedTime（创建时间）	datetimestamp

​			updateTime（更新时间）	datetimestamp

​			deleted（逻辑删除）	tinyint		"0代表逻辑未删除 1代表逻辑删除"

​		2、 组件设计，读取数据，放入<div>容器

​		3、 增加箭头，实现点击跳转图片功能，自动跳转功能

​		4、注册vuex组件来管理全局变量，实现局部显示与关闭效果


<img width="1727" alt="image-20240220181240949" src="https://github.com/MucOtto/Xizang_Visualization_Platform/assets/122969909/38383652-95c0-44f9-a691-ebec0987d4df">


> 2.21 实现评论栏

#### 需求分析

​		1、数据库基本同景点

​				imgUrl要设计的大一些 以varchar数组形式，因为可能有许多图片

​				增加一列 website 表明是哪个网站

​		2、用分页效果实现轮播展示评论



### 未能实现 微博、小红书等软件的图片url无法访问 达不到数据库更新效果



> 右上角时钟实现随现实时间变化的效果


<img width="1722" alt="image-20240221005935360" src="https://github.com/MucOtto/Xizang_Visualization_Platform/assets/122969909/17413e81-db74-4d03-bc15-7accdec16147">



整体画面略显单薄 多增加一个图表
