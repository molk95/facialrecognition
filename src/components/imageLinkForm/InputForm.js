import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    /*display: 'flex',
    flexWrap: 'wrap',*/
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="Your Picture Link"
          style={{ margin: 10, }}
          placeholder="Place your Picture here..."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
     </div>
    </div>
  );
}