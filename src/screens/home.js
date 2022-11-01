import { Button, Container } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Home() {
    let navigate = useNavigate()
    return (
        <Container >
            <Button variant='contained' className='btn' sx={{color:"white", mx:1}} onClick={()=>{navigate("/registration")}}>Registration</Button>
            <Button variant='contained' sx={{color:"white"}} onClick={()=>{navigate("/adminLogin")}}>Admin Login</Button>
            {/* <Button sx={{color:"black"}} onClick={()=>{navigate("/quiz")}}>Quiz</Button> */}
        </Container>
    )
}
