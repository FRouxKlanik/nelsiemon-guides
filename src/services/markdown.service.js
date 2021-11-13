import { marked } from 'marked';
import FractalsMarkdown from '@pages/fractales.md';
import RaidsMarkdown from '@pages/raids.md';
import YNAExploration from '@pages/yna_exploration.md';
import YNAProfession from '@pages/yna_profession.md';
import YNAInventaire from '@pages/yna_inventaire.md';
import YNALevelling from '@pages/yna_levelling.md';
import YNAHalloween from '@pages/yna_halloween.md';

const fileConfig = {
    raids: RaidsMarkdown,
    fractals: FractalsMarkdown,
    yna_exploration: YNAExploration,
    yna_profession: YNAProfession,
    yna_inventaire: YNAInventaire,
    yna_levelling: YNALevelling,
    yna_halloween: YNAHalloween,
};

class MarkdownService {
    getMarkdownContent(file) {
        return marked(fileConfig[file]);
    }
}

export default new MarkdownService();