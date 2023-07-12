import React from 'react'
import { Typography, Grid } from '@mui/material'

import { NameForm } from 'components/Forms/UsersForm/NameForm/NameForm'
import { EmailForm } from 'components/Forms/UsersForm/EmailForm/EmailForm'

interface ProfileInfoProps {
  userData: any
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ userData }) => {
  return (
    <Grid item xs={12} md={5} maxWidth={5}>
      <Typography
        sx={{
          textAlign: 'center',
        }}
        gutterBottom
      >
        Profile Info
      </Typography>
      <NameForm userData={userData} />
      <EmailForm userData={userData} />
    </Grid>
  )
}

export default ProfileInfo
