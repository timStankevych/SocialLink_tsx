import React from 'react';
import cl from './FormsControl.module.css'

// @ts-ignore
export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error ? cl.textareaError : ''

    return (
        <div >
            <div className={hasError}>
                <textarea className={hasError} {...input} {...props}/>
            </div>
            {meta.error &&  <span className={cl.error}>'some error'</span>}
        </div>
    );

};
