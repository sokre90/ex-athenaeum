import { ChangeEvent, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import usePageTitle from '../../hooks/usePageTitle';
import { CATEGORIES } from '../../mock/categories';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addBook, setBook } from '../../store/book/actions';
import { BookKey } from '../../models/Book';

const FORM_CONTROL_OPTIONS: Readonly<SxProps<Theme>> = {
    width: 300,
    mb: 3,
    bgcolor: 'background.paper'
};

const BookForm = () => {
    const { params }: { params: { id: string } } = useRouteMatch();

    const book = useAppSelector(state => state.book.book);

    const dispatch = useAppDispatch();

    const isEditMode = (): boolean => params.id === 'new';

    usePageTitle(isEditMode() ? 'Add book' : 'Edit book');

    useEffect(() => {
        // if (params.id) {
        //     dispatch(setBook())
        // }
    }, [params]);

    const handleChange = (e: ChangeEvent<any> | SelectChangeEvent<any>) => {
        const {
            target: { name, value },
        } = e;

        dispatch(setBook({
            [name as BookKey]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        console.log(e);
        e.preventDefault();

        if (isEditMode()) {
            dispatch(setBook())
        } else {
            dispatch(addBook(book))
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField sx={FORM_CONTROL_OPTIONS} label="Title" name="title" value={book.title} placeholder="Enter title" variant="outlined" size="small" onChange={handleChange} required />
            <br />
            <TextField sx={FORM_CONTROL_OPTIONS} label="Author" name="author" value={book.author} placeholder="Enter author" variant="outlined" size="small" onChange={handleChange} required />
            <br />
            <FormControl sx={FORM_CONTROL_OPTIONS} size="small">
                <InputLabel id="categories">Categories</InputLabel>

                <Select
                    labelId="categories"
                    name="categories"
                    multiple
                    value={book.categories}
                    onChange={handleChange}
                    input={<OutlinedInput label="Categories" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} size="small" />
                            ))}
                        </Box>
                    )}
                >
                    {CATEGORIES.map((category) => (
                        <MenuItem
                            key={category}
                            value={category}
                        >
                            {category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <br />
            <Button type="submit" variant="contained">{isEditMode() ? 'Add book' : 'Edit book'}</Button>
        </form>
    );
}

export default BookForm;