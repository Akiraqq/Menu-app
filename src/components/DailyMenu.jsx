import * as React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Fab } from '@mui/material'
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded'

import Meal from './Meal'

const DailyMenu = ({ menuOfTheDay, removeMenu, eatenFood }) => {
  const meals = [
    ['Сніданок', menuOfTheDay.breakfast],
    ['Перекус', menuOfTheDay.snack],
    ['Обід', menuOfTheDay.lunch],
    ['Вечеря', menuOfTheDay.dinner],
  ]

  return (
    <Box mx={{ lg: 2, xs: 2 }} my={{ lg: 2, xs: 2 }}>
      <Typography
        variant="h4"
        sx={{
          color: '#006565',
          fontStyle: 'normal',
          fontWeight: 'fontWeightLight',
        }}
        m={1.6}
        mt={4}
        mb={2}
      >
        Меню дня
      </Typography>

      {meals.map((meals, i) => {
        return (
          <Meal
            key={i}
            meal={meals[1]}
            title={meals[0]}
            eatenFood={eatenFood[i]}
          />
        )
      })}

      <Fab
        sx={{
          position: 'fixed',

          bottom: {
            lg: '4vh',
            xl: '4vh',
            md: '4vh',
            sm: '4vh',
            xs: '4vh',
          },
          right: {
            lg: '50vh',
            xl: '50vh',
            md: '20vh',
            sm: '6vh',
            xs: '4vh',
          },
          zIndex: 100,
          color: '#fff',
          background: `rgba(0,101,101 ,0.6)`,
        }}
        title="Повернутися до вибору страв"
        aria-label="delete menu"
        color="inherit"
        onClick={() => removeMenu()}
      >
        <ReplyRoundedIcon />
      </Fab>
    </Box>
  )
}
export default DailyMenu
