import { Chip, Box } from "@mui/material"
import { Book } from "../../models/Book"

export const BookCategories = ({ categories }: { categories: Book['categories'] }) => {
    return (
        <Box sx={{
            display: 'flex',
            gap: 1
        }}>
            {categories.map(category => (
                <Chip
                    key={category}
                    label={category}
                />
            ))}
        </Box>
    )
}