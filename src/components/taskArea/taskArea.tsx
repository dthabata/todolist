import React, { FC, ReactElement } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { format } from 'date-fns';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <Typography
          variant="h6"
          color="grey"
          style={{ marginTop: '30px', marginLeft: '-34px' }}
        >
          Status of your tasks as on{' '}
          {format(new Date(), 'PPPP')}
        </Typography>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <Box>Task counter</Box>
          <Box>Task counter</Box>
          <Box>Task counter</Box>
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}
        >
          <Box>Tasks will appear here</Box>
          <Box>Tasks will appear here</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
