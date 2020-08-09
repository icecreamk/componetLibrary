### Fetch 缺点（故使用axios）
- 400，500都当做成功请求
- 默认不会带cookie
- 不支持sbort,不支持超时控制
- 无法检测请求进度

### aixos
- 浏览器下使用XHR
- node环境使用http模块

### 支持在线mock
- JSONPlaceholder
- Mocky

### 文件上传两种方式
- form submition(把文件输入框放入表单中,这样上传方式是传统的同步上传，上传的文件如果很大，往往需要等待很久，上传完成后页面还会重新加载，并且必须等待上传完成后才能继续操作)
- js发布异步请求(结合XMLHttpRequest对象直接将文件上传，将其作为参数传给XMLHttpRequest对象的send方法即可)

### module历史
- 全局变量和命名空间
- AMD和CommomJs（require.js将模块化应用到浏览器端）
- es6和module

### ts打包构建配置
tsconfig.build.json

### rimraf
- 兼容跨平台的删除任务（linux,macos,windows）

### npm link
解决：
当组件项目更新并发布后，本地引用该组件的项目需要重新npm install 安装