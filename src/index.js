import dva from 'dva';
import './index.css';
import { browserHistory} from 'dva/router';
import { createLogger } from 'redux-logger';
import {notification} from 'antd';
import createLoading from 'dva-loading';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

// 1. Initialize
const app = dva({
  onError(e) {
    notification['error']({
      message: `${e.message}`,
      description: ``,
      duration: 5,
      style:{height:80,paddingBottom:10},
    });
  },
  history: browserHistory,
  // onAction: createLogger(),
});

app.model(require("./models/user"));

app.model(require("./models/search"));

app.model(require("./models/app"));

app.model(require("./models/admin"));

// 2. Plugins
app.use(createLoading());
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
