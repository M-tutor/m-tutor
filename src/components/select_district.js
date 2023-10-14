import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DistrictSelect({ value, onChange }) {

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">District</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="District"
          onChange={handleChange}
        >
          <MenuItem value='Ampara'>Ampara</MenuItem>
          <MenuItem value='Anuradhapura'>Anuradhapura</MenuItem>
          <MenuItem value='Badulla'>Badulla</MenuItem>
          <MenuItem value='Batticaloa'>Batticaloa</MenuItem>
          <MenuItem value='Colombo'>Colombo</MenuItem>
          <MenuItem value='Galle'>Galle</MenuItem>
          <MenuItem value='Gampaha'>Gampaha</MenuItem>
          <MenuItem value='Hambantota'>Hambantota</MenuItem>
          <MenuItem value='Jaffna'>Jaffna</MenuItem>
          <MenuItem value='Kandy'>Kandy</MenuItem>
          <MenuItem value='Kegalle'>Kegalle</MenuItem>
          <MenuItem value='Kilinochchi'>Kilinochchi</MenuItem>
          <MenuItem value='Kurunegala'>Kurunegala</MenuItem>
          <MenuItem value='Mannar'>Mannar</MenuItem>
          <MenuItem value='Matale'>Matale</MenuItem>
          <MenuItem value='Matara'>Matara</MenuItem>
          <MenuItem value='Moneragala'>Moneragala</MenuItem>
          <MenuItem value='Mullaitivu'>Mullaitivu</MenuItem>
          <MenuItem value='Nuwara Eliya'>Nuwara Eliya</MenuItem>
          <MenuItem value='Polonnaruwa'>Polonnaruwa</MenuItem>
          <MenuItem value='Puttalam'>Puttalam</MenuItem>
          <MenuItem value='Ratnapura'>Ratnapura</MenuItem>
          <MenuItem value='Trincomalee'>Trincomalee</MenuItem>
          <MenuItem value='Vavuniya'>Vavuniya</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
