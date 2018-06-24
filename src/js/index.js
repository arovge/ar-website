import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';
import Home from './components/home';
import Content from './components/base/content'
import Contact from './components/contact';
import Projects from './components/projects';
import NotFound from './components/not-found';
import '../css/main.scss'; //sass

class App extends Component {
    render () {
        return (
            <Router history={browserHistory}>
                <div>
                    <Switch>
                        <Route exact path="/" render={(props) => <Content content={<Home />} pathname={props.location.pathname} {...props} />} />
                        <Route exact path="/contact" render={(props) => <Content content={<Projects />} pathname={props.location.pathname} {...props} />} />
                        <Route exact path="/projects" render={(props) => <Content content={<Contact />} pathname={props.location.pathname} {...props} />} />
                        <Route exact path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

render(<App />, document.getElementById('app'));