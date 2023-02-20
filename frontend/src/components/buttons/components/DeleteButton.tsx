import Button from "@material-ui/core/Button";
import DeleteIcon from '@mui/icons-material/Delete';

import { IButtonProps } from '../models/IButtonProps';

export function DeleteButton(props : IButtonProps) {
  return (
    <Button
      variant="text"
      style={{ color: '#a82a2a' }}
      startIcon={<DeleteIcon />}
      onClick={props.handleAction}
    >
      Delete
    </Button>
  );
}

// import React from 'react';
// import { useState } from 'react';
// import { useContext } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import * as Icon from 'react-bootstrap-icons';

// import DeleteData from '../../../DataService/DeleteData';
// import { DataTableContext } from '../../TableModel/DataTableContext';
// import "./ButtonDelete.css"

// function ButtonDelete(props) {
//   const [show, setShow] = useState(false);
//   const context = useContext(DataTableContext)

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const buttonAction = async () => {
//     await DeleteData(context.tableName, context.data[props.index]["id"])
//     context.receiveLoadingState(true);
//   };

//   return (
//     <>
//       <Button variant="danger" onClick={handleShow}>
//         <Icon.Trash />
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm delete</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to delete this o.0
//         </Modal.Body>
//         <Modal.Footer>
//           <button type="button" class="button-delete" onClick={() => buttonAction()}>
//             Delete
//           </button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
// export default ButtonDelete;