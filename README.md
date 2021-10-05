## 生如夏花、爱若玫瑰-微信公众号

- 项目角色：独立负责
- 项目概述：
- 使用技术：Vue3.0 + Vite + ES6 + Axios + Next.js + Redis + Mongoose +  Vue-Manage-System + vue-router vuex Ant-design-vue
- 职责成果： 
- 项目链接：https://github.com/heweiliang88/Reading-Wx

### 项目概述

该项目是关于阅读的微信公众号、实现了阅读微信公众号的。

技术栈：Vue3.0 + Vite + ES6 + Axios + Next.js + Redis + Mongoose + 微信公众号开发

### 技术栈

- Vue3.0 
- Ant-design-vue
- Vite 
- ES6
- Axios 
- Nuxt.js 
- Redis 
- Mongoose
- 微信公众号开发
- 微信公众号后台管理 ：vue-manage-system

### 架构设计

前端 <==> 后端 <==> 后台

### 规范化设计



### 文档

接口规范



### 功能

- 实现微信自动回复、天气、励志句子、图文、视频、语音等
- 公众号名字、介绍、 消息中的（多图文应该接入后台管理系统）
- 微信公众号中的视频模块  后台添加视频取消视频 
- 服务中提供第三方自定义网站
- 实现微信公众号自定义第三方菜单列表
- 接入阅读网站的第三方网页开发系统
- 智能接口OCR识别、语音识别、AI开放接口
- 添加素材管理和图文消息管理
- 接入第三方微信后台管理系统，用户数据检测（关注数量和取消数量）、实现发布图文和活动等

### 结构

```bash
ReaderWCP-back // 后端  Next.js 
ReaderWCP-font // 前端  Vue3.0 + Vite 	
ReaderWCP-admin // 后台管理
```

### 部署

```bash
// http://localhost:3000
cd ReaderWCP-back
yarn
yarn dev 
// http://localhost:6000
cd ReaderWCP-font
yarn 
yarn dev
// http://localhost:8000
cd ReaderWCP-admin
npm install
npm run dev
```

### 错误

vue-element-admin 

Failed at the vue-element-admin@4.4.0 dev script.

This is probably not a problem with npm. There is likely additional logging output above.

```
npm cache clean --force
```

Promble

一键将package.json中的模块更新到最新版本

```
npm i -g npm-check-updates
ncu -u
npm install
```

### 问题



### 版本声明



### 参考链接

- [Home | Vite 官方中文文档](https://cn.vitejs.dev/)
- [Nuxt.js - Vue.js 通用应用框架](https://zh.nuxtjs.org/)

- [niefy/wx-manage: 🔥微信公众号管理系统，包含公众号菜单管理🗄、自动回复🗨、素材管理📂、模板消息☘、粉丝管理🤹‍♂️等功能，前后端都开源免费🛩](https://github.com/niefy/wx-manage)
- [2021，排名前 15 的 Vue 后台管理模板 - 掘金](https://juejin.cn/post/6955995004074459173)
- [creativetimofficial/ct-vue-black-dashboard-pro：Vue Black Dashboard PRO 问题](https://github.com/creativetimofficial/ct-vue-black-dashboard-pro)
- [Vite+Vue3+TS搭建一个后台管理系统架子 - 掘金](https://juejin.cn/post/6972371296713703460)
- [你必读的微信公众号开发知识 - 掘金](https://juejin.cn/post/6888202847549128711)[第一步](https://docs.nestjs.cn/8/firststeps)

