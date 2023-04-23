import React from 'react'

import { ICustomer } from 'models/ICustomer'
import { RowActions } from 'components/Tables/Common/RowActions'
import { useCustomerActions } from '../Hooks/useCustomerActions'

interface CustomerRowActionsProps {
  customer: ICustomer
}

export const CustomerRowActions: React.FC<CustomerRowActionsProps> = ({
  customer,
}) => {
  const { handleUpdate, handleDelete } = useCustomerActions(customer)

  return <RowActions handleUpdate={handleUpdate} handleDelete={handleDelete} />
}
