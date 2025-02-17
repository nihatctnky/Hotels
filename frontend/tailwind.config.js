/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Bu, src klasöründeki tüm HTML, JS, JSX, TS, ve TSX dosyalarını tarar
    "./public/**/*.html",  // Eğer public klasörünüzde HTML dosyalarınız varsa
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
