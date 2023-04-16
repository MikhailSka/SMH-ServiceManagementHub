import React from 'react';
import { Avatar } from '@mui/material';

interface ProfileImageProps {
  src: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ src }) => {
  return (
    <Avatar
      src={src}
      style={{
        border: '1.5px solid lightgray',
        margin: ' 25px auto',
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        boxShadow:
          'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
      }}
    />
  );
};