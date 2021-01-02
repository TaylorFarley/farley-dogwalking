import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 280,
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectServices(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = async (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    props.serviceFunction(age);
  }, [age]);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Service</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={'Walk'}>30 Minute Walk + Cool Down Time</MenuItem>
          <MenuItem value={'Park'}>Half Hour at The Park!</MenuItem>
          
        </Select>
      </FormControl>
    </div>
  );
}
