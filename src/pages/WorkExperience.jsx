import React, { useState } from 'react'
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material'
import { styled } from '@mui/system'

const StyledSection = styled(Box)({
    backgroundColor: 'black',
    color: 'white',
    padding: '4rem 0',
})

const StyledPaper = styled(Paper)(({ theme, active }) => ({
    backgroundColor: active ? '#88C273' : '#1e1e1e',
    color: active ? 'black' : 'white',
    padding: '1rem',
    marginBottom: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
        backgroundColor: '#88C273',
        color: 'black',
    },
    borderLeft: '4px solid #88C273',
    borderRadius: '0 4px 4px 0',
}))


const GreenText = styled('span')({
    color: '#88C273',
})


const workExperiences = [
    {
        company: 'Web Dev Co-Lead @Google DG On Campus, GITA Autonomous College, Bhubaneswar',
        role: 'Web Development Co-Lead',
        duration: 'Sep 2024 - Present',
        location: 'Bhubaneswar, Odisha, India',
        responsibilities: [
            'Conducted workshops and technical sessions on web development for junior students',
            'Mentored and guided junior students in learning web technologies and best practices',
            'Led collaborative coding sessions and hands-on projects to enhance students\' practical skills',
        ],
    },
    {
        company: 'Sequspace Private Limited',
        role: 'Software Developer Intern',
        duration: 'May 2024 - Sep 2024',
        location: 'Bhubaneswar, Odisha, India',
        responsibilities: [
            'Developed full-stack web applications using React, Node.js, Express, and MySQL',
            'Worked on the Voiceworld project, utilizing PeerJS, WebRTC, and Socket.IO for real-time communication and video conferencing',
            'Assisted in developing front-end components to improve user experience',
            'Collaborated with the design team to implement UI/UX improvements',
            'Integrated APIs and optimized application performance',
            'Contributed to debugging and maintaining applications to ensure smooth functionality',
        ],
    },
]

export default function WorkExperience() {
    const [activeJob, setActiveJob] = useState(0)

    return (
        <StyledSection>
            <Container maxWidth="lg">
                <Typography variant="h2" gutterBottom>
                    Experience
                </Typography>
                <Typography variant="subtitle1" paragraph sx={{ color: 'grey.500' }}>
                    I've worked with various companies, always focusing on growth and learning.
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3}>
                        {workExperiences.map((job, index) => (
                            <StyledPaper
                                key={index}
                                elevation={3}
                                active={index === activeJob}
                                onClick={() => setActiveJob(index)}
                            >
                                <Typography variant="h6" color={index === activeJob ? 'black' : 'white'}>
                                    {job.company.split('@')[0]}
                                </Typography>
                            </StyledPaper>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Box>
                            <Typography variant="h5">
                                {workExperiences[activeJob].role}{' '}
                                <GreenText>@{workExperiences[activeJob].company.split('@')[1] || workExperiences[activeJob].company}</GreenText>
                            </Typography>
                            <Typography variant="subtitle2" sx={{ color: 'grey.500' }}>
                                {workExperiences[activeJob].duration}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'grey.500' }}>
                                {workExperiences[activeJob].location}
                            </Typography>
                            <Box mt={2}>
                                {workExperiences[activeJob].responsibilities.map((resp, idx) => (
                                    <Typography key={idx} variant="body1" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <GreenText sx={{ mr: 1 }}>✓</GreenText> {resp}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledSection>
    )
}