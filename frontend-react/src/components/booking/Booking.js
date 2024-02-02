import React, { useState, useEffect } from "react";
import api from "../../api/axiosConfig";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import CheckIcon from "@mui/icons-material/Check";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Button, Container } from "@mui/material";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [listOfEmployees, setListOfEmployees] = useState([]);
  const [highlightedDays, setHighlightedDays] = useState([
    new Date().getDate(),
  ]);
  const [selectedBarber, setSelectedBarber] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [barbersToSelectFrom, setBarbersToSelectFrom] = useState([]);
  const [disabledTimes, setDisabledTimes] = useState([""]);
  //(["9:00 AM", "10:00 AM"]);

  const handleSelectChange = (e) => {
    setSelectedBarber(e.target.value);
    //run axios to get all the appointments that barber has
  };

  const doBooking = () => {
    const bookAppointment = async () => {
      try {
        const response = await api.post("api/v1/auth/bookAppointment/book", {
          employeeId: barbersToSelectFrom.find(
            (employee) => employee.value === selectedBarber
          ).id,
          date: selectedDate,
          timeSlotsBooked: selectedTime,
          memo: "This is a memo"
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    bookAppointment();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("api/v1/auth/getEmployees");
        setBarbersToSelectFrom(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTimeClick = (time) => {
    if (!disabledTimes.includes(time)) {
      setSelectedTime(time);
    }
  };

  return (
    <div>
      <h2>Select an Barber:</h2>
      <select value={selectedBarber} onChange={handleSelectChange}>
        <option value="">Select...</option>
        {barbersToSelectFrom.map((employee) => (
          <option key={employee.id} value={employee.value}>
            {employee.firstname + " " + employee.lastname.toUpperCase(0)}
          </option>
        ))}
      </select>
      {selectedBarber && <p>You selected: {selectedBarber}</p>}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Container className="max-w-36">
          <StaticDatePicker
            // className=" dark:bg-gray-800 "
            label="Book a cut"
            showDaysOutsideCurrentMonth
            //   mask='____/__/__'
            variant="static"
            //   orientation="landscape"
            openTo="day"
            value={selectedDate}
            disablePast
            onChange={(newDate) => setSelectedDate(newDate)}
            renderInput={(params) => {
              <TextField {...params} />;
            }}
            // renderDay={(day, _value, DayComponentProps) => {
            //   const isSelected =
            //     !DayComponentProps.outsideCurrentMonth &&
            //     highlightedDays.indexOf(day.getDate()) >= 0;

            //   return (
            //     <Badge
            //       key={day.toString()}
            //       overlap="circular"
            //       badgeContent={
            //         isSelected ? (
            //           <ScheduleIcon color="red" fontSize="xs" />
            //         ) : undefined
            //       }
            //     >
            //       <PickersDay {...DayComponentProps} />
            //     </Badge>
            //   );
            // }}
          />
        </Container>
        <h2>Please Select your preferred slot</h2>
        {/* Slot Buttons */}
        <div className="grid grid-cols-6 gap-4 mt-3 border-2 border-black p-4">
          {[
            "9:00 AM",
            "9:30 AM",
            "10:00 AM",
            "10:30 AM",
            "11:00 AM",
            "11:30 AM",
            "12:00 PM",
            "12:30 PM",
            "1:00 PM",
            "1:30 PM",
            "2:00 PM",
            "2:30 PM",
            "3:00 PM",
            "3:30 PM",
            "4:00 PM",
            "4:30 PM",
            "5:00 PM",
            "5:30 PM",
            "6:00 PM",
            "6:30 PM",
          ].map((time) => (
            <button
              key={time}
              onClick={() => handleTimeClick(time)}
              disabled={disabledTimes.includes(time)}
              //   className={selectedTime === time ? "selected" : ""}
              className="border-2 border-black p-1 rounded-md disabled:hidden "
            >
              {time}
            </button>
          ))}
        </div>
        <div>Selected Time: {selectedTime}</div>
        <div>Selected Date: {selectedDate.toDateString()}</div>
        <Button variant="contained" color="success" onClick={doBooking}>
          Book
        </Button>
      </LocalizationProvider>
    </div>
  );
};

export default Booking;
