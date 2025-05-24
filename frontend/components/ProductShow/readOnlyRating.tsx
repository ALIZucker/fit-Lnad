"use client"

import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function ReadOnlyRating({star}: { star: number }) {
    const [value, setValue] = useState(4);
    React.useEffect(() => {
        setValue(star);
    }, []);

    return (
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Rating
                readOnly={true}
                name="half-rating"
                value={value}
                precision={0.5}

            />
        </Box>
    );
}

export default ReadOnlyRating;
