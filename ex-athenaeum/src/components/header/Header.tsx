import {
    Link as RouterLink,
} from 'react-router-dom';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const Header = () => {
    return (
        <header>
            <Box sx={{
                boxShadow: 3
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
                            <Button component={RouterLink} to="/users">
                                Users
                            </Button>

                            <Button component={RouterLink} to="/books">
                                Books
                            </Button>
                        </nav>
                    </Toolbar>
                </Container>
            </Box>
        </header>
    )
};