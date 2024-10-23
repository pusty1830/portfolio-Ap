import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import voiceworld from '../asset/voiceworld.jpg'
import LMS from '../asset/lms.jpg'
import movie from '../asset/movie-recomendation.webp'

const projects = [
    {
        title: "voice-world",
        description: "A full-stack meeting, streaming, and podcast platform built with React, Node.js, and mysql. It features real-time video conferencing, live streaming, and podcast hosting. The platform utilizes WebRTC and Peer.js for seamless communication and streaming capabilities.",
        image: voiceworld,
        technologies: ["React", "Node.js", "Express.js", "MySQL", "WebRTC", "Peer.js", "Socket.io"],
        link: "https://github.com/pusty1830"
    }
    ,
    {
        title: "AP-LMS",
        description: "AP-LMS is a full-featured Learning Management System (LMS) that supports course management, student enrollment, and progress tracking. The platform is built with the MERN stack and integrates Redis for caching, Cloudinary for media management, and Stripe for payment processing. The project is under active development to enhance features and scalability.",
        image: LMS,
        technologies: ["MERN", "Redis", "Cloudinary", "Stripe Payment Integration"],
        link: "https://github.com/pusty1830"
    }
    ,
    {
        title: "Movie Recommendation System",
        description: "A machine learning-based movie recommendation system that predicts and suggests movies based on user preferences. Built using Python, it leverages libraries like NumPy, Pandas, and Scikit-learn for data processing and model building. The system uses collaborative filtering and content-based algorithms to deliver personalized movie recommendations.",
        image: movie,
        technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "Machine Learning"],
        link: "https://github.com/pusty1830/movie-recommendation"
    }

];

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.03)',
    },
}));

const StyledCardMedia = styled(CardMedia)({
    paddingTop: '56.25%', // 16:9 aspect ratio
});

const TechChip = styled(Box)(({ theme }) => ({
    display: 'inline-block',
    padding: '2px 8px',
    margin: '0 4px 4px 0',
    borderRadius: '16px',
    backgroundColor: '#88C273',
    color: '#000000',
    fontSize: '0.75rem',
}));

export default function Projects() {
    return (
        <Box sx={{ bgcolor: 'black', py: 8, px: 2 }}>
            <Typography variant="h2" component="h2" align="center" sx={{ color: '#ffffff', mb: 1 }}>
                My <span style={{ color: '#88C273' }}>Projects</span>
            </Typography>
            <Typography variant="subtitle1" align="center" sx={{ color: '#88C273', mb: 4 }}>
                Explore a selection of projects I've worked on to showcase my skills and experience.
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <StyledCard>
                            <StyledCardMedia
                                image={project.image}
                                title={project.title}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h3" sx={{ color: '#88C273' }}>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    {project.description}
                                </Typography>
                                <Box sx={{ mb: 2 }}>
                                    {project.technologies.map((tech, techIndex) => (
                                        <TechChip key={techIndex}>{tech}</TechChip>
                                    ))}
                                </Box>
                                <Button
                                    variant="outlined"
                                    href={project.link}
                                    sx={{
                                        color: '#88C273',
                                        borderColor: '#88C273',
                                        '&:hover': {
                                            backgroundColor: '#88C273',
                                            color: '#000000',
                                        }
                                    }}
                                >
                                    View Project
                                </Button>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}