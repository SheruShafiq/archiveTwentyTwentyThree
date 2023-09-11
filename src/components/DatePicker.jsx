import React from "react";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";

const DatePicker = React.forwardRef(({
  label,
  value,
  onChange,
  error,
}, ref) => {
  return (
    <MuiDatePicker
      inputRef={ref}
      label={label}
      value={value}
      onChange={onChange}
      openTo="day"
      views={["year", "month", "day"]}
      format={"dd/MM/yyyy"}
      onError={error}
      sx={{
        maxWidth: { xs: "98.5%", md: "15.25rem" },
        minWidth: "6.125rem",
        marginTop: "-1.5rem",
        pb: "1.5rem",
        "& .MuiInputBase-input": {
          py: "0.53rem",
        },
        "& .MuiFormLabel-root": {
          position: "relative",
          top: "1rem",
        },
      }}
    />
  );
});
DatePicker.displayName = "InputField";

export default DatePicker;
