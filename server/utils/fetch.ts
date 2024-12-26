import { $fetch } from "ofetch"
import { ProxyAgent } from "undici"


const proxyAgent = new ProxyAgent("http://localhost:7890")
const data = await $fetch("https://icanhazip.com", { dispatcher: proxyAgent })

export const myFetch = $fetch.create({
  headers: {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  },
  timeout: 10000,
  retry: 3,
})

