import * as React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './styles.css';
import IService from '../../model/Service'
import DataService from '../../dataService/DataService'
import ServiceList from './ServiceList/index'
import CreateService from "../CreateService";



interface IProps {
}

interface IState {
    refreshServiceList: boolean;
}

export default class ServiceManager extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {refreshServiceList: false}
        this.handleRefreshServiceList = this.handleRefreshServiceList.bind(this);
    }

    private handleRefreshServiceList(){
        this.setState({refreshServiceList: true});
    }
    public render(): React.ReactNode {
        return (
            <Router>
                <Switch>
                    <Route path="/create">
                        <CreateService/>
                        <div className="footer">
                            <Link to="/" className="footer-button">Back</Link>
                        </div>
                    </Route>
                    <Route path="/">
                        <div className="footer">
                            <Link className="footer-button" to="/create">Create</Link>
                            <button className="footer-button refresh-Button" onClick={this.handleRefreshServiceList}>Refresh</button>
                        </div>
                        <ServiceList refresh={this.state.refreshServiceList}/>
                    </Route>
                </Switch>

            </Router>
        );
    }
}


