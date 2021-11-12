<template>
    <div>
      <h1>File Reader</h1>
      <div id="content" v-html="pageData"></div>
    </div>
</template>
<script>
import markdownService from '@services/markdown.service';

export default {
  data () {
    return {
      pageData: ''
    }
  },
  props: {
    filename: String,
  },
  mounted() {
    this.pageData = markdownService.getMarkdownContent(this.filename);
  }
}
</script>