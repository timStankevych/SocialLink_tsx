import React from 'react';
import preloader from '../../../assets/preloader.gif';

type PropsType = {
}

let Preloader = (props: PropsType) => {
    return (
    <div style={{backgroundColor: 'white', border: '1px solid grey'}}>
        <img src={preloader}/>
    </div>
    )}

export default Preloader