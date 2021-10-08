
import { Link as RouterLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Button, CircularProgress } from "@mui/material";
import usePageTitle from "../../hooks/usePageTitle";
import { useAppSelector } from "../../store/hooks";
import { ActionButton } from "../action-button/ActionButton";
import { Empty } from "../empty/Empty";
import BooksGrid from "./BooksGrid";
import { selectBooks } from "../../store/book/selectors";

const empty = <Empty title="Sorry" action={<Button component={RouterLink} to="/books/create">Add books</Button>}>You haven't added any books yet.<br />Hit 'ADD BOOKS' to get started!</Empty>;

const BooksPage = () => {
    usePageTitle('Books');

    const books = useAppSelector(selectBooks);

    const { loading } = useAppSelector(state => state.book);

    return (
        <>
            {loading ? <CircularProgress /> : books?.length > 0 ? <BooksGrid books={books} /> : empty}

            <ActionButton to="/books/create">
                <AddIcon />
            </ActionButton>
        </>
    );
}

export default BooksPage;