import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Define the skills data
const skills = [
    { name: 'ReactJS', icon: '⚛️' },
    { name: 'ExpressJS', icon: '🚂' },
    { name: 'NodeJS', icon: '🟢' },
    { name: 'Redux', icon: '🔄' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'AWS', icon: '☁️' },
    { name: 'MaterialUI', icon: '🎨' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Java', icon: '☕' },
    { name: 'Python', icon: '🐍' },
    { name: 'DSA', icon: '🧮' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'Scikit-learn', icon: '📊' },
    { name: 'TailwindCSS', icon: '💨' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎭' },

];


const SkillCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#ffffff',
    background: '#1a1a1a',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

export default function Skills() {
    return (
        <Box sx={{ bgcolor: 'black', py: 8, px: 2 }}>
            <Typography variant="h2" component="h2" align="center" sx={{ color: '#88C273', mb: 4 }}>
                Skills <span style={{ color: '#ffffff' }}>&</span> <span style={{ color: '#ffff00' }}>Abilities</span>
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {skills.map((skill) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={skill.name}>
                        <SkillCard elevation={3}>
                            <Typography variant="h1" component="div" sx={{ fontSize: '3rem', mb: 1 }}>
                                {skill.icon}
                            </Typography>
                            <Typography variant="subtitle1">{skill.name}</Typography>
                        </SkillCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}