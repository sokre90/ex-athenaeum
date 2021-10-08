import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import { selectRentedBooks } from "../../store/book/selectors";
import { useAppSelector } from "../../store/hooks";
import { Empty } from "../empty/Empty";
import BooksGrid from "./BooksGrid";

const BooksLibrary = () => {
    usePageTitle('My library');

    const books = useAppSelector(selectRentedBooks);

    return (
        <>
            {books?.length > 0 ? <BooksGrid books={books} /> : <Empty title="Sorry" action={<Button component={RouterLink} to="/books">Rent books</Button>}>You haven't rented any books yet.<br />Hit 'RENT BOOKS' to get started!</Empty>}
        </>
    );
}

export default BooksLibrary;