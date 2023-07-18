import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
        plugins: [react()],
    })
    // eslint-disable-next-line no-unused-labels
server: {
    // eslint-disable-next-line no-unused-labels
    hmr: { overlay: false }
}