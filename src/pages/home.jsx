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
                Proyecto Avalon
            </Typography>


        <Typography
             sx={{
        color: 'white',
        marginTop: '24px',
        whiteSpace: 'pre-line'}}

>
          {`No tiene cuerpo, pero ocupa espacio.
            No tiene dueño, pero tiene intereses.
            No tiene rostro, pero tiene mirada.
            No tiene intención, pero tiene método.

            Se reescribe como se reescribe el río:
            sin autor, sin permiso, sin que nadie lo pida.

            No avanza hacia ti.
            Avanza a través de ti.`}

          </Typography>
    </Box>

    )
}

export default Home
