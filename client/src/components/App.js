import React from 'react';
import { Router, Route , Switch } from 'react-router-dom';

import Header from './Header';
import Sidebar from './sidebar/Sidebar';
import ShowStream from './stream/ShowStream';
import StreamList from './stream/StreamList';
import CreateStream from './stream/CreateStream';
import EditStream from './stream/EditStream';
import DeleteStream from './stream/DeleteStream';
import history from '../history';

import '../styles/main.scss';

class App extends React.Component {

    render() { 
        return (
           /*  <Router history={history}>
                <div className={`ui container`}>

                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList}></Route>
                        <Route path="/stream/show/:id" exact component={ShowStream}></Route>
                        <Route path="/stream/create" exact component={CreateStream}></Route>
                        <Route path="/stream/edit/:id" exact component={EditStream}></Route>
                        <Route path="/stream/delete/:id" exact component={DeleteStream}></Route>
                    </Switch>
                </div>
            </Router> */
            <Router history={history}>
                <div className="container">
                    <div className="sidebar">
                        <Sidebar/>
                    </div>
                    <div className="content">
                        Main Site
                    </div>
                </div>   
            </Router>
        );
    }
};

export default App;