import React from 'react';
import { Router, Route ,IndexRoute} from 'dva/router';
import IndexPage from './routes/App';
import User from "./routes/User.js";
import Admin from "./routes/Admin.js";
import UploadComponent from "./components/admin/UploadComponent";
import Login from "./routes/Login.js";
import PasswordComponent from "./components/password/PasswordComponent";
import UserComponent from "./components/user/UserComponent";


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/app" component={IndexPage} >
        <Route path="/app/user" >
          <IndexRoute component={User}/>
          <Route path="/app/user/changePassword" component={PasswordComponent} />
        </Route>
        <Route path="/app/admin">
          <IndexRoute component={UploadComponent}/>
          <Route path="/app/admin/upload" component={UploadComponent}/>
          <Route path="/app/admin/changePassword" component={PasswordComponent} />
        </Route>
      </Route>
      <Route path="/app/login" component={Login} />
    </Router>
  );
}

export default RouterConfig;
