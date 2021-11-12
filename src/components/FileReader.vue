<template>
    <div>
      <h1>File Reader</h1>
      <div id="content" v-html="fractals"></div>
    </div>
</template>
<script>
import { marked } from 'marked';
import FractalsMarkdown from '@pages/fractales.md';

export default {
  computed: {
    fractals: () => {
      return marked(FractalsMarkdown);
    }
  }
}
</script>