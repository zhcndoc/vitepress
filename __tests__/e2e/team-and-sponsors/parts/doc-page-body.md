<script setup>
import { VPTeamMembers, VPSponsors } from 'vitepress/theme'
import { members, friends, sponsors } from './data'
</script>

普通段落，包含一个[链接](https://example.com)和`inline code`。

## 小型，单个成员

<VPTeamMembers size="small" :members="members.slice(0, 1)" />

## 小型，两位成员

<VPTeamMembers size="small" :members="members.slice(0, 2)" />

## 小型，三位成员

<VPTeamMembers size="small" :members />

## 中等，一名成员

<VPTeamMembers size="medium" :members="members.slice(0, 1)" />

## 中等，两个成员

<VPTeamMembers size="medium" :members="members.slice(0, 2)" />

## 中等，三位成员

<VPTeamMembers size="medium" :members />

## 赞助商，分级

<VPSponsors :data="sponsors" />

## 赞助商，单一等级

<VPSponsors tier="Friends" size="mini" :data="friends" />

## 组件之后

组件之后的尾部 Markdown 内容。
