export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        void: '#05060f',
        panel: '#0c1020',
        cyan: '#64e9ff',
        green: '#61f7bc',
        violet: '#a78bfa',
        rose: '#fb7185',
      },
      boxShadow: {
        aura: '0 0 50px rgba(100, 233, 255, .18)',
      },
    },
  },
  plugins: [],
};
