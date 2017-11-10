import React from 'react';
import { Router, Route ,IndexRoute} from 'dva/router';
import IndexPage from './routes/App';
import User from "./routes/User.js";
import UploadComponent from "./components/admin/UploadComponent";
import Login from "./routes/Login.js";
import PasswordComponent from "./components/password/PasswordComponent";
import SearchComponent from "./components/user/SearchComponent";
import TempComponent from "./components/temp/TempComponent";
import AdminComponent from "./components/admin/AdminComponent";
import ChangeUserPassword from "./components/admin/ChangeUserPassword";


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/app" component={IndexPage} >
        <Route path="user" >
          <IndexRoute component={User}/>
          <Route path="changePassword" component={PasswordComponent} />
          <Route path="salarySearch" component={SearchComponent} />
        </Route>
        <Route path="admin">
          <IndexRoute component={UploadComponent}/>
          <Route path="upload" component={UploadComponent}/>
          <Route path="changePassword" component={PasswordComponent} />
          <Route path="manager" component={AdminComponent}/>
          <Route path="changeUserPassword" component={ChangeUserPassword}/>
        </Route>
      </Route>
      <Route path="/app/login" component={Login} />
      <Route path="/app/temp" component={TempComponent} />
    </Router>
  );
}

export default RouterConfig;
