import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends Component {
    state = {
        current: 'mail',
    };
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="mail">
                    <Link to='/login'>
                        <Icon type="mail" />Login
                    </Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Link to='/signup'>
                        <Icon type="appstore" />Sign Up
                    </Link>
                </Menu.Item>
                <SubMenu title={<span><Icon type="setting" />David Zavala</span>}>
                    <MenuItemGroup title="Donde ir">
                        <Menu.Item key="setting:1">Perfil</Menu.Item>
                        <Menu.Item key="setting:2">Logout</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
        );
    }
}

export default Navbar;