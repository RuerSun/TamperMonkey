// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ruer.fun/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(document.querySelector("#ls_username")==null){
        //没有找到表示登录了,不再执行后续代码
        return;
    }
    document.querySelector("#ls_username").value="账号";
    document.querySelector("#ls_password").value="pwd";
    document.querySelector("#ls_cookietime").checked=true;
    document.querySelector(".fastlg_l button").click();
})();