import React, { useState, useCallback } from 'react';
import Zoom from 'react-reveal/Zoom';
import { Ouroboro } from 'react-spinners-css';
import useStyles from './Style';

function Headshot({ src, name, style }) {
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);
    const onLoad = useCallback(() => {
        setLoaded(true);
    }, []);
    const ConditionalWrapper = ({ condition, wrapper, children }) =>
        condition ? wrapper(children) : children;
    function render() {
        return src !== '' ? (
            <>
                <ConditionalWrapper
                    condition={loaded}
                    wrapper={(children) => <Zoom>{children}</Zoom>}
                >
                    <img
                        src={src}
                        onLoad={onLoad}
                        className={classes.image}
                        alt={name}
                        style={style}
                    />
                </ConditionalWrapper>
                {!loaded && (
                    <Ouroboro
                        className={classes.spinner}
                        size={200}
                        color="#22B573"
                    />
                )}
            </>
        ) : (
            <div className={classes.placeholder} style={style} />
        );
    }
    return render();
}

export default Headshot;
