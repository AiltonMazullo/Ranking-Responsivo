import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Ranking-Responsivo/', // Caminho correto para GitHub Pages (Nome do respositório)
  resolve: {
    extensions: ['.js', '.jsx'], // Garante que o Vite reconheça arquivos .jsx
  },
  esbuild: {
    loader: 'jsx', // Garante que arquivos JSX sejam corretamente convertidos
  },
});
