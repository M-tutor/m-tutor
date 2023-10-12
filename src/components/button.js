import React from "react";
import Button from "@mui/material/Button";

function CustomButton({ color, sx, ...otherProps }) {
  return (
    <Button
      variant="contained"
      color={color}
      fullWidth
      my={1}
      sx={{
        textTransform: "none",
        height: "40px",
        borderRadius: "8px",
        ...sx
      }}
      {...otherProps}
    />
  );
}

export default CustomButton;
