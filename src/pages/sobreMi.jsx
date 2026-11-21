
import { Box, Typography } from '@mui/material'

function Contacto() {
  return (
    <Box sx={{ background: '#080808', color: '#fff', minHeight: '80vh', p: 6 }}>
      <Typography variant="h2">
        CONTACTO
      </Typography>

      <Typography sx={{ color: '#aaa', mt: 2 }}>
        Ponte en contact
      </Typography>
    </Box>
  )
}

export default Contacto
