
import ToggleTheme from "./ToggleTheme"

const Header = () => {
  return (
    <header className="font-semibold flex justify-between items-center h-20 bg-alura-200 dark:bg-dark-200 px-5 sm:rounded-xl ">
      <span className="text-gray-100">Olá Usuário</span>
      <h1 className="text-gray-100 text-xl">Alura Newsletter</h1>
      <ToggleTheme />
    </header>
  )
}

export default Header