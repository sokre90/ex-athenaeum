import { Grid } from "@mui/material";
import usePageTitle from "../../hooks/usePageTitle";
import { useAppSelector } from "../../store/hooks";
import { BookItem } from "./BookItem";

const BookGrid = () => {
    const books = useAppSelector(state => state.book.data);

    usePageTitle('Books');

    return (
        <Grid container spacing={3}>
            {books.map((book) => (
                <Grid key={book.id} item xs={4}>
                    <BookItem  {...book} />
                </Grid>
            ))}
        </Grid>
    );

}

export default BookGrid;