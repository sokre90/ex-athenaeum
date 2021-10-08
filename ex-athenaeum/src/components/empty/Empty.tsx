import { Paper, Typography } from "@mui/material";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { PropsWithChildren } from "react";

export const Empty = ({ title, action, children }: PropsWithChildren<{ title: string, action?: JSX.Element }>) => {
    return (
        <Paper elevation={3} sx={{
            p: 3,
            maxWidth: 400,
            width: 'fit-content',
            textAlign: 'center'
        }}>
            <AnnouncementIcon fontSize="large" />

            <Typography variant="h5" gutterBottom>{title}</Typography>

            <Typography component="p" gutterBottom={!!action}>{children}</Typography>

            {action}
        </Paper>
    );
}