import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Typography, Grid } from '@mui/material'

import { isTokenAboutToExpire } from 'security/isTokenAboutToExpire'
import { useStyles } from '../../useStyles'

export const RefreshTokenAlert: React.FC = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState<number | null>(null)

  const refreshToken = () => {
    setTimeLeft(null)
  }

  useEffect(() => {
    const checkExpiry = setInterval(() => {
      if (isTokenAboutToExpire()) {
        const exp = localStorage.getItem('access_token_exp')
        const expInMs = parseInt(exp ?? '0', 10) * 1000
        setTimeLeft(Math.floor((expInMs - Date.now()) / 1000))
      } else {
        setTimeLeft(null)
      }
    }, 5 * 60 * 1000)

    return () => clearInterval(checkExpiry)
  }, [])

  useEffect(() => {
    let countdown: NodeJS.Timeout
    if (timeLeft !== null) {
      countdown = setInterval(() => {
        setTimeLeft((prevTimeLeft) =>
          prevTimeLeft !== null ? prevTimeLeft - 1 : null
        )
      }, 1000)
    }

    return () => clearInterval(countdown)
  }, [timeLeft])

  useEffect(() => {
    if (timeLeft === 0) {
      navigate('/login')
    }
  }, [timeLeft, navigate])

  if (timeLeft === null) {
    return null
  }

  return (
    <Box className={classes.blur}>
      <Container component="main" maxWidth="sm">
        <Box className={classes.smBox} sx={{ p: 2 }}>
          <Typography component="h1" variant="h4">
            Session warning
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={1}
            padding={2}
          >
            <Grid item>
              <Typography variant="h6">Session will expire in</Typography>
            </Grid>
            <Grid item>
              <Typography component="h1" variant="h4">
                {timeLeft}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">seconds</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1} padding={1} justifyContent="flex-end">
            <Grid item>
              <Button variant="contained" color="error" onClick={refreshToken}>
                Logout
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={refreshToken}
              >
                Continue Session
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
