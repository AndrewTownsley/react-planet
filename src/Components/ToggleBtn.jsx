import styled from 'styled-components';
import React, { useState } from 'react';

    
    const ButtonToggle = styled.button`
    height: 48px;
    border: var(--border);
    background: var(--btn-bg);
    text-align: left;
    padding-left: 0.5rem;
    color: var(--font-lgt-gray);
    font-size: var(--font-med);
    letter-spacing: var(--letter-spc-m);
    margin: 0.5rem 0;
    &: hover: {
        background-color: var(--btn-hover);

    }
    ${({activeBtn}) => 
        activeBtn && 
        `
         background-color: red;
        `
    }
    `

    // background-color: var--(${planet.name})



const ToggleBtn = ({ planet }) => {
    const types = ['overview', 'internal', 'surface'];
    const [activeBtn, setActiveBtn] = useState(types[0])

    return (
        <div className="planet-img-btn-container">
            {
                types.map((type) => 
                    <ButtonToggle
                        activeBtn={activeBtn === type}
                        onClick={()=>setActiveBtn(type)}
                        key={type}
                    >
                        <span className="planet-img-span">{type.toUpperCase()}</span>
                    </ButtonToggle>
                )
            }
        </div>
    )
}

export default ToggleBtn;