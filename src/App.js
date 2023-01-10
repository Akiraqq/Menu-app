import React from 'react'
import './App.css'
import Week from './components/Week'
import { weekMenu } from './data/foods'
import DailyMenu from './components/DailyMenu'
import { Box } from '@mui/material'

const App = () => {
  let getMenu = localStorage.getItem('menu')
  const menu = JSON.parse(getMenu)

  const [menuOfTheDay, setMenuOfTheDay] = React.useState(
    menu
      ? menu
      : {
          breakfast: [],
          snack: [],
          lunch: [],
          dinner: [],
        }
  )
  const removeMenu = () => {
    setMenuOfTheDay({
      breakfast: [],
      snack: [],
      lunch: [],
      dinner: [],
    })
  }

  React.useEffect(() => {
    const newMenu = JSON.stringify(menuOfTheDay)
    localStorage.setItem('menu', newMenu)
  }, [menuOfTheDay])

  const eatenBreakfast = (id) => {
    setMenuOfTheDay((prevState) => ({
      ...prevState,
      breakfast: prevState.breakfast.map((food) => {
        return food.id === id
          ? { ...food, isComplited: !food.isComplited }
          : { ...food }
      }),
    }))
  }
  const eatenSnack = (id) => {
    setMenuOfTheDay((prevState) => ({
      ...prevState,
      snack: prevState.snack.map((food) => {
        return food.id === id
          ? { ...food, isComplited: !food.isComplited }
          : { ...food }
      }),
    }))
  }
  const eatenLunch = (id) => {
    setMenuOfTheDay((prevState) => ({
      ...prevState,
      lunch: prevState.lunch.map((food) => {
        return food.id === id
          ? { ...food, isComplited: !food.isComplited }
          : { ...food }
      }),
    }))
  }
  const eatenDinner = (id) => {
    setMenuOfTheDay((prevState) => ({
      ...prevState,
      dinner: prevState.dinner.map((food) => {
        return food.id === id
          ? { ...food, isComplited: !food.isComplited }
          : { ...food }
      }),
    }))
  }

  const eatenFood = [eatenBreakfast, eatenSnack, eatenLunch, eatenDinner]

  const idGenerator = () => {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return ` ${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
  }

  const setBreakfast = (e) => {
    const newItem = { title: e, isComplited: false, id: idGenerator() }
    setMenuOfTheDay((prevState) => ({
      ...prevState,
      breakfast: [...prevState.breakfast, newItem],
    }))
  }
  const setSnack = (e) => {
    const newItem = { title: e, isComplited: false, id: idGenerator() }
    setMenuOfTheDay((prevState) => ({
      ...prevState,
      snack: [...prevState.snack, newItem],
    }))
  }
  const setLunch = (e) => {
    const newItem = { title: e, isComplited: false, id: idGenerator() }
    setMenuOfTheDay((prevState) => ({
      ...prevState,
      lunch: [...prevState.lunch, newItem],
    }))
  }
  const setDinner = (e) => {
    const newItem = { title: e, isComplited: false, id: idGenerator() }
    setMenuOfTheDay((prevState) => ({
      ...prevState,
      dinner: [...prevState.dinner, newItem],
    }))
  }
  const setAllMenu = [setBreakfast, setSnack, setLunch, setDinner]

  return (
    <Box
      sx={{
        mt: 6,
        bgcolor: '#c6f4fe',
        minHeight: '100vh',
        borderRadius: '12px',
        maxWidth: '920px',
        margin: 'auto',
      }}
    >
      {menuOfTheDay.breakfast.length ? (
        <DailyMenu
          menuOfTheDay={menuOfTheDay}
          removeMenu={removeMenu}
          eatenFood={eatenFood}
        />
      ) : (
        <Week weekMenu={weekMenu} setAllMenu={setAllMenu} />
      )}
    </Box>
  )
}

export default App
