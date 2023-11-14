import React, {Suspense, useState, useEffect} from 'react';
import { Breadcrumb, Layout, Flex } from 'antd';
import { Outlet, useLocation, useNavigate} from 'react-router-dom';
import MyContent from '../page/content'
import MyHeader from '../header'
// const { Header, Content, Footer } = Layout;
import { RouterPath } from "../router";


export default function MyHome(){

    const { Header, Footer, Content } = Layout;
    const naviagate = useNavigate();

    const headerStyle = {
        color: '#fff',
        height: 512,
        backgroundColor: '#DCDCDC',
        display:Flex,
    }

    return (
    <Layout>
        <Header style={headerStyle} >
            <MyHeader />
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>info1</Breadcrumb.Item>
                <Breadcrumb.Item>info2</Breadcrumb.Item>
                <Breadcrumb.Item>info3</Breadcrumb.Item>
            </Breadcrumb>

            <Suspense fallback={<div>loding</div>}>
                <Outlet />
            </Suspense>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Design ©2023 Created by CoolYang</Footer>
    </Layout>
    );

}