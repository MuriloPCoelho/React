import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"

const ToggleTheme = () => {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const pageClasses = document.documentElement.classList
  
  useEffect(() => {
    systemPreference && pageClasses.add('dark')
  })

  const toggle = () => {
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div onClick={toggle} className="hidden sm:block cursor-pointer">
      <MoonIcon className="h-8 text-gray-100 dark:hidden" />
      <SunIcon className="h-8 text-gray-100 hidden dark:block"/>
    </div>
  )
}

export default ToggleTheme