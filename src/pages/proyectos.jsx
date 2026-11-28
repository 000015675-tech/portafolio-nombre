
import { Box, Typography } from '@mui/material'

function Contacto() {
  return (
    <Box sx={{ background: '#080808', color: '#fff', minHeight: '80vh', p: 6 }}>
      <Typography variant="h2">
        PROYECTOS DE LA INICIATIVA
      </Typography>

      <Typography sx={{ color: '#aaa', mt: 2 }}>
        Estos son nuestro proyecto donde estamos trabajando.
      </Typography>
    </Box>
  )
}

export default Contacto
