import { LocalizationProvider } from '@mui/x-date-pickers'
import React, { ReactNode } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type props = {
    children:ReactNode
}

const DatePicker = ({children}:props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}
    >{children}</LocalizationProvider>
  )
}

export default DatePicker