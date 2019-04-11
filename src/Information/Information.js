import React from 'react';
import v4 from 'uuid'
import './Information.css'

const Information=({mode='',name='', stations=[]})=>{
    return(
        <section className='Information'>
            <div className='Information__sort-info'>
                <div
                className={`Information__transport-icon
                                Information__transport-icon_mode_${mode}`}>
                </div>
                <div >
                    <h2 className='Information__h2'>name:{name}</h2>
                    <h2 className='Information__h2'>mode:{mode}</h2>
                </div>
            </div>
            <h2 className='Information__roat'>Roat:</h2>
            <ul>
                {stations.map((station)=><li className='Information_li' key={v4()}>{station}</li>)}
            </ul>
        </section>
    )
};

export default Information;