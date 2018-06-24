import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Links extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHomeHover: false,
            isProjectsHover: false,
            isContactHover: false
        };
        this.handleHomeHover = this.handleHomeHover.bind(this);
        this.handleProjectsHover = this.handleProjectsHover.bind(this);
        this.handleContactHover = this.handleContactHover.bind(this);
    }

    handleHomeHover() {
        this.setState({
            isHomeHover: !this.state.isHomeHover
        });
    }

    handleProjectsHover() {
        this.setState({
            isProjectsHover: !this.state.isProjectsHover
        });
    }

    handleContactHover() {
        this.setState({
            isContactHover: !this.state.isContactHover
        });
    }

    render () {

        const home = {
            display: 'inline-block',
            color: this.state.isHomeHover ? '#4089B9' : '#fff',
            fontSize: '1.5em',
            transitionDuration: '0.2s',
            marginBottom: '5px',
            borderBottom: this.props.pathname === '/' ? '2px #F1C40F solid' : 'none',
            textDecoration: 'none'
        }

        const projects = {
            display: 'inline-block',
            color: this.state.isProjectsHover ? '#4089B9' : '#fff',
            fontSize: '1.5em',
            transitionDuration: '0.2s',
            marginBottom: '5px',
            borderBottom: this.props.pathname === '/projects' ? '2px #F1C40F solid' : 'none',
            textDecoration: 'none'
        }

        const contact = {
            display: 'inline-block',
            color: this.state.isContactHover ? '#4089B9' : '#fff',
            fontSize: '1.5em',
            transitionDuration: '0.2s',
            marginBottom: '5px',
            borderBottom: this.props.pathname === '/contact' ? '2px #F1C40F solid' : 'none',
            textDecoration: 'none'
        }

        return (
            <div>
                <Link style={home} onMouseEnter={this.handleHomeHover} onMouseLeave={this.handleHomeHover} to="/">
                    <h1>home</h1>
                </Link>

                <Link style={projects} onMouseEnter={this.handleProjectsHover} onMouseLeave={this.handleProjectsHover} to="/projects">projects</Link>
                <Link style={contact} onMouseEnter={this.handleContactHover} onMouseLeave={this.handleContactHover} to="/contact">contact</Link>
            </div>
        );
    }
}