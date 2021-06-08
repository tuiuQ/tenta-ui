# antenta-ui

## 安装
```shell
npm i antenta-ui
```

### 引入Antenta

你可以引入整个Antenta

##### 完整引入

在main.js中写入以下内容

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import AntentaUI from 'antenta-ui'
import 'antenta-ui/dist/antenta-ui.css'

createApp(App).use(AntentaUI).mount("#app")
```

以上代码便完成Antenta的引入，需要注意的是，样式文件需要单独引入。

### 开始使用

