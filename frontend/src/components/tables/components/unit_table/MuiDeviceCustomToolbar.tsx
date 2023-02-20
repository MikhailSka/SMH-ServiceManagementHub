import React from "react";

import { ModalAdd } from "../table_components/ModalAdd";
import { AddDeviceForm } from "components/forms/components/forms/device_form/components/AddDeviceForm";

export function MuiDeviceCustomToolbar() {

  return (
    <React.Fragment>
      <ModalAdd>
        <AddDeviceForm />
      </ModalAdd>
    </React.Fragment>
  );
}
