import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  box: {
    background: '#ffffff',
    maxWidth: '90%',
    minHeight: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    overflow: 'auto',
    boxShadow:
      'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  registerBox: {
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
  },
  loading: {
    textAlign: 'center',
  },
  menuPaper: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
  noTableBorder: {
    '& .MuiDataTables-paper': {
      boxShadow: 'none',
      border: 'none',
    },
  },
}))
