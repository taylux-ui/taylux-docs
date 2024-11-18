import "@taylux-ui/vue/style.css";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import ButtonPreview from "./components/ButtonPreview.vue";
import "./style.css";

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {});
    },
    enhanceApp({ app, router, siteData }) {
        app.component("ButtonPreview", ButtonPreview);
    },
} satisfies Theme;
