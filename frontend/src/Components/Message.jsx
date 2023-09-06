import React, { useState } from "react";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const Message = ({ message, severity }) => {
  const [open, setOpen] = useState(true);
  if (open) {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }
  return (
    <div className="message">
      <Box sx={{ width: '40%' }}>
        <Collapse in={open}>
          <Alert
            icon={false}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
            variant="filled"
            severity={severity}
          >
            {message}
          </Alert>
        </Collapse>
      </Box>
    </div>
  );
};

export default Message;
