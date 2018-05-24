import React, {Component} from 'react';
import {PostCard} from '../post-card';
import {getPosts} from "../../Service";
import {Row, Col} from 'antd';

class FeedContainer extends Component{

    state = {
        posts: []
    };

    componentWillMount(){

        if(!localStorage.getItem("user")) return this.props.history.push('/login');

        getPosts()
            .then(posts=>{
                this.setState({posts});
            })
            .catch(e=>console.error(e));
    }

    render(){
        return(
            <div>
                <Row>
                    <Col span={6}>
                        {this.state.posts.map(post=>{
                            return (
                                <PostCard {...post} key={post._id}/>
                            )
                        })}
                    </Col>
                </Row>
            </div>
        )
    }

}

export default FeedContainer;