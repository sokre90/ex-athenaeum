import { Container, Box } from '@mui/material';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import PageTitle from '../../components/page-title/PageTitle';

export const Layout = (props: any) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: 'grey.50'
        }}
        >
            <Header />

            <Box component="main" sx={{ flex: 1 }}>
                <Container fixed sx={{ py: 4 }}>
                    <PageTitle />

                    {props.children}
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}