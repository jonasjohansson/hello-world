import { defineConfig } from 'vite'

export default defineConfig({
	// base: '/hello-world/',
	server: {
		open: '/index.html',
	},
	build: {
		outDir: '../dist',
	},
	root: 'src',
})

