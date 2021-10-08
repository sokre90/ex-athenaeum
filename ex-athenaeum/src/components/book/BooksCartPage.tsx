import { Button } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
import usePageTitle from "../../hooks/usePageTitle";
import { selectRentingBooks } from "../../store/book/selectors";
import { useAppSelector } from "../../store/hooks";
import { Empty } from "../empty/Empty";
import BooksGrid from "./BooksGrid";

const BooksCartPage = () => {
    usePageTitle('My cart');

    const books = useAppSelector(selectRentingBooks);

    return (
        <>
            {books?.length > 0 ? <BooksGrid books={books} /> : <Empty title="Sorry" action={<Button component={RouterLink} to="/books">Rent books</Button>}>You haven't rented any books yet.<br />Hit 'RENT BOOKS' to get started!</Empty>}
        </>
    );
}

export default BooksCartPage;