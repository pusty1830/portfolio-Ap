import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Box, Container, IconButton, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon for hamburger
import amitavIcon from '../asset/amitavdp.jpeg';

const StyledAppBar = styled(AppBar)({
    backgroundColor: 'black',
    boxShadow: 'none',
});

const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    padding: '0.5rem 1rem',
});

const NavButton = styled(Button)(({ theme, active }) => ({
    color: active ? '#88C273' : '#fff', // Active button color
    borderBottom: active ? '2px solid #88C273' : 'none', // Active underline or bar
    borderRadius: 0,
    paddingBottom: '0.3rem',
    '&:hover': {
        backgroundColor: 'rgba(136, 194, 115, 0.1)',
    },
}));

const StyledTypography = styled(Typography)({
    color: '#88C273',
    fontWeight: 'bold',
});

const StyledAvatar = styled(Avatar)({
    width: 40,
    height: 40,
    border: '2px solid #88C273',
});

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
];

export default function Header() {
    const location = useLocation(); // Get the current route path
    const [anchorEl, setAnchorEl] = useState(null); // State to handle mobile menu open/close

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <StyledAppBar position="static">
            <Container maxWidth="lg">
                <StyledToolbar disableGutters>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <StyledAvatar
                            alt="Amitav Pusty"
                            src={amitavIcon}
                        />
                        <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Amitav Pusty
                        </StyledTypography>
                    </Box>

                    {/* Display buttons on larger screens */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navItems.map((item) => (
                            <NavButton
                                key={item.name}
                                component={Link} // Use Link component here
                                to={item.path}    // Navigate to the appropriate route
                                active={location.pathname === item.path ? 1 : 0} // Apply active styling if route matches
                            >
                                {item.name}
                            </NavButton>
                        ))}
                    </Box>

                    {/* Display hamburger menu on mobile screens */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            keepMounted
                        >
                            {navItems.map((item) => (
                                <MenuItem
                                    key={item.name}
                                    component={Link}
                                    to={item.path}
                                    onClick={handleMenuClose}
                                >
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </StyledToolbar>
            </Container>
        </StyledAppBar>
    );
}
