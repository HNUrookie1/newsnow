import { $fetch } from "ofetch";
import { ProxyAgent } from "undici";

// 创建一个代理代理器
const proxyAgent = new ProxyAgent("http://localhost:7890");

// 创建自定义 $fetch 实例，添加默认配置
const myFetch = $fetch.create({
  headers: {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  },
  timeout: 5000,
  retry: 3,
  dispatcher: proxyAgent, // 设置代理
});

// 使用代理发起请求
async function fetchData() {
  try {
    const data = await myFetch("https://icanhazip.com"); // 检查当前 IP
    console.log("Response:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
