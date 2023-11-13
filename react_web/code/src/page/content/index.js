import React, { useState }  from 'react';
import { Descriptions, theme, Avatar, List, QRCode  } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import UserInfo from '../userinfo';


export default function MyContent(){
    const listData = Array.from({
        length: 3,
    }).map((_, i) => ({
        href: '/userinfo',
        title: `people ${i + 1}`,
        avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
        description:
          `Oil pressure in various districts of Shanghai
          Intimate service, safe and reliable
          Rest assured consumption, integrity first`,
        content:
        `If you can't handle it, please don't disturb
        Shanghai regional oil pressure SPA
        Jiangsu and Zhejiang clubs can also be arranged
        【 Studio Introduction 】
        All the studios of the beauty of attendance are high-grade residential areas, or high-grade apartments, regular disinfection, clean, sanitary, no registration, very convenient!
        
        【 Service 】 : All the beautiful women in the studio are full service! Only you can't think of, nothing we can't do, no need to get a room! No registration required! Safe, reliable, convenient, most girls can come to the door, can package night.
        【 Various types of beauty 】
        After 00 just went to the sea pure student girls, boutique stewardesses part-time, top-line car models, Tiktok network red part-time, nurses, white-collar workers, good family part-time, and so on... Everything, welcome the boss to come to consult and make an appointment.
        【 Studio beauty reservation process 】
        We will provide exclusive photo album links, (with services, photos, videos, seats) let you choose the type you like!
        After confirming the beauty of the offer, I will confirm her studio address again, and then set the specific time, and pay the reservation money [the first appointment, must pay 100 reservation money, old customers do not need to] to confirm the appointment for you.
        You according to the appointment time, to the United States paper studio, see the girl himself, satisfied with the payment to start, dissatisfied package return
        As long as you need it, it's important to be reliable
        Don't hesitate to contact me now!`
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
                    // <img
                    //     width={272}
                    //     alt="logo"
                    //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    // />
                        <QRCode
                            errorLevel="H"
                            value="shpincha18.com"
                            // icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
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

            <Descriptions title="xxx" items={items} />
          </div>
    )
};