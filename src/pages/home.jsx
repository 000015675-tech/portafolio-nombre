import { Box, Typography } from '@mui/material'

function Home() {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                padding: '50px',
                overflow: 'hidden'
            }}
        >
            <Box
                component='img'
                src='public/inicio.jpg'
                alt='icon'
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                }}
            />

            <Typography
                variant='h3'
                sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginBottom: '16px'
                }}
            >
                Proyecto Obsidian
            </Typography>

            <Typography
                sx={{
                    color: 'white',
                    marginTop: '24px'
                }}
            >
                La tecnologia que avanza contigo.
            </Typography>
        </Box>
    )
}

export default Home
