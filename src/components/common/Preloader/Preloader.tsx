import React from 'react';
import preloader from '../../../assets/preloader.gif';

type PropsType = {
}

let Preloader = (props: PropsType) => {
    return (
    <div style={{backgroundColor: 'red'}}>
        <img src={preloader}/>
    </div>
    )}

export default Preloader