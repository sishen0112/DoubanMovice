// 配置API接口地址
var root = 'http://192.168.1.110:8080/api';
// 引用superagent
var superagent = require('superagent');
var jsonp = require('superagent-jsonp');
// 自定义判断元素类型JS
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filter_null(o) {
  for (var key in o) {
    if (o[key] == null) {
      delete o[key]
    }
    if (toType(o[key]) == 'string') {
      o[key] = o[key].trim()
      if (o[key].length == 0) {
        delete o[key]
      }
    }
  }
  return o
}


export default {
  /*post请求*/
  post(url, params, callback) {
    superagent
      .post(root + '/' + url)
      // .use(jsonp)
      .query(params)
      .end(function (err, res) {
        callback(err, res);
      });
  },
  post(url, callback) {
    superagent
      .post(root + '/' + url)
      // .use(jsonp)
      .end(function (err, res) {
        callback(err, res);
      });
  },
  /*get请求*/
  get(url, params, callback) {
    superagent
      .get(root + '/' + url)
      // .use(jsonp)
      .query(params)
      .end(function (err, res) {
        callback(err, res);
      });
  },
  get(url, callback) {
    console.log(root + '/' + url)
    superagent
      .get(root + '/' + url)
      // .use(jsonp)
      .end(function (err, res) {
        callback(err, res);
      });
  }
}