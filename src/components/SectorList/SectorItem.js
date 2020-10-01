import React, {useState} from 'react';

// Component with State
const SectorItem = ({sector, number}) => {
    const [isToolTipShowing, setToolTipShowing] = useState(false);
    const [isDirectionSwitched, setDirectionSwitched] = useState(false);
    const toggleToolTip = (newValue) => {
        if (number % 3 === 0) {
            setDirectionSwitched(true);
        } else {
            setDirectionSwitched(false);
        }
        setToolTipShowing(newValue);
    }

    return (
        <div className="sectors-list-item"
             onMouseEnter={() => toggleToolTip(true)}
             onMouseLeave={() => toggleToolTip(false)}
             onTouchStart={() => toggleToolTip(!isToolTipShowing)}
             style={{background: `url(${sector.imgUrl}) center no-repeat`, backgroundSize: 'cover'}} >
        <p className={`sectors-list-item-name ${
                    isToolTipShowing 
                    ? "sectors-list-item-name-switched" 
                    : ""
        }`}> {sector.name}</p>
        { 
            isToolTipShowing && <p className={`sectors-list-item-tooltip ${
                isDirectionSwitched 
                ? "sectors-list-item-tooltip-switched"
                : ""
            }`}> {sector.desc}</p>
        }
    </div>
	)
}

export default SectorItem;