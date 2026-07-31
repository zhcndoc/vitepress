# VitePress 贡献指南

你好！我们非常高兴你有兴趣为 VitePress 做出贡献。在提交贡献之前，请务必抽出时间阅读以下指南：

- [行为准则](https://github.com/vuejs/vue/blob/dev/.github/CODE_OF_CONDUCT.md)
- [Pull Request 指南](#pull-request-guidelines)

## 拉取请求指南

- 从相关分支（例如 `main`）检出一个主题分支，并将其合并回该分支。

- 如果要添加新功能：

  - 请提供添加此功能的充分理由。理想情况下，您应先创建一个建议议题，并在开始开发前获得批准。

- 如果要修复错误：

  - 请在拉取请求中详细描述该错误。最好提供在线演示。

- 在处理拉取请求的过程中，可以包含多个较小的提交——GitHub 可在合并前自动将它们压缩合并。

- 提交消息必须遵循[提交消息规范](/.github/commit-convention.md)，以便自动生成变更日志。

## 开发环境设置

你需要安装 [Node.js](https://nodejs.org) v20 或更高版本，以及 [pnpm](https://pnpm.io)。

克隆仓库后，运行：

```sh
# 安装项目依赖
$ pnpm install
# 设置 git 钩子
$ pnpm simple-git-hooks
```

### 设置 VitePress 开发环境

开始体验 VitePress 最简单的方式是调整 VitePress 文档。你可以运行 `pnpm run docs` 在本地启动 VitePress 文档站点，并实时重新加载源代码。

```sh
$ pnpm run docs
```

执行上述命令后，访问 http://localhost:5173 并尝试修改源代码。你将看到实时更新。

如果你不需要启动文档站点，可以使用 `pnpm run dev` 启动 VitePress 本地开发环境。

```sh
$ pnpm run dev
```
