import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { styled } from '@mui/system';
import gitCollege from '../asset/gita.png'

const educationData = [
    {
        school: 'GITA Autonomous College Bhubaneswar',
        years: '2022-2026',
        status: 'Pursuing',
        image: gitCollege,
        description: '',
    },
];

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    marginBottom: theme.spacing(2),
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    width: 200,
    [theme.breakpoints.down('sm')]: {
        height: 200,
        width: '100%',
    },
}));

export default function Education() {
    return (
        <Box sx={{ bgcolor: 'black', py: 8, px: 2 }}>
            <Typography variant="h2" component="h2" align="center" sx={{ color: '#ffffff', mb: 1 }}>
                My <span style={{ color: '#88C273' }}>Education</span>
            </Typography>
            <Typography variant="subtitle1" align="center" sx={{ color: '#88C273', mb: 4 }}>
                "The beautiful thing about learning is that no one can take it away from you."
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {educationData.map((edu, index) => (
                    <Grid item xs={12} md={10} key={index}>
                        <StyledCard>
                            <StyledCardMedia
                                component="img"
                                image={edu.image}
                                alt={edu.school}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h5" component="div" sx={{ color: '#88C273', mb: 1 }}>
                                    {edu.school}
                                </Typography>
                                {edu.description && (
                                    <Typography variant="body2" sx={{ mb: 1 }}>
                                        {edu.description}
                                    </Typography>
                                )}
                                <Typography variant="body1" sx={{ color: '#88C273' }}>
                                    {edu.years} | {edu.status}
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}