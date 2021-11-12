import { marked } from 'marked';
import FractalsMarkdown from '@pages/fractales.md';
import RaidsMarkdown from '@pages/raids.md';

const fileConfig = {
    raids: RaidsMarkdown,
    fractals: FractalsMarkdown
};

class MarkdownService {
    getMarkdownContent(file) {
        return marked(fileConfig[file]);
    }
}

export default new MarkdownService();