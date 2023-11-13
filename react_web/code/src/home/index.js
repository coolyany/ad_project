// import React, { useState, useEffect } from "react";
// import { Layout, Space } from 'antd';
// import HeaderContent from '../header'

import React, {useState} from 'react';
import { Breadcrumb, Layout, Flex } from 'antd';
import { useNavigate} from 'react-router-dom';
import MyContent from '../page/content'
// const { Header, Content, Footer } = Layout;

export default function MyHome(){

    const { Header, Footer, Sider, Content } = Layout;

    const headerStyle = {
        color: '#fff',
        height: 512,
        backgroundColor: '#DCDCDC',
        display:Flex,
        }
    
    // const history = useHistory();
    const naviagate = useNavigate();
    const onClickAdInfo = () => {
            // history.push('/adinfo');
            // <Link to="/adinfo"></Link>
            naviagate("/adinfo");
    }

    

    // const content = () => {
        
    //     return(
    //         <Descriptions title="User Info" items={items} />
    //     )
    // }
    // const [ContentPage, setConetentPage] = useState();


    // const onClickedSetContent = () => {
        // setConetentPage(content);
    // }
    return (
    <Layout>
        <Header style={headerStyle} >
        <Flex  vertical style={{width:'100%', height:'100%'}}>
            <img
                width={'100%'}
                height={'20%'}
                style={{cursor: "pointer"}}
                alt={''}
                onClick={onClickAdInfo}
                src="./1.png"
            />
            <img
                width={'100%'}
                height={'20%'}
                alt={''}
                src="./2.png"
            />
                    
            <img
                width={'100%'}
                height={'20%'}
                alt={''}
                src="./3.png"
            />
            <img
                width={'100%'}
                height={'20%'}
                alt={''}
                src="./4.png"
            />
            <img
                width={'100%'}
                height={'20%'}
                alt={''}
                src="./5.png"
            />
      </Flex>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>info1</Breadcrumb.Item>
                <Breadcrumb.Item>info2</Breadcrumb.Item>
                <Breadcrumb.Item>info3</Breadcrumb.Item>

            </Breadcrumb>
            <MyContent />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Design ©2023 Created by CoolYang</Footer>
    </Layout>
    );

}