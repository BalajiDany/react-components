import React from 'react';
import { Form, Checkbox } from 'antd';

const RememberMeField = (props) => {

    const { getFieldDecorator } = props.form;
    const field = (
        <Checkbox style={{ float: 'left' }}>Remember me</Checkbox>
    )

    return (
        <Form.Item>
            {
                getFieldDecorator("remember", {
                    valuePropName: "checked",
                    initialValue: true
                })(field)
            }
            {props.children}
        </Form.Item>
    );
}

export default RememberMeField;