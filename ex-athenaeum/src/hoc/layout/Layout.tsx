import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import PageTitle from '../../components/page-title/PageTitle';

export const Layout = (props: any) => {
    return (
        <div>
            <Header />

            <main>
                <Container fixed sx={{ py: 4 }}>
                    <PageTitle />

                    {/* sx={{
                        bgcolor: 'grey.50',
                        border: 1,
                        borderColor: 'grey.400',
                        borderRadius: 1,
                        p: 3
                    }} */}

                    <Box >
                        {props.children}
                    </Box>
                </Container>
            </main>

            <Footer />
        </div>
    );
}