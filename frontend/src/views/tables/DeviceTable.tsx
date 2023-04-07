import { MuiDeviceTable } from 'components/tables/components/device/MuiDeviceTable'
import React, { useState, useEffect } from 'react';

export function DeviceTable(){
    useEffect(() => {
        console.log("render")
      });
    return(
        <MuiDeviceTable/>
    )
}