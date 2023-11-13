import React from 'react';
import { Flex } from 'antd';
import { useNavigate} from 'react-router-dom';

export default function MyHeader(){
    const naviagate = useNavigate();

    const onClickAdInfo = () => {
        // history.push('/adinfo');
        // <Link to="/adinfo"></Link>
        naviagate("/home/adinfo");
    }

    return(
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
    )
};