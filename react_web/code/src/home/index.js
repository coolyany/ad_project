// import React, { useState, useEffect } from "react";
// import { Layout, Space } from 'antd';
// import HeaderContent from '../header'

import React from 'react';
import { Breadcrumb, Layout, Image, theme, Col, Row } from 'antd';

const { Header, Content, Footer } = Layout;

export default function MyHome(){

    const { Header, Footer, Sider, Content } = Layout;
    const headerStyle_1 = {
        textAlign: 'center',
        color: '#fff',
        height: 272,
        paddingInline: 50,
        lineHeight: '64px',
        backgroundColor: '#DCDCDC',
        // background:`url("./1.png")`,
    };
    // const headerStyle_2 = {
    //     textAlign: 'center',
    //     color: '#fff',
    //     height: 68,
    //     paddingInline: 50,
    //     lineHeight: '64px',
    //     // backgroundColor: '#7dbcea',
    //     background:`url("./2.png")`,
    // };
    // const headerStyle_3 = {
    //     textAlign: 'center',
    //     color: '#fff',
    //     height: 68,
    //     paddingInline: 50,
    //     lineHeight: '64px',
    //     // backgroundColor: '#7dbcea',
    //     background:`url("./3.png")`,
    // };
    const contentStyle = {
        textAlign: 'center',
        minHeight: 600,
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#108ee9',
    };

    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#7dbaaa',
    };

    const imgStyle = {
        width: '100%',
        height: '100%',
        // objectFit:cover,
    };

    const {
        token: { colorBgContainer },
      } = theme.useToken();

    return (
    <Layout>
        <Header style={headerStyle_1} >
            <Row>
                <Col span={24}>
                    <img
                        width={'100%'}
                        height={'30%'}
                        src="./1.png"
                    />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <img
                        width={'100%'}
                        height={'30%'}
                        src="./2.png"
                    />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <img
                        width={'100%'}
                        height={'30%'}
                        src="./3.png"
                    />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <img
                        width={'100%'}
                        height={'30%'}
                        src="./4.png"
                    />
                </Col>
            </Row>
        </Header>
        {/* <Header style={headerStyle_2} />
        <Header style={headerStyle_3} /> */}
        <Content className="site-layout" style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                {/* <Breadcrumb.Item>
                </Breadcrumb.Item> */}
                {/* <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item> */}
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>
                

            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Design ©2023 Created by CoolYang</Footer>
    </Layout>
    );

}