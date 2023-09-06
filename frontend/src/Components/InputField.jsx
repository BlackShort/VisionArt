import { Box,FormLabel } from '@mui/material';
import React from 'react'

const InputField = ({ labelName,
  type,
  name,
  placeholder,
  value,
  DataChange,
}) => {
  return (
    <Box gap={1} sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', width: '-webkit-fill-available', flexDirection: 'column', padding: '0 0.5em' }}>
      <FormLabel htmlFor={name} sx={{color:'#fff',fontSize:'1.2rem'}}>{labelName}</FormLabel>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={DataChange}
        maxLength={50}
        required
        spellCheck='false'

        style={{
          letterSpacing: '0.5px',
          border: '1px solid gray',
          width: '-webkit-fill-available',
          height: '5vh',
          borderRadius: '0.3em',
          fontSize: '1rem',
          padding: '0.3em 1em',
        }}
      />
    </Box>
  )
}

export default InputField;