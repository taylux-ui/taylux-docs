import { defineConfig } from "vitepress";

export default defineConfig({
    title: "Taylux Documentation",
    description: "A VitePress Site",
    themeConfig: {
        nav: [
            { text: "Guide", link: "/guide/introduction" },
            { text: "Components", link: "/components/" },
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
                            text: "Actions",
                            items: [
                                {
                                    text: "Button",
                                    link: "/components/button/button",
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    },
});
