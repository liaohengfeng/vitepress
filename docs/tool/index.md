# 自建的工具

## 画板

网址：[draw](//draw.lhf.us.kg/)

用法：参考 Windows 的画板吧。

实时协作没有搭，有需求用官方的。

## 一言

网址：[hitokoto](//hitokoto.lhf.us.kg?do=json&c=all)

用法：

1. 这是一个api，你的请求应包含 `do` 和 `c`。
2. `do` 应为 `json`(返回json) 或 `text`(返回文本)。
3. `c` 应为以下参数之一(或留空)：


   | 参数 |   说明   |
   | :--: | :------: |
   |  a  |   动画   |
   |  b  |   漫画   |
   |  c  |   游戏   |
   |  d  |   文学   |
   |  e  |   原创   |
   |  f  | 来自网络 |
   |  g  |   其他   |
   |  h  |   影视   |
   |  i  |   诗词   |
   |  j  |  网易云  |
   |  k  |   哲学   |
   |  l  |  抖机灵  |

 示例：
- 返回类型为 `文学` 的 `文本` ：https://hitokoto.lhf.us.kg/?do=text&c=d
- 返回一段 json：https://hitokoto.lhf.us.kg/?do=json&c=all


## 脑图

网址：[brain](//brain.lhf.us.kg/)

用法：没啥讲的，都列出来了。

## 计算器

网址：[add](//add.lhf.us.kg/)

功能：除了Windows已有的功能外，还可以画函数。

## 短连接

网址：[lk](//lk.lhf.us.kg/)

基于 cloudflare woker + D1，别滥用。

## 必应ai

网址：[ai](//bing-ai.lhf.us.kg/)

支持接入自己的 Cookies ，**使用画图功能时必须接入Cookies**。

## markdown编辑器

网址：[markdown](//ed.lhf.us.kg)

自己搭的，推荐使用 (看不惯页面的话可以使用[stylus](//www.stylus-lang.cn/)自己加css)。
