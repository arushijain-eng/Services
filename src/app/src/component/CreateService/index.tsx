import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './styles.css';
import DataService from "../../dataService/DataService";

export interface IProps {}

export interface IState {
    name: string;
    url: string;
}

export default class CreateService extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {name: '', url: ''};
        this.handleCreate = this.handleCreate.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.validateUrl = this.validateUrl.bind(this);
    }

    private handleNameChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({name: event.currentTarget.value});
    }

    private handleUrlChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({url: event.currentTarget.value});
    }

    private handleCreate() {
        if(this.state.name.length >0 && this.validateUrl(this.state.url)) {
            DataService.createService(this.state.name, this.state.url)
                .then(response => {
                    alert("Successfully sent create service request");
                    this.setState({name: '', url: ''});
                })
                .catch(error => alert(error));
        }

    }

    private validateUrl(url: string){
        const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        let regex = new RegExp(expression);

        if (url.match(regex)) {
            return true;
        }
        alert("Please Enter valid URL");
        return false;

    }

    public render(): React.ReactNode {
        return (
            <div className="create-form">
                <div className="form-heading">Add Service</div>
                <input
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    placeholder="Name"
                    required/>
                <br />
                <input
                    name="serviceUrl"
                    type="url"
                    value={this.state.url}
                    onChange={this.handleUrlChange}
                    placeholder="URL"
                    required/>
                <br />
                <button onClick={this.handleCreate} >Create</button>
            </div>
        );
    }
}
