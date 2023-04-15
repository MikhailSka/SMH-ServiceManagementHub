import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  box: {
    background:'#ffffff',
    maxWidth: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1.5%',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
}));
