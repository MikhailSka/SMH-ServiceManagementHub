import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  box: {
    background:'#ffffff',
    maxWidth: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    overflow: 'auto',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  registerBox:{
    boxShadow: '0px 3px 5px 2px rgba(0, 0, 0, 0.3)',
    borderRadius: 2,
    paddingLeft: 16, 
    paddingRight: 16, 
    paddingTop: 24, 
    paddingBottom: 24, 
    marginTop: 64, 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#ffffff',
  }
}));
