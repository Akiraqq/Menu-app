import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import React from 'react'
import { Typography } from '@mui/material'

export default function FoodSelector({
  food,
  foodKey,
  setAllMenu,
  isMenuReady,
  lessThanEighty,
}) {
  const [selectedFood, setSelectedFood] = React.useState(
    `${food[foodKey[0]]} ${Math.round(foodKey[1] * lessThanEighty)} гр`
  )

  const handleChange = (event) => {
    setSelectedFood(event.target.value)
  }
  React.useEffect(() => {
    setSelectedFood(
      `${food[foodKey[0]]} ${Math.round(foodKey[1] * lessThanEighty)} гр`
    )
  }, [lessThanEighty])

  React.useEffect(
    () => {
      setAllMenu && setAllMenu(selectedFood)
    },
    // eslint-disable-next-line
    [isMenuReady]
  )

  return (
    <>
      <FormControl
        variant="standard"
        sx={{
          m: 0,
          width: '100%',
        }}
      >
        <Select
          sx={{ color: '#006565' }}
          labelId="controlled-select-label"
          id="controlled-select"
          renderValue={() => selectedFood}
          value={selectedFood}
          onChange={handleChange}
        >
          {food.map((name) => (
            <MenuItem
              key={name}
              value={`${name} ${Math.round(foodKey[1] * lessThanEighty)} гр`}
            >
              <Typography sx={{ color: '#006565' }}> {name}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
