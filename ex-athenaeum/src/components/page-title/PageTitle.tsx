import { Typography } from "@mui/material";
import { useAppSelector } from "../../store/hooks";

const PageTitle = () => {
    const title = useAppSelector(state => state.page.title);

    return (
        <Typography variant="h3" component="h1" sx={{ mb: 3 }}>{title}</Typography>
    );
}

export default PageTitle;