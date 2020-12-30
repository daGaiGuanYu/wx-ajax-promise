# wx-ajax-promise
封装微信小程序里的 ajax 成 Promise 形式

## 用法
### 安装
```bash
npm install wx-ajax-promise
```

### code
```js
import ajax from 'wx-ajax-promise'

let data = await ajax.get('/user')
```
