
import { AppBar, Toolbar, Box, Typography, Link } from '@mui/material'
import { NavLink } from 'react-router-dom'

const links = [
  { name: 'HOME', path: '/' },
  { name: 'NOSOTROS', path: '/sobre-mi' },
  { name: 'PROYECTOS', path: '/proyectos' },
  { name: 'CONTACTO', path: '/contacto' },
]

function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: '#080808',
        borderBottom: '1px solid #292929',
      }}
    >
      <Toolbar
        sx={{
          minHeight: '75px',
          px: { xs: 2, md: 6 },
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          component={NavLink}
          to="/"
          sx={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '3px',
          }}
        >
          ◉ portafolio 
        </Typography>

        <Box sx={{ display: 'flex', gap: { xs: 1.5, md: 4 } }}>
          {links.map((link) => (
            <Link
              key={link.path}
              component={NavLink}
              to={link.path}
              underline="none"
              sx={{
                color: '#888',
                fontSize: '10px',
                letterSpacing: '1px',
                position: 'relative',
                py: 1,
                whiteSpace: 'nowrap',
                transition: '0.3s',

                '&:hover': {
                  color: '#e51b32',
                },

                '&.active': {
                  color: '#fff',
                },

                '&.active::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: '#e51b32',
                },
              }}
            >
              {link.name}
            </Link>
          ))}
        </Box>

        <Typography
          component="a"
          href="https://github.com/000015675-tech/portafolio-nombre.git"
          target="_blank"
          sx={{
            color: '#aaa',
            textDecoration: 'none',
            fontSize: '10px',
            letterSpacing: '1px',
            display: { xs: 'none', md: 'block' },
          }}
        >
          GITHUB ↗
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
