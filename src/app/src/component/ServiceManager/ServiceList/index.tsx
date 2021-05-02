import * as React from "react";
import './styles.css';
import IService from '../../../model/Service'
import Service from './Service/index'
import DataService from "../../../dataService/DataService";


interface IProps {
    refresh: boolean,
}

interface IState {
    serviceList: IService[];
}

export default class ServiceList extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {serviceList: []};
        this.showAllService = this.showAllService.bind(this);
        this.handleDeleteService = this.handleDeleteService.bind(this);
    }

    public componentDidMount() {
        this.showAllService();
    }

    // private showAllService(){
    //     DataService.getAllServices().then( response =>
    //         this.setState({serviceList: response})
    //     ).catch( error => alert(error))
    // };

    private async showAllService(){
        let serviceList: any = await DataService.getAllServices();
        this.setState({serviceList: serviceList})
    };

    private handleDeleteService(){
        this.showAllService();
    }
    public render(): React.ReactNode {
        return (
            <div className="service-list">
                {this.state.serviceList
                    .sort((a,b) => a.status.addTime.epochSecond > b.status.addTime.epochSecond? 1 : -1)
                    .map( service => <Service key={service.name} service={service} onDeleteService={this.handleDeleteService}/>)}
            </div>
        );
    }
}


