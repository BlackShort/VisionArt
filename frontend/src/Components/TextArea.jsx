import Textarea from "@mui/joy/Textarea/Textarea";
import { Box, FormLabel } from "@mui/material";
import React from "react";

const TextArea = ({
    labelName,
    name,
    placeholder,
    value,
    DataChange,
}) => {
    return (
        <Box gap={1} sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', width: '-webkit-fill-available', flexDirection: 'column', padding: '0 0.5em' }}>
            <FormLabel sx={{ color: "#fff", fontSize: "1.2rem" }}>
               {labelName}
            </FormLabel>
            <Textarea
                minRows={9}
                maxRows={9}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={DataChange}

                sx={{
                    width: '-webkit-fill-available',
                    fontSize: '1rem',
                    letterSpacing: '0.5px',
                    background: "transparent",
                    color: "#fff",
                    "&:focus-within": {
                        borderColor: "gray",
                        color: "#fff",
                    },
                    "&:hover": {
                        borderColor: "gray",
                        color: "#fff",
                    },
                }}
            />
        </Box>
    );
};

export default TextArea;
