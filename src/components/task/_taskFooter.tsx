import React, { FC, ReactElement } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box, Button, Switch } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import PropTypes from 'prop-types';

export const TaskFooter: FC<ITaskFooter> = (
  props,
): ReactElement => {
  const {
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In progress"
        control={
          <Switch
            onChange={(e) => onStatusChange(e)}
            color="warning"
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="medium"
        sx={{
          color: '#ffff',
          borderRadius: '20px',
          fontSize: '10px',
        }}
        onClick={(e) => onClick(e)}
      >
        Mark complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
