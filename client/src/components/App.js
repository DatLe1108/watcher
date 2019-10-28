import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';

import Header from './Header';
import ShowStream from './stream/ShowStream';
import StreamList from './stream/StreamList';
import CreateStream from './stream/CreateStream';
import EditStream from './stream/EditStream';
import DeleteStream from './stream/DeleteStream';

class App extends React.Component {

    render() { 
        return (
            <BrowserRouter>
                <div className="ui container">
                    <Header />
                    
                    <Switch>
                        <Route path="/" exact component={StreamList}></Route>
                        <Route path="/stream/show/:id" exact component={ShowStream}></Route>
                        <Route path="/stream/create" exact component={CreateStream}></Route>
                        <Route path="/stream/edit/:id" exact component={EditStream}></Route>
                        <Route path="/stream/delete/:id" exact component={DeleteStream}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

};

export default App;