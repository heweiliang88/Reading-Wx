const express = require("express");
const router = express.Router(); // 配置路由模块
const validateToken = require("../util/validateToken");

// get请求验证tonken有效性
router.get("/", (req, res) => {
    validateToken(req).then((t) => {
        res.send(t);
    });
});
// 导出 router
module.exports = router;