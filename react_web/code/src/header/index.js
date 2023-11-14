import React, {useEffect} from 'react';
import { Flex, Spin } from 'antd';
import { useNavigate} from 'react-router-dom';

export default function MyHeader(){
    const naviagate = useNavigate();
    const [spinning, setSpinning] = React.useState(false);

    //延时3s
    const showLoader = () => {
        // setSpinning(true);
        setTimeout(() => {
            setSpinning(true);
        }, 3000);
    };

    const onClickAdInfo = () => {
        naviagate("/main/adinfo");
    }

    useEffect(() => {
        if(spinning){
            naviagate("/main/adinfo");
        }
    },[spinning])

    return(
        <Flex  vertical style={{width:'100%', height:'100%'}}>
            {/* <Spin spinning={spinning} fullscreen /> */}
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
    )
};