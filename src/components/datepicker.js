
import React from "react";
import TextField from "@mui/material/TextField";

function CustomDatePicker({ label, date, sx, ...otherProps }) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={date}
      name={date}
      autoComplete={date}
      label={label}
      size="small"
      type="date"
      sx={{
        m: "0",
        ...sx
      }}
      {...otherProps}
    />
  );
}

export default CustomDatePicker;
