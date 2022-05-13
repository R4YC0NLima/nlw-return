import React, {useState} from 'react'
import { useDarkSide } from '../../hooks/useDarkSide' 
import { DarkModeSwitch } from 'react-toggle-dark-mode'


export function Switcher() {
  const [colorTheme, setTheme]  = useDarkSide()
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false)

  function toggleDarkMode (checked: boolean) {
    setTheme(checked)
    setDarkSide(checked)
  }  

  return(
    <>
      <div>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={56 }/>
      </div>
    </>
  )
  
}