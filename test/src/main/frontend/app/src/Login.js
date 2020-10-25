import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';


class Login extends Component {

    async handleSubmit(event) {
        // event.preventDefault();
        //
        // await fetch('/house/type' + (item.id ? '/' + item.id : ''), {
        //     method: (item.id) ? 'PUT' : 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(item),
        //     credentials: 'include'
        // });
        // this.props.history.push('/houses');
    }


    render() {
        return (
            <div >
            <AppNavbar/>
            <Container fluid>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup className="col-md-4 mb-3">
                    <Label for="userLbl">User</Label>
                    <Input type="text" name="usrIn" id="usrIn" value={''}
                onChange={this.handleChange} autoComplete="address-level1"/>
                    <Label for="pwdLbl">Password</Label>
                    <Input type="text" name="pwdLbl" id="pwdIn" value={''}
                    onChange={this.handleChange} autoComplete="address-level1"/>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Login</Button>{' '}
                    <Button color="secondary" tag={Link} to="/register">Register</Button>
                </FormGroup>
            </Form>

        </Container>
        </div>
    );
    }
}

export default Login;