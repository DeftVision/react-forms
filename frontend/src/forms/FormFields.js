import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

export default function FormFields() {
    const [name, setName] = useState("");
    return (
        <Box component='form' sx={{marginTop: 5}}>
             <TextField
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
             />
        </Box>
    );
}