import { ChangeEvent } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import usePageTitle from '../../hooks/usePageTitle';
import { CATEGORIES } from '../../mock/categories';
import { createBook, updateBook } from '../../store/book/actions';
import { BookKey } from '../../models/Book';
import useBookByParamsId from '../../hooks/useBookByParamsId';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { LoadingButton } from '@mui/lab';
import { CircularProgress } from '@mui/material';

const FORM_CONTROL_OPTIONS: Readonly<SxProps<Theme>> = {
    width: 300,
    mb: 3,
    bgcolor: 'background.paper'
};

const BookForm = () => {
    const history = useHistory();

    const { book, setBook } = useBookByParamsId();

    const { loading, inProgress } = useAppSelector(state => state.book);

    const isEditMode = Boolean(book?.id);

    const actionLabel = isEditMode ? 'Edit book' : 'Add book';

    usePageTitle(actionLabel);

    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<any> | SelectChangeEvent<any>) => {
        const {
            target: { name, value },
        } = e;

        setBook({
            ...book!,
            [name as BookKey]: value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const action = isEditMode ? updateBook(book!) : createBook(book!);

        await dispatch(action);

        history.push('/books');
    }

    return (
        <>
            {loading ? <CircularProgress /> : book && (
                <form onSubmit={handleSubmit}>
                    <input type="hidden" value={book?.id || ''} />

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

                    <LoadingButton
                        type="submit"
                        loading={inProgress}
                        variant="contained"
                    >
                        {actionLabel}
                    </LoadingButton>
                </form>
            )}
        </>
    );
}

export default BookForm;