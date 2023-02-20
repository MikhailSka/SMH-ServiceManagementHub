import CheckBoxIcon from '@mui/icons-material/CheckBox'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault'

import '../styles/center.css'
export function IsDataActive(value: any) {
  if (value) {
    return (
      <div className='center'>
        <CheckBoxIcon
          style={{
            fill: '#1d8238',
          }}
        />
      </div>
    )
  } else {
    return (
      <div className='center'>
        <DisabledByDefaultIcon
          style={{
            fill: '#992323',
          }}
        />
      </div>
    )
  }
}
