---
title: JWT 单 token 设计
description: 不做刷新 token、不做续期时的取舍与实现要点
date: 2026-10-20
---

# JWT 单 token 设计

> 这是一篇示例笔记，先把「写法 + 结构」立起来，内容按你的真实实现补全（`【待补】`）。

## 场景

注册 / 登录只需用户名 + 密码，前端拿到一个 token 后所有请求都带上，不引入 refresh token、不做滑动续期。

## 取舍

| 方案 | 优点 | 代价 |
|---|---|---|
| 单 token（无过期） | 实现最简单，前端无感 | 一旦泄露无法主动失效，只能换密钥 |
| 单 token + 短过期 | 泄露窗口小 | 过期即需重登，体验差 |
| access + refresh | 体验与安全平衡 | 复杂度、存储、并发刷新都要处理 |

## 实现要点

1. **签名密钥**放配置/环境变量，不进代码库。
2. **payload 只放必要字段**（用户 id、用户名），不放敏感信息。
3. **过滤器统一校验**：解析 → 校验签名与过期 → 写入 SecurityContext。
4. **失败统一返回**：401 由全局异常处理，避免各接口各写一套。

```java
// 解析示例（jjwt 0.12.x 写法）
Jws<Claims> jws = Jwts.parser()
    .verifyWith(secretKey)
    .build()
    .parseSignedClaims(token);
String username = jws.getPayload().getSubject();
```

## 后续要补

- 【待补】密钥轮换方案
- 【待补】多端登录 / 强制下线的处理
- 【待补】实际代码位置与测试用例
