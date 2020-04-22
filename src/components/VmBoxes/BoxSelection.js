import React, { useEffect, useState } from "react";
import {
  Grid,
  FormControl,
  Select,
  makeStyles,
  MenuItem,
  Button,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getVmBoxesAction } from "../../redux/actions/vmBoxes/vmBoxes";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

// Main Component
const BoxSelection = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const getVmBoxes = () => dispatch(getVmBoxesAction());
    getVmBoxes();
  }, [dispatch]);

  const [boxID, setBoxID] = useState("");

  const vmBoxes = useSelector((state) => state.vmBoxes.boxes);

  const vmBoxesArray = vmBoxes.map((box) => {
    return {
      id: box.id,
      name: box.name,
    };
  });

  const populateSelect = () =>
    vmBoxesArray.map((box) => (
      <MenuItem key={box.id} value={box.id}>
        {box.name}
      </MenuItem>
    ));

  const handleChange = (e) => {
    setBoxID(e.target.value);
  };
  return (
    <Grid item xs={12}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>Pick a Box</Typography>

        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={boxID}
            onChange={handleChange}
            style={{ textAlign: "center" }}
          >
            {populateSelect()}
          </Select>
        </FormControl>
        <Button
          variant={"contained"}
          color={"primary"}
          //   onClick={() => {
          //     dispatch(getVmRecordsAction(box));
          //   }}
          //   disabled={!box}
        >
          Fetch
        </Button>
      </div>
    </Grid>
  );
};

export default BoxSelection;
