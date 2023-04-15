/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'preto': '#212121',
        'azul-principal': '#6278f7',
        'cinza-claro': '#F2F2F2',
        'programacao': '#57C278',
        'programacao-light': '#D9F7E9',
        'front': '#82CFFA',
        'front-light': '#E8F8FF',
        'dataScience': '#A6D157',
        'dataScience-light': '#F0F8E2',
        'devops': '#E06B69',
        'devops-light': '#FDE7E8',
        'design': '#DB6EBF',
        'design-light': '#FAE9F5',
        'mobile': '#FFBA05',
        'mobile-light': '#FFF5D9',
        'inovacao': '#FF8A29',
        'inovacao-light': '#FFEEDF'
      },
      fontFamily: {
        'Prata': ['Prata', 'serif'],
      },
      boxShadow: {
        '3xl': '0px 5px 10px rgba(0, 0, 0, 0.2)'
      },
      backgroundImage: {
        'footer-texture': "url(/public/images/fundo.png)"
      }
    },
  },
  plugins: [],
}

