import React, { useState } from 'react';
import logo from '../assets/gallery.png';
import User from '../assets/user.png';
import { Link } from "react-router-dom";
import { Box, Button, Paper } from '@mui/material';
import Search from '@mui/icons-material/Search';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState();

    const CreateResult = () => {
        const data = searchTerm;
    }
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#1b1b1b', padding: '0.7em 1em' }}>
            <Box className="logo" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em' }}>
                <img src={logo} alt="VisionArt" width={30} height={30} />
                <Link to="/" style={{ fontSize: '1.5rem' }}>VisionArt</Link>
            </Box>
            <Paper component={'form'} onSubmit={CreateResult} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40%', border: '1px solid #a0a0a0', borderRadius: '0.25em', background: 'transparent' }}>
                <input type="text" placeholder="Search..." style={{ width: '90%', height: '5vh', outline: 'none', border: 'none', background: 'transparent', fontSize: '1rem', letterSpacing: '0.5px' }} spellCheck='false' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <Search sx={{ fill: '#fff', cursor: 'pointer' }} />
            </Paper>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }} gap={2}>
                <Link to='/VisionGround'><Button variant="contained" size="small" color="primary" endIcon={<AddOutlinedIcon />}>Create</Button></Link>
                <img src={User} alt="Account" width={30} height={30} />
            </Box>

        </Box>
    )
}

export default Navbar;