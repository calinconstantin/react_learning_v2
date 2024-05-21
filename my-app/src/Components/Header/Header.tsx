import React from "react";
import './Header.scss';
import { Dropdown } from '../Dropdown/Dropdown';
import { DROPDOWN_HEADER_CURRENCY_ELEM, DROPDOWN_HEADER_LANG_ELEM, HEADER_LINKS, USER, HEADER_MENU } from '../../Utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faPhone, faShoppingCart, faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { InputSearch } from "../../InputSearch/InputSearch";

export function Header() {
    return (
        <div id='header'>
            <div className="header-top">

                <div className="header-top-container">
                    <div className="header-top-dropdowns">
                        <Dropdown arrayElements={DROPDOWN_HEADER_LANG_ELEM} />
                        <Dropdown arrayElements={DROPDOWN_HEADER_CURRENCY_ELEM} />
                    </div>
                    <div className="address">
                        <FontAwesomeIcon icon={faMapMarker} style={{ marginRight: '5px' }} />
                        <a>{USER.location}</a>
                    </div>
                    <div className="header-top-links">
                        <ul>
                            {HEADER_LINKS.map((link, index) => (
                                <li key={index} >
                                    <a title={link.title} href={link.href}>
                                        <FontAwesomeIcon icon={link.icon} style={{ marginRight: '5px' }} />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className="header-middle-left">
                    <FontAwesomeIcon className="header-middle-icon" size="2x" icon={faPhone} style={{}} />
                    <span style={{ paddingTop: '9px' }}>
                        CUSTOMER SUPPORT
                        <br></br>
                        Call: 01234 123 123
                    </span>
                </div>
                <div className="header-middle-right">
                    <FontAwesomeIcon className="header-middle-icon" size="2x" icon={faShoppingCart} style={{ padding: '10px 30px' }} />
                    <span style={{ paddingTop: '9px' }}>
                        SHOPPING CART
                        <br></br>
                        Item - $0.00
                    </span>
                </div>
            </div>

            <div className="header-bottom">
                <div className="header-top-links">
                    <ul>
                        {HEADER_MENU.map((element, index) => (
                            <li key={index} >
                                <a>
                                    {element}
                                    {HEADER_MENU.length-1 > index ? (<FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: '5px' }} />) : (<></>)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header-bottom-inputSearch">
                    <InputSearch/>
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
            </div>
        </div>
    )
}