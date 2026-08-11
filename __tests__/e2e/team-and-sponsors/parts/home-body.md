<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers,
  VPHomeSponsors
} from 'vitepress/theme'
import { members, partners, sponsors } from './data'
</script>

## Markdown 部分

一些段落文本，包含一个[链接](https://example.com)和`内联代码`，用于
验证此变体中 Markdown 内容的样式。

- 列表项一
- 列表项二

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>我们的团队</template>
    <template #lead>
      这是一段示例文本，用于展示团队介绍内容。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members.slice(0, 2)" />
  <VPTeamPageSection>
    <template #title>合作伙伴</template>
    <template #lead>这是一段合作伙伴介绍。</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

<VPHomeSponsors
  message="感谢慷慨赞助商的支持"
  :data="sponsors"
  action-text="成为赞助商"
  action-link="https://example.com"
/>

## 组件之后

组件之后的尾随 Markdown 内容。
