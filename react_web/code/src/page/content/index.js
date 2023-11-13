import React, { useState }  from 'react';
import { Descriptions, theme, Avatar, List, Space  } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import UserInfo from '../userinfo';


export default function MyContent(){
    const listData = Array.from({
        length: 3,
    }).map((_, i) => ({
        href: '/userinfo',
        title: `ad design part ${i + 1}`,
        avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
        description:
          'Ad Design, a design language for background applications',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      }));

      const IconText = ({ icon, text }) => (
        <>
          {React.createElement(icon, {
            style: {
              marginRight: 8,
            },
          })}
          {text}
        </>
      );

    const items = [
        {
          key: '1',
          label: 'UserName',
          children: 'Zhou Maomao',
        },
        {
          key: '2',
          label: 'Telephone',
          children: '1810000000',
        },
        {
          key: '3',
          label: 'Live',
          children: 'Hangzhou, Zhejiang',
        },
        {
          key: '4',
          label: 'Remark',
          children: 'empty',
        },
        {
          key: '5',
          label: 'Address',
          children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
        },
      ];

    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return(
        <div style={{ padding: 12, minHeight: 1024, background: colorBgContainer }}>
            <Descriptions title="上海工作室外卖 微信: wx_xxx QQ: qq_xxx" items={items} />
           
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
                }}
                dataSource={listData}
                footer={
                <div>
                    <b>ad design</b> footer part
                </div>
                }
                renderItem={(item) => (
                <List.Item
                    key={item.title}
                    actions={[
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                    <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                    }
                >
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                    />
                    {item.content}
                </List.Item>
                )}
            />
        </div>
    )
};