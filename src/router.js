import React from 'react';
import { Router, Route ,IndexRoute} from 'dva/router';
import IndexPage from './routes/App';

import User from "./routes/User.js";

import Admin from "./routes/Admin.js";
import UploadComponent from "./components/admin/UploadComponent";
import Login from "./routes/Login.js";


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/app" component={IndexPage} >
        <Route path="/app/login" component={Login} />
        <Route path="/app/user" component={User} />
        <Route path="/app/admin">
          <IndexRoute component={Admin}/>
          <Route path="/app/admin/upload" component={UploadComponent}/>
        </Route>
      </Route>
      <Route path="/admin" component={Admin} />
    </Router>
  );
}

export default RouterConfig;
