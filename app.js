import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Listing from './components/Listing';
import AdDetail from './components/AdDetail';
import Auth from './components/Auth';
import './i18n';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Listing />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
