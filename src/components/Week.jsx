import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
  Switch,
  FormControlLabel,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import Day from './Day'
import { Box } from '@mui/system'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 52,
  height: 33,
  padding: 9,
  paddingTop: 5,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',

      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#006565',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#fff',
    width: 25,
    height: 25,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#006565',
    borderRadius: 20 / 2,
  },
}))

const Week = ({ weekMenu, setAllMenu }) => {
  const [expanded, setExpanded] = React.useState(false)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  let weight = Number(localStorage.getItem('selectedWeight'))
  const [lessThanEighty, setLessThanEighty] = React.useState(
    weight ? weight : 1
  )

  const weightToggle = () => {
    lessThanEighty === 1 ? setLessThanEighty(1.25) : setLessThanEighty(1)
  }
  React.useEffect(() => {
    localStorage.setItem('selectedWeight', lessThanEighty)
  }, [lessThanEighty])

  return (
    <Box mx={{ lg: 2, xs: 2 }} my={{ lg: 2, xs: 2 }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="baseline"
        mb={1}
      >
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
          Оберiть день
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={0}
          width="114px"
        >
          <FormControlLabel
            sx={{ opacity: 0.6 }}
            control={<MaterialUISwitch onChange={() => weightToggle()} />}
          />
          <Typography sx={{ color: '#006565', fontSize: 'large' }}>
            до {lessThanEighty === 1 ? '80' : '100'}
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={1}>
        {weekMenu.map((meal, i) => {
          return (
            <Accordion
              sx={{
                background: `rgba(121,217,248 ,0.${i * 10 + 35})`,
                borderRadius: 1,
              }}
              key={i}
              expanded={expanded === `panel${i}`}
              onChange={handleChange(`panel${i}`)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: 'rgba(255,255, 255, 0.9)' }} />
                }
                aria-controls="panel-content"
                id="panel-header"
              >
                <Typography sx={{ color: '#006565', fontSize: 'large' }}>
                  {meal.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Day
                  lessThanEighty={lessThanEighty}
                  meal={meal}
                  setAllMenu={
                    expanded && expanded === `panel${i}` && setAllMenu
                  }
                />
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Stack>
    </Box>
  )
}

export default Week
