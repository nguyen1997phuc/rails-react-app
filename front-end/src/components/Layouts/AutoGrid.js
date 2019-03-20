import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core/';
import SearchAppBar from './SearchAppBar';
import SingleLineGridList from './SingleLineGridList'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "4em"
  },
});

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <SearchAppBar></SearchAppBar>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
         
        </Grid>
        <Grid item xs={12}>
          <SingleLineGridList></SingleLineGridList>
        </Grid>
        <Grid item xs>
         
        </Grid>
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
