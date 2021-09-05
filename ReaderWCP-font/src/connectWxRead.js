var express = require('express');
var wechat = require('wechat');
var wechatCenter = require('./server/controllers/wechatCenter');
var config = require('./server/config');

// wechat development
app.use('/wechat', wechat(config.wechat_validate.token, wechatCenter.all));