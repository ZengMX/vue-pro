<!--
 * @Author: zmx
 * @Date: 2020-11-27 14:12:47
 * @LastEditors: zmx
 * @LastEditTime: 2020-12-01 15:31:09
 * @FilePath: /vue-pro/README.md
-->
# vue-pro

## Project setup 运行项目前先安装node_modules，控制台运行下面命令
```
yarn
```

### Compiles and hot-reloads for development 对项目进行编译运行运行下面命令
```
yarn serve
```

### Compiles and minifies for production 如果要发布到生产环境运行下面命令
```
yarn build
```

### Lints and fixes files 如果对代码进行格式化运行下面命令
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 说明
1、接入了基础的Vuex状态管理器
2、对Vue的store进行了分模块管理，每个模块下的store分模块会集中在store/store.js下面集体注入Vue实例里面
3、接入了vue-router路由管理可以在单个模块中调用$router进行路由跳转，目前路由只有三个可根据需要进行扩展

### 当然对于一个成熟的项目还需要添加很多的支持库，目前只是实现基本的导航，状态管理
