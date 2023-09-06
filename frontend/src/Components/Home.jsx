import React from 'react';
import svg1 from '../assets/svg1.svg';
import svg5 from '../assets/svg5.svg';
import { Link } from "react-router-dom";
import { Box, Button, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box style={{ display: 'flex', padding: '3% 5%', flexDirection:'column'}} gap={'5em'}>

      <div style={{display:'flex', gap:'0.4em'}}>
        <section>
          <Typography variant='h3'>Convert your thoughts in reality!</Typography>
          <p style={{ fontSize: '1.2rem' }}>
            Unleash the power of your imagination and witness the extraordinary transformation as your thoughts seamlessly transcend into breathtaking reality. Step into a world where dreams take flight and limitless possibilities await.
          </p>
          <Link to='/VisionGround'><Button  sx={{marginTop:'2em', width:'10em'}}  variant="contained" size="medium" color="secondary">Let's Create</Button></Link>
        </section>
        <section>
          <img src={svg1} alt="" style={{ width: '30em', height: '15em' }} />
        </section>
      </div>

      <div style={{display:'flex', gap:'0.4em'}}>
        <section>
          <Typography variant='h3'>Yout imagination!</Typography>
          <p style={{ fontSize: '1.2rem' }}>
          "Embark on an enchanting journey where the boundaries of reality blur, and the realm of imagination knows no limits. Unlock the extraordinary tapestry of your mind, where vibrant visions and boundless creativity weave the threads of a captivating reality."
          </p>
          <Link to='/VisionGround'><Button  sx={{marginTop:'2em', width:'10em'}}  variant="contained" size="medium" color="secondary">Get started</Button></Link>
        </section>
        <section>
          <img src={svg5} alt="" style={{ width: '30em', height: '25em' }} />
        </section>
      </div>
    </Box>
  )
}

export default Home;
