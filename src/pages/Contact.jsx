import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Facebook, Instagram, GitHub } from '@mui/icons-material';
import amitavdp from '../asset/amitavdp.jpeg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialIconButton = styled(IconButton)(({ theme }) => ({
    color: '#88C273',
    '&:hover': {
        backgroundColor: 'rgba(136, 194, 115, 0.1)',
    },
}));

export default function Contact() {
    return (
        <Box
            sx={{
                bgcolor: 'black',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                py: 8,
                px: 2,
            }}
        >
            <Typography
                variant="h2"
                component="h1"
                sx={{
                    color: 'white',
                    mb: 4,
                    textAlign: 'center',
                    fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }
                }}
            >
                Feel free to contact me!
            </Typography>

            <Avatar
                alt="Amitav Pusty"
                src={amitavdp}
                sx={{
                    width: { xs: 150, sm: 200 },
                    height: { xs: 150, sm: 200 },
                    mb: 4,
                    border: '4px solid #88C273',
                }}
            />

            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <SocialIconButton aria-label="Facebook" href="https://www.facebook.com/pusty.amitav/" target="_blank" rel="noopener noreferrer">
                    <Facebook fontSize="large" />
                </SocialIconButton>
                <SocialIconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/amitavpusty/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon fontSize="large" />
                </SocialIconButton>
                <SocialIconButton aria-label="Instagram" href="https://www.instagram.com/amitavpusty18/" target="_blank" rel="noopener noreferrer">
                    <Instagram fontSize="large" />
                </SocialIconButton>
                <SocialIconButton aria-label="GitHub" href="https://github.com/pusty1830" target="_blank" rel="noopener noreferrer">
                    <GitHub fontSize="large" />
                </SocialIconButton>
            </Box>

            {/* Contact details */}
            <Typography
                variant="h6"
                component="p"
                sx={{ color: '#88C273', textAlign: 'center', mb: 1 }}
            >
                Email: <a href="mailto:amitav.prusty089@gmail.com" style={{ color: '#88C273', textDecoration: 'none' }}>amitav.prusty089@gmail.com</a>
            </Typography>
            <Typography
                variant="h6"
                component="p"
                sx={{ color: '#88C273', textAlign: 'center' }}
            >
                Phone: <a href="tel:+916371372865 " style={{ color: '#88C273', textDecoration: 'none' }}>+91 6371 372 865</a>
            </Typography>
        </Box>
    );
}
