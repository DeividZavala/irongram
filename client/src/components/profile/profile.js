import React, {Component} from 'react';
import {Row, Col, Form, Input, Button, Icon,message} from 'antd';
import './profile.css';
import {addPost} from "../../Service";
const FormItem = Form.Item;
const { TextArea } = Input;

class Profile extends Component{

    state = {
        user: {},
        formLayout: 'vertical',
        post: {}
    };
    

    componentWillMount(){

        if(!localStorage.getItem("user")) return this.props.history.push('/login');
        let user = JSON.parse(localStorage.getItem("user"));
        this.setState({user})

    }

    handleChange = (e) => {
        const {post} = this.state;
        const field = e.target.name;
        post[field] = e.target.value;
        this.setState({post});
    };

    loadFile = (e) => {
        const {post} = this.state;
        post["picture"] = e.target.files[0];
        this.setState({post})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        addPost(this.state.post)
            .then(post=>{
                message.success('Post Creado');
            })
    };

    render(){
        const { formLayout, user } = this.state;
        return(

            <div>
                
                <Row type="flex">
                    <Col span={6}>
                        <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="" className="profile-pic"/>
                    </Col>
                    <Col span={8}>
                        <h2>{user.name}</h2>

                        <p>Nuevo post</p>

                        <Form layout={formLayout} onSubmit={this.handleSubmit}>

                            <FormItem
                                label="Sube tu foto"
                            >
                                <input type="file" onChange={this.loadFile}/>
                            </FormItem>
                            <FormItem
                            label="Description"
                            >
                                <TextArea rows={6} onChange={this.handleChange} name="description"/>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </FormItem>
                        </Form>

                    </Col>
                </Row>

            </div>
        )
    }

}

export default Profile;