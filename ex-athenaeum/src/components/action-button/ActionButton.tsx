
import { Fab } from "@mui/material";
import { PropsWithChildren } from "react";
import { Link as RouterLink } from 'react-router-dom'

export const ActionButton = ({ children, to, onClick }: PropsWithChildren<{ to?: string, onClick?: () => void }>) => {
    return (
        <Fab
            color="primary"
            sx={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                m: 3
            }}
            component={to ? RouterLink : 'button'}
            to={to || undefined}
            onClick={onClick || undefined}
        >
            {children}
        </Fab>
    );
}