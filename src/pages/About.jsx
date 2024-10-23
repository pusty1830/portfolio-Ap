import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { YouTube, Twitter, LinkedIn, GitHub } from '@mui/icons-material';
import amitavdp from '../asset/amitavdp.jpeg'
import { Facebook, Instagram } from '@mui/icons-material';

const SocialIcon = styled('a')(({ theme }) => ({
    color: '#88C273',
    fontSize: '1.5rem',
    marginRight: theme.spacing(2),
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
        color: '#ffffff',
    },
}));

export default function About() {
    return (
        <Box sx={{ bgcolor: 'black', py: 8, px: 2 }}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={8}>
                    <Typography variant="h2" component="h1" sx={{ color: 'white', mb: 2 }}>
                        Hey! I'm <span style={{ color: '#88C273' }}>Amitav Pusty</span> and I'm a{' '}
                        <span style={{ color: '#88C273' }}>full stack engineer</span>.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                        I'm passionate about technology and education, and my journey has led me through various roles—developer, content creator, entrepreneur, and innovator. As a developer, I work primarily with the MERN stack and have hands-on experience building full-stack applications.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                        Currently, I am a Co-Lead at GDG for GITA Autonomous College and an intern at SequSpace. a startup where I work, I have contributed to both frontend and backend projects using technologies like React, TypeScript, Node.js, and MySQL. I’ve also developed and deployed live projects such as <strong>voiceworld.live</strong>, a video conferencing platform.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                        I’m also focused on cloud computing and DevOps, exploring services like EC2, S3, and VPC.  my interest in building secure and scalable applications.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                        Outside of work, I enjoy creating educational content and simplifying complex technical concepts for others. I’m dedicated to helping the next generation of developers by sharing knowledge and creating easy-to-follow tutorials.
                    </Typography>
                    {/* <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                        My goal is to contribute to projects that drive real-world impact while staying committed to lifelong learning. From building real-time collaboration platforms to solving problems on LeetCode, my passion for problem-solving and technology keeps growing every day.
                    </Typography> */}
                    <Box sx={{ mt: 3 }}>
                        <SocialIcon href="https://www.facebook.com/pusty.amitav/" target="_blank" rel="noopener noreferrer">
                            <Facebook />
                        </SocialIcon>
                        <SocialIcon href="https://www.linkedin.com/in/amitavpusty/" target="_blank" rel="noopener noreferrer">
                            <LinkedIn />
                        </SocialIcon>
                        <SocialIcon href="https://www.instagram.com/amitavpusty18/" target="_blank" rel="noopener noreferrer">
                            <Instagram />
                        </SocialIcon>
                        <SocialIcon href="https://github.com/pusty1830" target="_blank" rel="noopener noreferrer">
                            <GitHub />
                        </SocialIcon>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar
                            alt="Amitav Pusty"
                            src={amitavdp}
                            sx={{
                                width: { xs: 200, md: 300 },
                                height: { xs: 200, md: 300 },
                                border: '4px solid #88C273',
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
