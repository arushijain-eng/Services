import * as React from "react";
import './styles.css';
import IService from "../../../../model/Service";
import DataService from "../../../../dataService/DataService";

export interface IProps {
    service: IService,
    onDeleteService: any,
}

export default class Service extends React.Component<IProps> {

    constructor(props: IProps){
        super(props);
        this.handleDeleteService = this.handleDeleteService.bind(this);
    }

    private handleDeleteService(){
         DataService.deleteService(this.props.service.name)
             .then(res => {
                 this.props.onDeleteService();
             })
             .catch(error => {
                 console.log(error)
             })
    }
    public render(): React.ReactNode {
        return (
            <div data-testid="service" className={`service flexItem ${this.props.service.status.status=='OK'? 'status-active': 'status-fail'}`}>
                <span className="service-title" title={this.props.service.name}>
                    {this.props.service.name}
                </span><br/>
                <span className="service-info">
                    URL: {this.props.service.status.url}
                </span><br/>
                <button className="delete-button" onClick={this.handleDeleteService}>Delete</button>
            </div>
        );
    }
}
