import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DistrictSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">District</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>Ampara</MenuItem>
          <MenuItem value={2}>Anuradhapura</MenuItem>
          <MenuItem value={3}>Badulla</MenuItem>
          <MenuItem value={4}>Batticaloa</MenuItem>
          <MenuItem value={5}>Colombo</MenuItem>
          <MenuItem value={6}>Galle</MenuItem>
          <MenuItem value={7}>Gampaha</MenuItem>
          <MenuItem value={8}>Hambantota</MenuItem>
          <MenuItem value={9}>Jaffna</MenuItem>
          <MenuItem value={10}>Kandy</MenuItem>
          <MenuItem value={11}>Kegalle</MenuItem>
          <MenuItem value={12}>Kilinochchi</MenuItem>
          <MenuItem value={13}>Kurunegala</MenuItem>
          <MenuItem value={14}>Mannar</MenuItem>
          <MenuItem value={15}>Matale</MenuItem>
          <MenuItem value={16}>Matara</MenuItem>
          <MenuItem value={17}>Moneragala</MenuItem>
          <MenuItem value={18}>Mullaitivu</MenuItem>
          <MenuItem value={19}>Nuwara Eliya</MenuItem>
          <MenuItem value={20}>Polonnaruwa</MenuItem>
          <MenuItem value={21}>Puttalam</MenuItem>
          <MenuItem value={22}>Ratnapura</MenuItem>
          <MenuItem value={23}>Trincomalee</MenuItem>
          <MenuItem value={24}>Vavuniya</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
