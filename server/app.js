const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routerConfig = require('express-auto-router/index');
const ModelProxy = require('../lib/modelproxy');
const project = require('../project.config');

const app = express();

// ModelProxy
ModelProxy.init('./interface.json');

// 文件路径工具
// const dir = project.env === 'production' ? 'dist' : 'public';
const inProject = path.resolve.bind(path, project.basePath);
const inProjectDist = file => inProject('dist', file);

app.use(express.static(path.resolve(project.basePath, project.outDir)));

routerConfig(app, {
  dirPath: `${__dirname}/routes/`,
  map: {
    index: '/',
  },
});
// view engine setup
// app.set('src2', path.join(__dirname, 'src2'));
app.set('views', path.join(project.basePath, 'src2/views'));
app.set('view engine', 'xtpl');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(project.basePath, 'src2/public')));
app.use(express.static(path.join(project.basePath, 'dist')));
app.use(express.static(path.join(project.basePath, 'public')));

app.get('/app/*',(rq,res)=>{
  res.sendfile(inProjectDist('index.html'));
})
// catch 404 and forward to error handler
app.use((req, res, next) => {
  // res.sendfile(inProjectDist('index.html'));
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
