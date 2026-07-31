# Markdown 扩展插件

## 链接

### 内部链接

- [首页](/)
- [Markdown 扩展](/markdown-extensions/)
- [标题](./#internal-links)
- [省略扩展名](./foo)
- [.md 扩展名](./foo.md)
- [.html 扩展名](./foo.html)

### 外部链接

[GitHub 上的 VitePress](https://github.com/vuejs/vitepress)。

## GitHub 风格表格

| 表格          |      很      |   酷 |
| ------------- | :-----------: | -----: |
| 第 3 列       | 右对齐       | \$1600 |
| 第 2 列       |   居中       |   \$12 |
| 斑马条纹      |   很整齐     |    \$1 |

## 表情符号

- :tada:
- :100:

## 目录

[[toc]]

## 自定义容器

### 默认标题

::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险警告。
:::

::: details
这是一个详情块。
:::

::: note
这是一个注释。
:::

::: important
这是一条重要注释。
:::

::: caution
这是一条注意事项。
:::

### 自定义标题

::: danger STOP
危险区域，请勿继续
:::

::: details 点击我查看代码
```js
console.log('Hello, VitePress!')
```
:::

## 代码块中的行高亮

### 单行

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### 多个单行、范围

```js{1,4,6-8}
export default {
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

### 注释高亮

```js
export default { // [!code focus]
  data() { // [!code hl]
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## 行号

```ts:line-numbers
const line1 = '这是第 1 行'
const line2 = '这是第 2 行'
```

## 导入代码片段

### 基本代码片段

<<< @/markdown-extensions/foo.md

### 指定区域

<<< @/markdown-extensions/foo.md#snippet

### 与其他功能结合

<<< @/markdown-extensions/foo.md#snippet{1 ts:line-numbers} [包含区域的代码片段]

## 代码组

### 基础代码组

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

### 与其他功能结合使用

::: code-group

<<< @/markdown-extensions/foo.md

<<< @/markdown-extensions/foo.md#snippet{1 ts:line-numbers} [带区域的代码片段]

:::

## Markdown 文件包含

<!--@include: ./foo.md-->

## 使用 @ 包含文件

<!--@include: @/markdown-extensions/bar.md-->

## Markdown 嵌套文件包含

<!--@include: ./nested-include.md-->

## 使用范围包含 Markdown 文件

<!--@include: ./foo.md{6,8}-->

## 不带起始位置的范围 Markdown 文件引入

<!--@include: ./foo.md{,8}-->

## Markdown 文件包含（范围无结束位置）

<!--@include: ./foo.md{6,}-->

## Markdown 文件区域片段

<!--@include: ./region-include.md#snippet-->

## Markdown 文件范围区域片段

<!--@include: ./region-include.md#range-region{3,4}-->

## 不带起始位置的文件范围区域 Markdown 片段

<!--@include: ./region-include.md#range-region{,2}-->

## Markdown 文件范围区域片段（无结束位置）

<!--@include: ./region-include.md#range-region{5,}-->

## 带标题的 Markdown 文件包含

<!--@include: ./header-include.md#header-1-1-->

## 图片懒加载

![VitePress 徽标](/vitepress.png)
