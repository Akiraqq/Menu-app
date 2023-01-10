import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { Divider, IconButton, Stack } from '@mui/material'
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'
import NoFoodTwoToneIcon from '@mui/icons-material/NoFoodTwoTone'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: '0.9rem', color: `rgba(255, 255, 255 ,0.8)` }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

const Meal = ({ meal, title, eatenFood }) => {
  const [mealComplited, setMealComplited] = React.useState([])
  const [expandedMeal, setMealExpanded] = React.useState(true)
  React.useEffect(() => {
    const mealArr = meal.filter((meal) => {
      return meal.isComplited
    })
    setMealComplited(mealArr)
  }, [meal])
  React.useEffect(() => {
    mealComplited.length === meal.length &&
      setTimeout(() => {
        setMealExpanded(false)
      }, 3000)
  }, [mealComplited.length])
  let mealCount = `${mealComplited.length}/${meal.length}`

  return (
    <Accordion
      expanded={expandedMeal}
      sx={{
        backgroundColor: 'rgba(121,217,248, 0.7 )',
        borderRadius: 1.5,
        mb: 1,
      }}
    >
      <AccordionSummary
        sx={{ background: `rgba(0,101,101 ,0.3)` }}
        aria-controls="panel1d-content"
        id="panel1d-header"
        onClick={() => setMealExpanded(!expandedMeal)}
      >
        <Stack
          width={'99.3%'}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ color: `rgba(255, 255, 255 ,0.8)` }}>
            {title}
          </Typography>
          {mealComplited.length > 0 && mealComplited.length < meal.length && (
            <Typography sx={{ color: `rgba(255, 255, 255 ,0.8)` }}>
              {mealCount}
            </Typography>
          )}
          {mealComplited.length === meal.length && (
            <NoFoodTwoToneIcon sx={{ color: 'rgba(255,255,255, 0.8)' }} />
          )}
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        {meal.map((text) => {
          return (
            <React.Fragment key={text.id}>
              <Stack
                onClick={() => eatenFood(text.id)}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                divider={<Divider flexItem />}
              >
                <Typography
                  sx={
                    text.isComplited
                      ? { color: 'rgba(0, 101,101, 0.5)' }
                      : { color: '#006565' }
                  }
                >
                  {text.title}
                </Typography>
                <IconButton aria-label="complitedToggle">
                  {text.isComplited ? (
                    <TaskAltOutlinedIcon
                      sx={{ color: 'rgba(255,255,255, 0.7)' }}
                    />
                  ) : (
                    <RadioButtonUncheckedOutlinedIcon
                      sx={{ color: '#006565' }}
                    />
                  )}
                </IconButton>
              </Stack>
              <Divider />
            </React.Fragment>
          )
        })}
      </AccordionDetails>
    </Accordion>
  )
}
export default Meal
