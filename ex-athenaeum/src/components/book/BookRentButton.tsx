import { Button, Tooltip } from "@mui/material";
import { BookStatus, SetBookStatusPayload } from "../../models/Book";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CancelIcon from '@mui/icons-material/Cancel';
import { useAppDispatch } from '../../store/hooks';
import { setBookStatus } from "../../store/book/actions";

export const BookRentButton = ({ id, status }: SetBookStatusPayload) => {
    const dispatch = useAppDispatch();

    const handleClick = (bookStatus: BookStatus) => {
        dispatch(setBookStatus({ id, status: bookStatus }));
    }

    let tooltipTitle: string;
    let bookActionButton: JSX.Element;

    switch (status) {
        case 'renting':
            tooltipTitle = 'Remove from rent';
            bookActionButton = <Button size="small" color="error" startIcon={<CancelIcon />} onClick={() => handleClick(null)}>Remove</Button>;
            break;
        case 'rented':
            tooltipTitle = 'Return this book';
            bookActionButton = <Button size="small" startIcon={<MenuBookIcon />} onClick={() => handleClick('returning')}>Return</Button>;
            break;
        case 'returning':
            tooltipTitle = 'Remove from return';
            bookActionButton = <Button size="small" color="error" startIcon={<CancelIcon />} onClick={() => handleClick(null)}>Remove</Button>;
            break;
        case 'returned':
        default:
            tooltipTitle = 'Rent this book';
            bookActionButton = <Button size="small" startIcon={<MenuBookIcon />} onClick={() => handleClick('renting')}>Rent</Button>;
            break;
    }

    return (
        <Tooltip title={tooltipTitle} arrow placement="top">
            {bookActionButton}
        </Tooltip>
    );
}