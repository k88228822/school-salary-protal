/**
 * Created by roper on 2017/5/19.
 */
const ModelProxy = require('../../lib/modelproxy');

exports.serviceMethod = function (req, res, next) {
  const query = req.query.id;
  const dataProxy = new ModelProxy({
    healthCheck: 'Health.check.for.project',
  });
  dataProxy.healthCheck({
    query,
  }).done((result) => {
    res.render('index', { title: result.object.name });
  }).error((err) => {
    res.render('index', { title: err });
  });
};
