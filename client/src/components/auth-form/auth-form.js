import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import {login, signUp} from "../../Service";

const FormItem = Form.Item;


class AuthForm extends Component{

    state= {
        user: {}
    };

    handleSubmit = (e) => {
        // quitamos el refresh de la página
        e.preventDefault();

        // chacamos si estamos en login para loguear al usuario
        if(this.props.match.path === "/login"){
            login(this.state.user)
                .then(user=>{
                    localStorage.setItem("user", JSON.stringify(user));
                    this.setState({user:{}});
                    this.props.history.push("/");
                    return;
                });
        }

        // si no entonces creamos el usuario
        signUp(this.state.user)
            .then(user=>{
                this.props.history.push('/login');
            })

    };

    handleChange = (e) => {
        const {user} = this.state;
        const field = e.target.name;
        user[field] = e.target.value;
        this.setState({user});
    };

    render() {

        return (
            <Row>
                <Col span={6} offset={9}>

                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            <Input name="email"
                                   prefix={<Icon type="user"
                                 style={{ color: 'rgba(0,0,0,.25)' }} />}
                                   placeholder="Username"
                                   onChange={this.handleChange}/>
                        </FormItem>
                        <FormItem>
                            <Input name="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onChange={this.handleChange}/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>

                            Or <a href="">register now!</a>
                        </FormItem>
                    </Form>

                </Col>
            </Row>
        );
    }

}

export default AuthForm;