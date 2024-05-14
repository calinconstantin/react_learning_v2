import React from "react";
import styles from './Menu.scss';
import { Button } from "../Button/Button";


export function Menu() {
    return (
        <>
            <div className='menu'> <ul>
                <li><Button btnValue={'BtnMenu1'}/></li>
                <li><Button btnValue={'BtnMenu2'}/></li>
                <li><Button btnValue={'BtnMenu3'}/></li>
                <li><Button btnValue={'BtnMenu4'}/></li>
                <li><Button btnValue={'BtnMenu5'}/></li>
                <li><Button btnValue={'BtnMenu6'}/></li>
            </ul></div>
        </>
    )
}