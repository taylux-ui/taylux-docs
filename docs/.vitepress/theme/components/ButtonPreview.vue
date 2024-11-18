```vue
<script setup>
import { ref, computed } from "vue";
import { TayluxButton } from "@taylux-ui/vue";

const activeTab = ref("preview");
const selectedStyle = ref("default");
const isCopied = ref(false);

const styles = ["Default", "Primary", "Secondary", "Outline", "Ghost", "Link"];

const getButtonCode = (style) => {
    const code = `<template>
    <TayluxButton
        variant="${style.toLowerCase()}"
        class="custom-button"
        @click="handleClick"
    >
        Button
    </TayluxButton>
</template>
`;

    return code;
};

const formattedCode = computed(() => {
    const codeLines = getButtonCode(selectedStyle.value).split("\n");
    return codeLines.map((line, index) => ({
        number: index + 1,
        content: line,
    }));
});

const copyCode = async () => {
    try {
        await navigator.clipboard.writeText(getButtonCode(selectedStyle.value));
        isCopied.value = true;
        setTimeout(() => {
            isCopied.value = false;
        }, 2000);
    } catch (err) {
        console.error("Failed to copy code:", err);
    }
};

const copyButtonText = computed(() => (isCopied.value ? "Copied!" : "Copy"));
</script>

<template>
    <div class="preview-container">
        <!-- Header -->
        <div class="preview-header">
            <div class="tab-container">
                <button
                    v-for="tab in ['preview', 'code']"
                    :key="tab"
                    @click="activeTab = tab"
                    class="tab"
                    :class="{ active: activeTab === tab }"
                >
                    {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
                    <div class="tab-indicator" :class="{ 'indicator-active': activeTab === tab }"></div>
                </button>
            </div>
        </div>

        <!-- Toolbar -->
        <div class="toolbar">
            <div class="style-selector">
                <span class="style-label">Style:</span>
                <select v-model="selectedStyle" class="style-select">
                    <option v-for="style in styles" :key="style.toLowerCase()" :value="style.toLowerCase()">
                        {{ style }}
                    </option>
                </select>
            </div>
            <div class="toolbar-actions">
                <button class="copy-button" @click="copyCode" :class="{ copied: isCopied }">
                    <i class="i-lucide-clipboard"></i>
                    <span class="copy-text">{{ copyButtonText }}</span>
                </button>
            </div>
        </div>

        <!-- Content -->
        <div class="preview-content">
            <Transition name="fade" mode="out-in">
                <div v-if="activeTab === 'preview'" key="preview" class="preview-area">
                    <Transition name="scale" mode="out-in">
                        <TayluxButton :key="selectedStyle" :variant="selectedStyle"> Button </TayluxButton>
                    </Transition>
                </div>
                <div v-else key="code" class="code-container">
                    <pre class="code-area">
                        <div class="code-content">
                            <div class="line-numbers">
                                <div 
                                    v-for="line in formattedCode" 
                                    :key="line.number"
                                    class="line-number"
                                >
                                    {{ line.number }}
                                </div>
                            </div>
                            <code>
                                <div 
                                    v-for="line in formattedCode" 
                                    :key="line.number"
                                    class="code-line"
                                    :class="{ 'has-content': line.content.trim() }"
                                >{{ line.content }}</div>
                            </code>
                        </div>
                    </pre>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.preview-container {
    width: 100%;
    border: 1px solid #27272a;
    border-radius: 8px;
    overflow: hidden;
    background-color: #09090b;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.preview-header {
    border-bottom: 1px solid #27272a;
    background-color: rgba(24, 24, 27, 0.3);
}

.tab-container {
    display: flex;
    gap: 1rem;
    padding: 0 1rem;
}

.tab {
    position: relative;
    padding: 0.75rem 1rem;
    color: #a1a1aa;
    cursor: pointer;
    transition: color 0.3s ease;
    background: none;
    border: none;
    font-size: 0.875rem;
    outline: none;
}

.tab:hover {
    color: white;
}

.tab.active {
    color: white;
}

.tab-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #3b82f6;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
}

.indicator-active {
    transform: scaleX(1);
}

.toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #27272a;
    background-color: rgba(24, 24, 27, 0.2);
}

.style-selector {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.style-label {
    color: #a1a1aa;
    font-size: 0.875rem;
}

.style-select {
    background-color: #27272a;
    color: white;
    border: 1px solid #3f3f46;
    border-radius: 4px;
    padding: 0.5rem 2.5rem 0.5rem 0.75rem;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s ease;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
}

.style-select:hover {
    border-color: #52525b;
    background-color: #3f3f46;
}

.style-select:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
}

.copy-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    background-color: #27272a;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.875rem;
    border: 1px solid #3f3f46;
    cursor: pointer;
    transition: all 0.2s ease;
}

.copy-button:hover {
    background-color: #3f3f46;
    transform: translateY(-1px);
}

.copy-button:active {
    transform: translateY(0);
}

.copy-button.copied {
    background-color: #059669;
    border-color: #059669;
}

.copy-text {
    min-width: 3rem;
    text-align: left;
}

.preview-content {
    padding: 1rem;
}

.preview-area {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16rem;
    background-color: white;
    border-radius: 6px;
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}

.code-container {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
}

.code-area {
    margin: 0;
    padding: 0;
    background-color: #1a1b26;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.875rem;
    line-height: 1.5;
    overflow-x: auto;
}

.code-content {
    display: flex;
    min-width: 100%;
}

.line-numbers {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    background-color: #16161e;
    border-right: 1px solid #292e42;
    user-select: none;
}

.line-number {
    padding: 0 1rem;
    color: #565f89;
    text-align: right;
    font-size: 0.75rem;
    min-width: 3rem;
}

code {
    flex: 1;
    padding: 1rem 0;
    margin: 0;
}

.code-line {
    padding: 0 1rem;
    min-height: 1.5em;
    color: #a9b1d6;
    white-space: pre;
}

.code-line.has-content {
    background-color: rgba(41, 46, 66, 0.1);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
    transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

/* Scroll styling */
.code-area::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.code-area::-webkit-scrollbar-track {
    background: #16161e;
}

.code-area::-webkit-scrollbar-thumb {
    background: #292e42;
    border-radius: 4px;
}

.code-area::-webkit-scrollbar-thumb:hover {
    background: #363b54;
}

/* Animation pour le hover des lignes */
.code-line {
    transition: background-color 0.2s ease;
}

.code-line:hover {
    background-color: rgba(41, 46, 66, 0.2);
}

/* Style de sélection du texte */
.code-area ::selection {
    background-color: rgba(73, 81, 112, 0.5);
}

/* Dark Mode Optimization */
@media (prefers-color-scheme: dark) {
    .preview-container {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
    }
}
</style>
```
