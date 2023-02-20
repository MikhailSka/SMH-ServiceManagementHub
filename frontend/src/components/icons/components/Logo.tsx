import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined'
import Typography from '@mui/material/Typography'

export function LogoWide() {
  return (
    <>
      <WidgetsOutlinedIcon
        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
      />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        SMH
      </Typography>
    </>
  )
}

export function LogoNarrow() {
  return (
    <>
      <WidgetsOutlinedIcon
        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        SMH
      </Typography>
    </>
  )
}
