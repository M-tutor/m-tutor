import React from "react";
import TextField from "@mui/material/TextField";

function CustomTextField({ label, name, sx, ...otherProps }) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={name}
      name={name}
      autoComplete={name}
      label={label}
      size="small"
      sx={{
        m: "0",
        ...sx
      }}
      {...otherProps}
    />
  );
}

export default CustomTextField;
