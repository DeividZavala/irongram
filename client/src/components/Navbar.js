import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
import {logout} from "../Service";
import {message} from "antd/lib/index";
import {withRouter} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends Component {
    state = {
        current: 'mail',
        user: {},
        isLoggedIn: false
    };
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    handleLogout = () => {
      logout()
          .then(res=>{
              this.setState({isLoggedIn:false, user:{}});
              this.props.history.push("/login");
              message.success(res.message);
          })
    };

    componentWillMount(){
        if(!localStorage.getItem("user")) return this.props.history.push('/login');
        let user = JSON.parse(localStorage.getItem("user"));
        this.setState({user,isLoggedIn:true})
    }

    render() {
        const {user,isLoggedIn} = this.state;
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="mail" style={ { display: !isLoggedIn ? 'block' : 'none' } }>
                    <Link to='/login'>
                        <Icon type="mail" />Login
                    </Link>
                </Menu.Item>
                <Menu.Item key="app" style={ { display: !isLoggedIn ? 'block' : 'none' } }>
                    <Link to='/signup'>
                        <Icon type="appstore" />Sign Up
                    </Link>
                </Menu.Item>
                <SubMenu style={ { display: isLoggedIn ? 'block' : 'none' } } title={<span><Icon type="setting" />{user.name}</span>}>
                    <MenuItemGroup title="Donde ir">
                        <Menu.Item key="setting:1">
                            <Link to='/profile'>
                                Perfil
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="setting:2" onClick={this.handleLogout} >Logout</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
        );
    }
}

export default withRouter(Navbar);