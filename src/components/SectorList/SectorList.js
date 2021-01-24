import React from 'react';
import SectorItem from './SectorItem';
import './SectorList.scss';

const SectorList = ({title, subtitle, items}) =>{
    const itemsList = items.map((sector, i) => <SectorItem sector={sector} key={sector.id} number={i+1}/>)
    return (
        <section className="sectors container" id="politics">  
            <h2 className="sectors-title">{title}</h2>
            <p className="sectors-subtitle">{subtitle}</p>
            <div className="sectors-list">
                {itemsList}
            </div>
        </section>
    );
}

export default SectorList;