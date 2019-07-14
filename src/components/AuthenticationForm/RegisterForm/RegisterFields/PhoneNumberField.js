import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const PhoneNumberField = (props) => {

    const fieldName = 'Phone Number';
    const { getFieldDecorator, getFieldError, isFieldTouched } = props.form;
    const internalError = isFieldTouched('phoneNumber') && getFieldError('phoneNumber');
    
    // Proxy Data
    const defaultCountryCode = '91';
    const countryCodes = [
        '91'
    ];
    
    const prefixSelector = getFieldDecorator('prefix', { initialValue: defaultCountryCode })(
        <Select style={{ width: 70 }}>
            {countryCodes.map((code) => <Option value={code}>{`+${code}`}</Option>)}
        </Select>,
    );
    const field = (
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder={fieldName}/>
    );

    return (
        <Form.Item hasFeedback validateStatus={props.error || internalError ? 'error' : ''}>
            {
                getFieldDecorator('phoneNumber', {
                    rules: [
                        {
                            required: true,
                            message: `${fieldName} is required.`
                        }
                    ],
                    ...(props.validation || [])
                })(field)}
        </Form.Item>
    );
};

export default PhoneNumberField;