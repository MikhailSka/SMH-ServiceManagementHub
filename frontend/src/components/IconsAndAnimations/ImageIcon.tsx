import React from 'react';
import { Avatar } from '@mui/material';

import { IUser } from 'models/IUser';
import { stringAvatar } from '../../hooks/stringAvatar';

interface ProfileImageProps {
  userData: IUser
}

export const ImageIcon: React.FC<ProfileImageProps> = ({ userData }) => {
  return (
    <Avatar
      src={userData.image!}
      {...stringAvatar(userData.name)}
      style={{
        border: '1.5px solid lightgray',
        margin: ' 25px auto',
        width: '200px',
        height: '200px',
        fontSize: '100px',
        objectFit: 'cover',
        boxShadow:
          'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
      }}
    />
  );
};