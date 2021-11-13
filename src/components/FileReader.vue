<template>
  <div class="content" v-html="pageData"></div>
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
<style scoped> 
h1 {
  margin-top: 0px;
}

.content {
  padding: 0px 12px 0px 12px;
}
</style>