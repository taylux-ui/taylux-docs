import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "FR",
    title: "Taylux Documentation",
    description: "Créez des interfaces élégantes et performantes en quelques lignes de code",
    lastUpdated: true,
    themeConfig: {
        nav: [
            { text: "Guide", link: "/guide/introduction" },
            { text: "Components", link: "/components/introduction" },
        ],

        sidebar: {
            "/": [
                {
                    text: "Introduction",
                    items: [{ text: "Getting Started", link: "/guide/getting-started" }],
                },
                {
                    text: "Composants",
                    items: [
                        {
                            text: "Vue d'ensemble",
                            link: "/components/introduction",
                        },
                        {
                            text: "Actions",
                            collapsed: false,
                            items: [
                                {
                                    text: "Introduction",
                                    link: "/components/actions/introduction",
                                },
                                {
                                    text: "Button",
                                    link: "/components/actions/button/button",
                                },
                                {
                                    text: "Input",
                                    link: "/components/actions/input/input",
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2024-present Taylux",
        },
        search: {
            provider: "local",
        },
        lastUpdated: {
            text: "Mise à jour le ",
            formatOptions: {
                dateStyle: "long",
                timeStyle: "short",
            },
        },
    },
});
