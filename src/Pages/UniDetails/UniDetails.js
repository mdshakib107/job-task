import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const UniDetails = () => {
    const { UniversityName } = useParams()
    const [university, setUniversity] = useState({});
    const { domains, alpha_two_code, country, name, web_pages } = university;
    useEffect(() => {
        fetch(`https://universities.hipolabs.com/search?name=${UniversityName}`)
            .then(res => res.json())
            .then(data => setUniversity(data[0]))

    }, [])

    return (
        <div>

            <Grid item xs={12} sm={12} md={12} style={{ margin: '100px' }}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 3, padding: '60px' }}>

                    <CardContent>
                        <Typography variant="h4" component="div">
                            Name:{name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Country: {country}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Alpha Code: {alpha_two_code}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Domains: {domains}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            URL: <a href={web_pages}>{web_pages}</a>
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>

        </div>
    );
};

export default UniDetails;