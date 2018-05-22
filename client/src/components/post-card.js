import React from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

export const PostCard = ({name,user,picture, description}) => {
    return (
        <Card
            style={{ width: 300 }}
            cover={<img alt="example" src={picture ? picture : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
            <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={user ? user.name: "No disponible"}
                description={description}
            />
        </Card>
    )
};