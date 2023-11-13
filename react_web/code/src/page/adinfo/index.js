import React from 'react';
import './index.css'
import logo from "../../res/logo.png"
import { Flex } from 'antd';
import MyHeader from '../../header'


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

  const headerStyle = {
    color: '#fff',
    height: 512,
    backgroundColor: '#DCDCDC',
    display:Flex,
    }

export default function AdInfo(){

    return(
            // <Header style={headerStyle} >
                // <MyHeader />
            // </Header>
            <div>
                
            </div>
    )
};