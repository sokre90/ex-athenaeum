import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Book } from "../../models/Book";

export const BookItem = ({ title, author }: Book) => {
    return (
        <article>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h1">
                        {title}
                    </Typography>
                    <Typography color="text.secondary" component="h2">
                        {author}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">I want to rent this book</Button>
                </CardActions>
            </Card>
        </article>
    );
}