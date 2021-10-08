import {
    Link as RouterLink,
} from 'react-router-dom';
import { Typography, Box, Toolbar, Button, Container } from '@mui/material';

export const Header = () => {
    return (
        <header>
            <Box sx={{
                boxShadow: 3,
                backgroundColor: 'background.paper'
            }}>
                <Container fixed>
                    <Toolbar sx={{
                        justifyContent: 'space-between',
                        px: '0 !important',
                    }} >
                        <Typography>
                            <RouterLink to="/">Ex-Anthenaeum</RouterLink>
                        </Typography>

                        <nav>
                            {/* <Button component={RouterLink} to="/users">
                                Users
                            </Button> */}

                            <Button component={RouterLink} to="/books">
                                Books
                            </Button>

                            <Button component={RouterLink} to="/library">
                                My library
                            </Button>

                            <Button component={RouterLink} to="/cart">
                                My cart
                            </Button>
                        </nav>
                    </Toolbar>
                </Container>
            </Box>
        </header>
    )
};