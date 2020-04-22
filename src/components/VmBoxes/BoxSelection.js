import React, { useEffect } from "react";
import {
  Grid,
  FormControl,
  Select,
  makeStyles,
  MenuItem,
  Button,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getVmBoxesAction } from "../../redux/actions/vmBoxes/vmBoxes";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

const BoxSelection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getVmBoxes = () => dispatch(getVmBoxesAction());
    getVmBoxes();
  }, [dispatch]);

  const classes = useStyles();
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
            // value={box}
            // onChange={handleChangeBox}
            style={{ textAlign: "center" }}
          >
            {/* {boxesItems()} */}
            <MenuItem>Test</MenuItem>
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