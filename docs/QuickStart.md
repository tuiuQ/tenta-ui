## 快速上手

本节将介绍如何在项目中引用AntentaUI



### 引入AntentaUI

可以完整引入AntentaUI，也可以根据需求引入部分组件。

#### 完整引入

 在main.js中添加以下内容

```typescript
import { createApp } from 'app'
import App from './App.vue'
import AntentaUI from 'antenta-ui'
import "antenta-ui/dist/antenta-ui.css"

const app = createApp(App)

app.use(AntentaUI)
app.mount("#app")
```

#### 按需引入

在main.js中添加以下内容

```typescript
import { createApp } from 'app'
import App from './App.vue'
import 'antenta-ui/dist/antenta-ui.css'

import { Button, Switch } from 'antenta-ui'

const app = createApp(App)

app.component(Button.name, Button)
app.component(Switch.name, Switch)


/* or
app.use(Button)
app.use(Switch)
*/

app.mount("#app")
```

