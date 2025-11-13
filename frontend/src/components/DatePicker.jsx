// components/DatePicker.jsx
import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function CustomDatePicker({ value, setValue }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="w-full">
        <DatePicker
          label="Select Appointment Date"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{
            textField: {
              fullWidth: true,
              variant: 'outlined',
              className: 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md',
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
}

export default CustomDatePicker;
