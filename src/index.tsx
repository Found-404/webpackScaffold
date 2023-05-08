import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { API_ENV_MAP } from "../config/constant";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}

const { NODE_ENV, BASE_ENV } = process.env;

// 区分项目业务环境和模式
console.log("模式-NODE_ENV", NODE_ENV); // 模式
console.log("环境-BASE_ENV", BASE_ENV); // 环境

// 接口
console.log("接口", API_ENV_MAP[BASE_ENV || "test"]);
