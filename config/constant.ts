/**
 * @constant API_ENV_MAP - API请求的环境变量映射
 */

export type API_ENV_MAP_TYPE = {
  dev: string;
  test: string;
  pre: string;
  prod: string;
};

export const API_ENV_MAP: API_ENV_MAP_TYPE = {
  dev: "https://found.dev.net", // 开发环境
  test: "https://found.test.net", // 测试环境
  pre: "https://found.preprod.net", // 预发环境
  prod: "https://found.vevor.net", // 生产环境
};
