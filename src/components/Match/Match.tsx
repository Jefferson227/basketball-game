import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Match() {
  return (
    <div className="Match">
      <Grid container spacing={2}>
        <Grid item xs={2}>&nbsp;</Grid>
        <Grid item xs={8} sx={{ marginTop: 2 }}>
          <Paper>
            this is the centered content
          </Paper>
        </Grid>
        <Grid item xs={2}>&nbsp;</Grid>
      </Grid>
    </div>
  );
}

export default Match;
