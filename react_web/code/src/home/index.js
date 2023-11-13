// import React, { useState, useEffect } from "react";
// import { Layout, Space } from 'antd';
// import HeaderContent from '../header'

import React from 'react';
import { Breadcrumb, Layout, Image, theme, Col, Row, Carousel, Flex  } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

export default function MyHome(){

    const { Header, Footer, Sider, Content } = Layout;

    const headerStyle = {
        color: '#fff',
        height: 256,
        backgroundColor: '#DCDCDC',
        display:Flex,
        }

    
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // const history = useHistory();
    const naviagate = useNavigate();
    const onClickAdInfo = () => {
            // history.push('/adinfo');
            // <Link to="/adinfo"></Link>
            naviagate("/adinfo");
    }

    return (
    <Layout>
        <Header style={headerStyle} >
        <Flex  vertical style={{width:'100%', height:'100%'}}>
                    <img
                        width={'100%'}
                        height={'25%'}
                        alt={''}
                        onClick={onClickAdInfo}
                        src="./1.png"
                    />
                    <img
                        width={'100%'}
                        height={'25%'}
                        alt={''}
                        src="./2.png"
                    />
                    <img
                        width={'100%'}
                        height={'25%'}
                        alt={''}
                        src="./4.png"
                    />
                    <img
                        width={'100%'}
                        height={'25%'}
                        alt={''}
                        src="./5.png"
                    />
     
      </Flex>


       
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>
                

            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Design ©2023 Created by CoolYang</Footer>
    </Layout>
    );

}