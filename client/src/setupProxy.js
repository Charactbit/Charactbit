const proxy = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = function(app) {
    app.use(
        proxy('/get', {
            target: "http://localhost:5000", // 비즈니스 서버 URL 설정
            changeOrigin: true
        }),
        proxy('/api', {
            target: "http://localhost:5000", // 비즈니스 서버 URL 설정
            changeOrigin: true
        }),
        proxy('/pose', {
            target: "http://localhost:5000", // 비즈니스 서버 URL 설정
            changeOrigin: true
        })
    );
};