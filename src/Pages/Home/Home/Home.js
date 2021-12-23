import React from 'react';
import Typography from '@mui/material/Typography';


const Home = () => {
    return (
        <div>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                Explore all your opportunities
            </Typography>
            <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                Discover thousands of Master's degrees worldwide!
            </Typography>

        </div>
    );
};

export default Home;