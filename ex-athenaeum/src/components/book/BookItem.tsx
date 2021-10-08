import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit'
import { Book } from "../../models/Book";
import NoImage from '../../assets/images/image.svg';
import { BookRentButton } from "./BookRentButton";
import {
    Link as RouterLink,
} from 'react-router-dom';
import { BookCategories } from "./BookCategories";

export const BookItem = ({ id, title, author, status, graphic, categories }: Book) => {

    return (
        <article>
            <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={graphic?.src || NoImage}
                    alt={title}
                    style={!(graphic?.src) ? {
                        opacity: 0.2
                    } : {}}
                    sx={!(graphic?.src) ? {
                        width: 'auto',
                        maxWidth: '100%',
                        mx: 'auto'
                    } : null}
                />

                <CardContent>
                    <Typography variant="h5" component="h1">
                        {title} <IconButton component={RouterLink} to={`/books/${id!}`}><EditIcon /></IconButton>
                    </Typography>

                    <Typography
                        color="text.secondary"
                        component="h2"
                        sx={{
                            mb: categories?.length > 0 ? 2 : 0
                        }}
                    >
                        by: {author}
                    </Typography>

                    <BookCategories categories={categories} />
                </CardContent>

                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <BookRentButton id={id} status={status} />
                </CardActions>
            </Card>
        </article>
    );
}