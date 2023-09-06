import { Box, CircularProgress } from '@mui/material'
import React from 'react'

 const Loader = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>  )
}

export default Loader;

