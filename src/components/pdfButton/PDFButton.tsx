import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '@material-ui/core';
import useStyles from './Style';

interface ButtonInterface {
    label: string;
    title: string;
    filename: string;
}
function PDFButton(props: ButtonInterface): ReactElement {
    const classes = useStyles();
    const { label, title, filename } = props;

    return (
        <Link to={`/documents/${filename}.pdf`} target="_blank">
            <Tooltip title={title}>
                <button type="button" className={classes.pdf_button}>
                    <FontAwesomeIcon
                        icon={faDownload}
                        className={classes.download_icon}
                    />
                    {label}
                </button>
            </Tooltip>
        </Link>
    );
}

export default PDFButton;
