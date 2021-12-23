import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const AllUni = ({ university }) => {
    const { country, name } = university;

    const url = `/AllUniversities/${name}`;
    return (

        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 3 }}>

                <CardContent>
                    <Typography variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {country}
                    </Typography>
                    <CardActions sx={{ textAlign: 'center' }}>
                        <Link style={{ textDecoration: 'none' }} to={url} ><Button s ize="small">Details</Button></Link>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default AllUni;