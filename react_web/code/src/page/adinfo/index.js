import React from 'react';
import './index.css'
import logo from "../../res/logo.png"
import { Descriptions , Image} from 'antd';


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

export default function AdInfo(){

    return(
        <div>
            <div>
                <Descriptions title="User Info" items={items} />

            </div>
            <div>
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                    <Image width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                    <Image
                        width={200}
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    />
                </Image.PreviewGroup>

            </div>
            <div>
                <Image.PreviewGroup
                    items={[
                        'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                        'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                        'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                    ]}
                >
                    <Image
                        width={200}
                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                    />
                </Image.PreviewGroup>
            </div>


        </div>

        // <div className={"layout"}>

        //     <drv className={"head"}>
        //         <img src={logo} alt="" className={"logo"} />

        //         <drv
        //             className={"homePageItem"}
        //         >
        //            <drv> 
                     
        //            </drv>

        //         </drv>

        //         <p>
        //             2222
        //         </p>
        //         <p>
        //             333
        //         </p>
        //         <p>
        //             4444
        //         </p>
        //     </drv>
        //     <drv>
        //         //todo  这是内容
        //     </drv>
        // </div>
    )
};