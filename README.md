### typescirpt
- 增加学习成本
- 短期内增加开发成本
- 长期维护的项目利于维护

### classnames 维护类名
> npm install classnames --save

#### 支持typescript
> npm install @types/classnames --save


### icon方案
- font icon (只支持设置字符相关的css属性、需要额外下载字体文件)
- svg (支持设置所有css属性)

### css动画
由于display:none;会导致动画失效，transition不起作用
#### 解决方案
- 隐藏到显示： display:none; ->  display:block;opacity:0  -> 动画效果 -> display:block;opacity:1
- 显示到隐藏： display:block;opacity:1 -> 动画效果 -> display:block;opacity:0 -> display:none;