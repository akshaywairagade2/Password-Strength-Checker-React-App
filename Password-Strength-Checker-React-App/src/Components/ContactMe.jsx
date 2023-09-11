import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';

const ContactMe = () => {
    return (
        <Box id='Contact-Me' sx={{
            '@media (max-width:780px)': {
                height: '440px',
            }
        }}>
            <Typography sx={{
                fontFamily: 'Nunito',
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: '52px',
                textAlign: 'left',
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginLeft: '80px',
                marginTop: '20px'
            }}>
                UNLOCK
            </Typography>

            <Typography sx={{
                fontFamily: 'Nunito',
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: '24px',
                textAlign: 'left',
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                width: '350px',
                position: 'relative',
                left: '50%',
                bottom: '50px',
                '@media (max-width:780px)': {
                    fontSize: '20px',
                    marginLeft: '5%',
                    position: 'relative',
                    left: '0%',
                    top: '5px',
                }
            }}>
                Hi 👋 I am Akshay Wairagade , A competitive programming enthusiast and keen to learn new technologies. ↙️
            </Typography>

            <Stack direction='row'
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{
                    backgroundColor: 'rgba(184, 214, 204, 0.16)',
                    height: '70px',
                    borderRadius: '50px',
                    width: '500px',
                    position: 'relative',
                    left: '45%',
                    '@media (max-width:780px)': {
                        width: '100%',
                        position: 'relative',
                        left: '0%',
                        top: '20px',
                    }
                }}
            >
                <a href="https://www.linkedin.com/in/akshay-wairagade-b93081204/" style={{ textDecoration: 'none' }}><LinkedInIcon sx={{ color: '#ffff', fontSize: '50px', marginTop: '10px', marginLeft: '40px', '@media (max-width:780px)': { marginLeft: '40px' } }} /></a>
                <a href="https://github.com/akshaywairagade2" style={{ textDecoration: 'none' }}><GitHubIcon sx={{ color: '#ffff', fontSize: '50px', marginTop: '10px', marginLeft: '40px', '@media (max-width:780px)': { marginLeft: '30px' } }} /></a>
                <a href="https://www.codechef.com/users/akshay_w_2" style={{ textDecoration: 'none' }}><CodeIcon sx={{ color: '#ffff', fontSize: '50px', marginTop: '10px', marginLeft: '40px', '@media (max-width:780px)': { marginLeft: '30px' } }} /></a>
                
            </Stack>

            <a href="https://github.com/akshaywairagade2" style={{ textDecoration: 'none' }}>
                <Typography sx={{
                    fontFamily: 'Nunito',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '24px',
                    textAlign: 'left',
                    letterSpacing: '-0.03em',
                    color: '#21E1E1',
                    width: '350px',
                    marginTop: '20px',
                    position: 'relative',
                    left: '55%',
                    '@media (max-width:780px)': {
                        fontSize: '20px',
                        marginLeft: '5%',
                        position: 'relative',
                        left: '20%',
                        top: '15px',
                        width: 'fit-content',
                    }
                }}>
                    Coded with love by Akshay Wairagade
                </Typography>
            </a>
        </Box>
    )
}

export default ContactMe