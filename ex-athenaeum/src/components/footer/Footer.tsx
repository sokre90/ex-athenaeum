import { Container, Typography, Box } from "@mui/material";
import { getYear } from 'date-fns';

export const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 3, backgroundColor: 'grey.200', }}>
            <Container fixed>
                <Typography>© Ex-Anthenaeum {getYear(new Date())}</Typography>
            </Container>
        </Box>
    );
};