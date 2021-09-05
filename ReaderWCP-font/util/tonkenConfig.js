const fs = require("fs");
const path = require("path");
const http = require("axios");
const fileUrl = path.resolve(__dirname, "../public/tonken.json");
const APPID = "wx2188729b190d357d";
const APPSECRET = "d976b0e6262b829ba003e9a24032447c";
let INTERTIME = (7200 - 60) * 1000; // 设置一个默认的定期获取tonken的时间

// 保存Tonken
function setTonken() {
  return new Promise((resolve, reject) => {
    http
      .get(
        `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${APPSECRET}`
      )
      .then((res) => {
        INTERTIME = (res.data.expires_in - 60) * 1000;
        // 获取到Tonken后保存到json文件中
        fs.writeFile(
          fileUrl,
          JSON.stringify({
            tonken: res.data.access_token,
          }),
          (fserr, fsres) => {
            // 通知外界Tonken获取成功
            resolve();
          }
        );
      });
  });
}

// 定时获取Tonken
function timingSetTonken() {
  setInterval(() => {
    setTonken();
  }, INTERTIME);
}

// 获取Tonken
function getTonken() {
  return new Promise((resolve, reject) => {
    // 从json中读取保存的Tonken
    fs.readFile(fileUrl, (err, data) => {
      resolve(JSON.parse(data).tonken);
    });
  });
}

module.exports = {
  setTonken, // 更新tonken
  getTonken, // 返回获取到的tonken
  timingSetTonken, // 定时更新tonken
}; 
