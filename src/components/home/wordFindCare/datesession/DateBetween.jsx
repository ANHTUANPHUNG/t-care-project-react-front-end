import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';

export default function DateBetween({setSelectedDate,selectedDate}) {

  const handleDateRangeChange = (newDateRange) => {
      setSelectedDate(newDateRange);
    
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker
          value={selectedDate} 
          onChange={handleDateRangeChange}
          localeText={{ start: 'Bắt đầu', end: 'Kết thúc' }}
          disablePast ={true} 
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
