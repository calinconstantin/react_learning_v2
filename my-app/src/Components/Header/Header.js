import React from "react";
import styles from './Header.scss';
import { Dropdown } from '../Dropdown/Dropdown'


export function Header() {
    return (
        <div className='header'>
            <div className="container">
                <Dropdown title="My Dropdown" arrayElements={['Option1', 'Option2', 'Option3']} />
                <Dropdown title="My Dropdown with a very long text" arrayElements={['Option1', 'Option2', 'Option3']} />
                <div className="image-logo"></div>
                <div>The future of something</div>
            </div>
        </div>
    )
}