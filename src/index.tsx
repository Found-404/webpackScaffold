import React from "react";

import App from "./App";
import { ConfigProvider } from "antd";

import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import { createRoot } from "react-dom/client";

import { API_ENV_MAP } from "../config/constant";

import "moment/locale/zh-cn";

moment.locale("zh-cn");

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  );
}

const { NODE_ENV, BASE_ENV } = process.env;

// 区分项目业务环境和模式
console.log("模式-NODE_ENV", NODE_ENV); // 模式
console.log("环境-BASE_ENV", BASE_ENV); // 环境

// 接口
console.log("接口", API_ENV_MAP[BASE_ENV || "test"]);
