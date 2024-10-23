import React, { useState, useEffect } from 'react'
import { Box, Typography, Button, Container, Grid } from '@mui/material'
import { styled } from '@mui/system'
import amitavIcon from '../asset/amitavdp.jpeg'
import WorkExperience from './WorkExperience'
import Skills from './Skills'
import Education from './Education'
import apresume from '../asset/ap-resume.pdf'

const StyledHeroSection = styled(Box)({
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
})

const GreenText = styled('span')({
    color: '#88C273',
})

const ProfileImage = styled('img')({
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '10px',
})

const rotatingWords = ['Full Stack Developer', 'MERN Stack Expert', 'MySQL Specialist', 'AWS Enthusiast']

export default function HomePage() {
    const [wordIndex, setWordIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <StyledHeroSection>
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" component="h1" gutterBottom>
                                Trust me, I’m a <GreenText>{rotatingWords[wordIndex]}</GreenText>.
                            </Typography>
                            <Typography variant="h5" paragraph>
                                I’m Amitav Pusty, a passionate developer and technology enthusiast. With expertise in web development and a strong ability to solve complex challenges, I’m dedicated to creating innovative solutions that make an impact.
                            </Typography>
                            <a
                                href={apresume}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        backgroundColor: '#88C273',
                                        color: 'black',
                                        '&:hover': {
                                            backgroundColor: '#6ea55b',
                                        },
                                    }}
                                >
                                    View My Resume
                                </Button>
                            </a>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display="flex" justifyContent="center">
                                <ProfileImage src={amitavIcon} alt="Amitav Pusty" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHeroSection>
            <Skills />
            <WorkExperience />
            <Education />
        </>
    )
}
