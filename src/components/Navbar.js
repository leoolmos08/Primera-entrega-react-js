import { Box } from '@mui/system';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <Box>
        <AppBar color="inherit">
          <Toolbar>
            <Typography variant="h5" flexGrow={1}><Link to='/'> BURGER20</Link></Typography>
            <Box flexGrow={1}>
              <Link to='/category/burgers'><Button color='inherit'>Hamburguesas</Button></Link>
              <Link to='/category/extras'><Button color='inherit'>Papas y Extras</Button></Link>
              <Link to='/category/bebidas'><Button color='inherit'>Bebidas</Button></Link>
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <CartWidget />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
