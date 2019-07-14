import React from 'react';
import { Spin, Icon } from 'antd';

const LazyRender = (props) => {
 
    const loderStyle = {
        position:'absolute',
        margin: '12px'
    }
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    return (
        <div className={props.className}>
            <div style={loderStyle} hidden={props.render}>
                <Spin indicator={antIcon} />
            </div>
            {props.render ? props.children : null}
        </div>
    )
};

export default LazyRender;