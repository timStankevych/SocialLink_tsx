import React from 'react';
import cl from './FormsControl.module.css';

// @ts-ignore
const FormControl = ({meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div>
            <div className={cl.formControl + ' ' + (hasError ? cl.error : '')}>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

// @ts-ignore
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>;
};

// @ts-ignore
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>;
};