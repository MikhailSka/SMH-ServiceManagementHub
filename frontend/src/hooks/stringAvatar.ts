import { stringToColor } from "./stringToColor";

export function stringAvatar(name: string) {
  if (!name || name.split(' ').length < 2) {
    return {
      sx: {
        bgcolor: 'grey', 
      },
      children: '??', 
    };
  }

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}