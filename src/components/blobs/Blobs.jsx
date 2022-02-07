import React from 'react';
import useStyles from './Style';
import { BLOBIMAGES } from '../../constants/blobs';

function Blobs({ blobIndexes }) {
    const classes = useStyles();
    const blobsStyles = [
        classes.blob_red_right,
        classes.blob_green_left,
        classes.blob_green_right,
        classes.blob_green_bottom,
    ];

    function render() {
        return blobIndexes.map((i, index) => {
            const keyString = `blob_${index}`;
            return (
                <img
                    className={`${classes.background_blob} ${blobsStyles[i]}`}
                    src={BLOBIMAGES[i]}
                    alt=""
                    key={keyString}
                />
            );
        });
    }
    return render();
}

export default Blobs;
