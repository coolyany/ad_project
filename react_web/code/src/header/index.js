import React, { useState, useEffect } from "react";
import { Image } from 'antd';

export default function HeaderContent(props){

    
    return(
        <div>
            <img src={props.url} alt="logo"/>
        </div>
    )
}