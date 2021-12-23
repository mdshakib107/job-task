import React, { useEffect, useState } from 'react';
import AllUni from '../AllUni/AllUni';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const AllUnis = () => {
    const [universities, setUniversities] = useState([])

    useEffect(() => {
        fetch('https://universities.hipolabs.com/search?country=India')
            .then(res => res.json())
            .then(data => setUniversities(data))
    }, [])

    return (
        <div>
            {
                universities.length === 0 ?

                    <Box sx={{ margin: '200px' }}>
                        <CircularProgress />
                    </Box>
                    :
                    < Box sx={{ flexGrow: 1 }}>
                        <Container>
                            <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                                India's All University
                            </Typography>
                            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                                All University
                            </Typography>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {
                                    universities?.map(university =>
                                        <AllUni
                                            key={university.web_pages[0]}
                                            university={university}
                                        ></AllUni>
                                    )
                                }
                            </Grid>
                        </Container>
                    </Box >
            }
        </div>
    );
};

export default AllUnis;