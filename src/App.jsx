import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorPage from './components/error/ErrorPage';
import Menu from './components/menu/Menu';
import Landing from './pages/landing/Landing';
import Who from './pages/who/Who';
import Problem from './pages/problem/Problem';
import Solidarity from './pages/solidarity/Solidarity';
import Projects from './pages/projects/Projects';
import useStyles from './Style';
import { main } from './data/main';
import Footer from './components/footer/Footer';
import Blobs from './components/blobs/Blobs';
import { BLOBS } from './constants/blobs';
import Banner from './components/banner/Banner';

function App() {
    const classes = useStyles();

    useEffect(() => {
        localStorage.setItem('lng', 'hu');
        document.title = main.title;
    }, []);

    function render() {
        return (
            <div className={classes.root}>
                <Router>
                    <Menu menuItems={main.menuItems} />
                    <Switch className={classes.switch}>
                        <Route exact path="/">
                            <Landing />
                        </Route>
                        <Route exact path="/kikvagyunk">
                            <Who />
                        </Route>
                        <Route exact path="/problema">
                            <Problem />
                        </Route>
                        <Route exact path="/szolidaris-gazdasag">
                            <Solidarity />
                        </Route>
                        <Route exact path="/projektjeink">
                            <Projects />
                        </Route>
                        <Route exact path="/kapcsolat">
                            <Blobs blobIndexes={[BLOBS.GREEN_BOTTOM]} />
                            <Footer stretchHeight />
                        </Route>
                        <Route render={() => <ErrorPage />} />
                    </Switch>
                </Router>
                <Banner />
            </div>
        );
    }

    return render();
}

export default App;
