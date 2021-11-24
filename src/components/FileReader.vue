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
    this.getMarkdownContent();
  },
  methods: {
    getMarkdownContent() {
      this.pageData = markdownService.getMarkdownContent(this.filename);
    }
  },
  watch: {
    filename: function () {
      this.getMarkdownContent();
    }
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