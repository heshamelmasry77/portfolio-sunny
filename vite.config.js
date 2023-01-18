import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, './src/index.html'),
                about: resolve(__dirname, './src/about.html'),
            }
        },
        outDir: '../dist',
        emptyOutDir: true
    }
})
