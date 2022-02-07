/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useMemo, Fragment, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faTimes } from '@fortawesome/free-solid-svg-icons';
import SwipeableDrawer from '@material-ui/core/Drawer';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Logo from '../logo/Logo';
import uniqueID from '../../utils/uniqueIdGenerator';
import useStyles from './Style';
import TranslationButton from '../translationButton/TranslationButton';

function Menu({ menuItems }) {
    const classes = useStyles();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    function renderTranslationButtons() {
        return (
            <li
                className={`${classes.desktop_menuItem} ${classes.language_button_container}`}
                key={uniqueID()}
            >
                <TranslationButton />
            </li>
        );
    }

    function renderMenuItems(containerClass, itemClass) {
        const renderedMenuItems = menuItems.map((i) => {
            return (
                <li className={itemClass} key={uniqueID()}>
                    <NavLink
                        exact
                        to={`/${i.link}`}
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            cursor: 'pointer',
                        }}
                    >
                        {i.title}
                    </NavLink>
                </li>
            );
        });
        renderedMenuItems.push(renderTranslationButtons());
        return <ul className={containerClass}>{renderedMenuItems}</ul>;
    }

    const [openDrawer, setOpenDrawer] = useState(false);
    function renderMobileMenu() {
        return (
            <div className={classes.mobile_menu}>
                <Logo />
                <div
                    className={classes.mobile_button_container}
                    onClick={() => setOpenDrawer(true)}
                >
                    <FontAwesomeIcon
                        onClick={() => setOpenDrawer(true)}
                        className={classes.mobile_menuButton}
                        icon={faStream}
                        size="lg"
                    />
                </div>
                <SwipeableDrawer
                    anchor="right"
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                    onClick={() => setOpenDrawer(false)}
                >
                    <div className={classes.mobile_drawer}>
                        <FontAwesomeIcon
                            onClick={() => setOpenDrawer(false)}
                            className={classes.mobile_drawerButton}
                            icon={faTimes}
                        />
                        {renderMenuItems(
                            classes.mobile_menuItems,
                            classes.mobile_menuItem
                        )}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }

    function renderDesktopMenu() {
        return (
            <nav className={classes.desktop_menu}>
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    style={{ width: '100%', margin: '0' }}
                >
                    <Grid item xs={12} sm={3} md={4} lg={3}>
                        <Logo />
                    </Grid>
                    <Grid item xs={12} sm={9} md={8} lg={9}>
                        {renderMenuItems(
                            classes.desktop_menuItems,
                            classes.desktop_menuItem
                        )}
                    </Grid>
                </Grid>
            </nav>
        );
    }

    const [hideOnScroll, setHideOnScroll] = useState(true);
    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y > prevPos.y;
            if (isShow !== hideOnScroll) setHideOnScroll(isShow);
        },
        [hideOnScroll],
        false,
        false,
        300
    );

    return useMemo(() => (
        <>
            <header
                className={`${classes.menu_container} ${
                    hideOnScroll ? '' : 'hidden'
                }`}
            >
                <Container maxWidth="lg">
                    {renderDesktopMenu()}
                    {renderMobileMenu()}
                </Container>
            </header>
        </>
    ));
}

export default Menu;
