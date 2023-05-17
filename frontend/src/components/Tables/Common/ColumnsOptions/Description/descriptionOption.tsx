import { MUIDataTableColumn } from 'mui-datatables'

import { InfoButton } from 'components/Buttons/Components/IconButtons/InfoButton'

export const getDescriptionOption = (): MUIDataTableColumn['options'] => ({
  filter: false,
  customBodyRender: (value: string) => <InfoButton text={value}/>,
})
