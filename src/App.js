import React, {Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
    render () {
        return (
            <div className>
                <Layout fixedHeader>
                    <Header className='header-color' title={<span style={{ color: '#ddd' }}>Title</span>} scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Finn Macdonald">
                        <Navigation>
                        <Link to="/Resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main/>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;