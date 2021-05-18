import React from 'react';
import './App.css';
import ServiceManager from "./component/ServiceManager/index"

export default class App extends React.Component{
public render(): React.ReactNode{
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="Header-text">Service Manager</h1>
                    <hr className="solid"/>
                </header>
                <body className="App-body">
                    <ServiceManager/>
                </body>
            </div>
        );
    }
}

