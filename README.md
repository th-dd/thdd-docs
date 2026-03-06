# thdd-docs

叹号大帝的文档站 - AstrBot 指令文档

## 文档结构

```
docs/
├── .vitepress/
│   └── config.mts      # VitePress 配置文件
├── commands/
│   ├── index.md        # 指令列表首页
│   ├── group-admin.md  # 群管理指令
│   ├── message.md      # 消息管理指令
│   ├── ai.md           # AI 功能指令
│   ├── entertainment.md # 娱乐功能指令
│   ├── media.md        # 媒体功能指令
│   ├── system.md       # 系统管理指令
│   └── user.md         # 用户功能指令
└── index.md            # 网站首页
```

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm docs:dev

# 构建生产版本
pnpm docs:build

# 预览构建结果
pnpm docs:preview
```

## 指令分类

| 分类 | 说明 |
|------|------|
| 群管理 | 禁言、踢人、警告、头衔等管理功能 |
| 消息管理 | 消息发送、撤回、防撤回、精华消息等 |
| AI 功能 | AI 对话、翻译等智能功能 |
| 娱乐功能 | 娶群友、运势、骰子、表情包等 |
| 媒体功能 | 点歌、截图、二维码等 |
| 系统管理 | 插件、配置、状态、日志等 |
| 用户功能 | 昵称、称呼、反馈等个人功能 |
