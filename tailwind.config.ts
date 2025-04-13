// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EDEFEF',
        secondary: '#F59E0B',
        accent: '#10B981',
        background: '#F3F4F6',
      }
    }
  },
  plugins: []
}
export default config
