import React from "react";
import './Dropdown.scss';

type Props = {
    title: string;
    arrayElements: string[];
}

export const Dropdown = ({ title, arrayElements }: Props) => {
    return (
        <div className='dropdown'>
            <div className="dropdown-title">{title}</div>
            <div className="dropdown-content">
                <ul>
                    {arrayElements.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

