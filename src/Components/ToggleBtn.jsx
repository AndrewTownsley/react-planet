import styled from 'styled-components';
import React, { useState } from 'react';


    const colors = {
        mercury: "hsla(194, 48%, 49%, 1)",
        venus: "hsla(33, 82%, 61%, 1)",
        earth: "rgb(163, 120, 231)",
        mars: "hsla(10, 63%, 51%, 1)",
        jupiter: "hsla(2, 68%, 53%, 1)",
        saturn: "hsla(17, 73%, 46%, 1)",
        uranus: "hsla(169, 73%, 44%, 1)",
        neptune: "hsla(222, 87%, 56%, 1)"
    }
    
    const ButtonToggle = styled.button`
    height: 48px;
    border: var(--border);
    background: var(--btn-bg);
    text-align: left;
    padding-left: 0.5rem;
    color: var(--font-white);
    font-size: var(--font-med);
    letter-spacing: var(--letter-spc-m);
    margin: 0.5rem 0;
    &: hover {
        background-color: var(--btn-hover);
    }
    ${({activeBtn}) => activeBtn && 
    `background-color: var(--btn-hover);
    `}
    `






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