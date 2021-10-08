import { Grid } from "@mui/material";
import { BookItem } from "./BookItem";
import { Book } from "../../models/Book";

const BookGrid = ({ books }: { books: Book[] }) => {
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