import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';


class Register extends Component {

    emptyItem = {
        name: '',
        username: '',
        password: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }


    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            try {
                this.setState({item: this.emptyItem});
            } catch (error) {
                this.props.history.push('/');
            }
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log('onFormSubmit : ', this);

        const {item} = this.state;

        await fetch('/house/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
            credentials: 'include'
        });
        this.props.history.push('/houses');
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    render() {
        const {item} = this.state;
        return (
            <div >
            <AppNavbar/>
            <Container fluid>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup className="col-md-4 mb-3">
                    <Label for="nameLbl">Name</Label>
                    <Input type="text" name="name" id="name" value={this.state.name}
                        onChange={this.handleChange}
                    />

                    <Label for="usernameLbl">Username</Label>
                    <Input type="text" name="username" id="username" value={this.state.username}
                    onChange={this.handleChange}
            />

                    <Label for="pwdLbl">Password</Label>
                    <Input type="text" name="password" id="password" value={this.state.password}
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Sumbit</Button>{' '}
                </FormGroup>
            </Form>

            </Container>
            </div>
    );
    }
}

export default Register;