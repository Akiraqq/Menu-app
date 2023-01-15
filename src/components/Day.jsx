import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import FoodSelector from './FoodSelector'
import { Fab, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

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
      <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#006565' }} />
    }
    {...props}
  />
))(({ theme }) => ({
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

const Day = ({ meal, setAllMenu, lessThanEighty }) => {
  const [isMenuReady, setMenuReady] = React.useState(true)

  return (
    <Box>
      <Accordion
        defaultExpanded={true}
        sx={{
          backgroundColor: '#c6f4fe',
          borderRadius: 1.5,
          mb: 1,
        }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ color: '#006565' }}>Сніданок</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {meal.breakfast.map((breakfast, i) => {
            return (
              <FoodSelector
                lessThanEighty={lessThanEighty}
                key={i}
                food={breakfast[1]}
                foodKey={breakfast[0]}
                setAllMenu={setAllMenu[0]}
                isMenuReady={isMenuReady}
              />
            )
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded={true}
        sx={{ backgroundColor: '#c6f4fe', borderRadius: 1.5, mb: 1 }}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ color: '#006565' }}>Перекус</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {meal.snack.map((snack, i) => {
            return (
              <FoodSelector
                lessThanEighty={lessThanEighty}
                key={i}
                food={snack[1]}
                foodKey={snack[0]}
                setAllMenu={setAllMenu[1]}
                isMenuReady={isMenuReady}
              />
            )
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded={true}
        sx={{ backgroundColor: '#c6f4fe', borderRadius: 1.5, mb: 1 }}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: '#006565' }}>Обід</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {meal.lunch.map((lunch, i) => {
            return (
              <FoodSelector
                lessThanEighty={lessThanEighty}
                key={i}
                food={lunch[1]}
                foodKey={lunch[0]}
                setAllMenu={setAllMenu[2]}
                isMenuReady={isMenuReady}
              />
            )
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded={true}
        sx={{ backgroundColor: '#c6f4fe', borderRadius: 1.5, mb: 1 }}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography sx={{ color: '#006565' }}>Вечеря</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {meal.dinner.map((dinner, i) => {
            return (
              <FoodSelector
                lessThanEighty={lessThanEighty}
                key={i}
                food={dinner[1]}
                foodKey={dinner[0]}
                setAllMenu={setAllMenu[3]}
                isMenuReady={isMenuReady}
              />
            )
          })}
        </AccordionDetails>
      </Accordion>

      <Fab
        sx={{
          color: '#fff',
          background: `rgba(0,101,101 ,0.6)`,
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
        }}
        title="Створити меню дня"
        variant="outlined"
        aria-label="create menu"
        color="inherit"
        onClick={() => setMenuReady(!isMenuReady)}
      >
        <AddIcon />
      </Fab>
    </Box>
  )
}
export default Day
