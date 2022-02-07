/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import useStyles from './Style';

export default function CustomExpansionPanel({ contents }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    function renderContents() {
        return contents.map((p) => {
            return <div className={classes.content}>{p}</div>;
        });
    }

    return (
        <div className={classes.root}>
            <ExpansionPanel
                className={classes.panel}
                onChange={() => setExpanded(!expanded)}
            >
                <ExpansionPanelSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.summary}
                >
                    {!expanded ? (
                        <div className={classes.heading}>
                            <FontAwesomeIcon
                                className={classes.headingIcon}
                                icon={faChevronCircleDown}
                                style={{ marginRight: '0.25em' }}
                            />
                            Tovább olvasom
                        </div>
                    ) : null}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    {renderContents()}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
