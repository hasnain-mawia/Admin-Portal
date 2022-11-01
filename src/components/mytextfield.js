import React from 'react'
import TextField from '@mui/material/TextField';


export default function MyTextField(props) {
    const { required, label, onChange, defaultValue, type } = props
    return (
        <TextField
            fullWidth
            required={required}
            id="outlined-required"
            label={label}
            defaultValue={defaultValue}
            onChange={onChange}
            sx={{margin:"0px 2px "}}

            type={type}
        />
    )
}
