import React, {Suspense} from 'react';
import './index.css'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Descriptions, Image, QRCode, Divider, Space  } from 'antd';

export default function AdInfo(){

  const items = [
    // {
    //   // key: '1',
    //   // label: 'Official Receipts',
    //   children: '$60.00',
    // },
    {
      key: '1',
      label: (
        <>
          <Space size={16} wrap>
            <Avatar size='small'  style={{ backgroundColor: '#f56a00' }} icon={<UserOutlined />} />
            <p>Admin 发表于2023-10-16 22:45</p>
          </Space>
        </>
      ),
      children: (
        <>
          <h3> 【专注上海工作室/外卖上门】 </h3>
          <Divider dashed />

          <Space wrap direction="vertical" size="middle" style={{ display: 'flex' }}>
            <p>xxxx</p>
            <p style={{fontFamily:"Times New Roman"}}> 
              广告内容全部属实，切莫担心，我不做一锤子买卖，我没有太多的华丽语言，但我为您留下一份真诚，用我们的专业服务为您精心推荐
            </p> 
            <p style={{fontSize:'30px', color:"red"}}>
              微信:  wx_xxxxx
              <br />
              QQ:  156xxxxxxx
            </p>
            
            <QRCode
                errorLevel="H"
                value="https://www.baidu.com"
                // icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />

            <p style={{fontSize:'20px'}}>
              xxxxxx
            </p>

            <br />
            <br />
            <br />

            <Space align='center ' direction="vertical" size="large" style={{ display: 'flex' }}>
              <Image
              width={300}
              src="./6.png"
              />

              <Image
              width={300}
              src="./7.png"
              />

              <Image
                width={300}
                src="./8.png"
              /> 
            </Space>
            
          </Space>
        
        </>
      ),
    },
  ];
  return(
    <Descriptions size="small" layout='vertical' bordered items={items}>

    </Descriptions>
                
            
    )
};