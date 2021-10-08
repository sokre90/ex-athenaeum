import { Grid } from "@mui/material";
import { BookItem } from "./BookItem";
import { Book } from "../../models/Book";

const BooksGrid = ({ books }: { books: Book[] }) => {
    return (
        <Grid container spacing={3}>
            {books.map((book) => (
                <Grid key={book.id} item xs={12} sm={6} md={4} lg={3}>
                    <BookItem  {...book} />
                </Grid>
            ))}
        </Grid>
    );
}

export default BooksGrid;