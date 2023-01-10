import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import Day from './Day'
import { Box } from '@mui/system'

const Week = ({ weekMenu, setAllMenu }) => {
  const [expanded, setExpanded] = React.useState(false)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

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
        Оберiть день
      </Typography>
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
