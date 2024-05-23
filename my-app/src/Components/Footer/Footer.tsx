import React from "react";
import './Footer.scss';
import { FOOTER, FOOTER_2 } from '../../Utils/constants'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="footer-container">
                    <div className="footer-container-col1">
                        <h3>{FOOTER.col1.header}</h3>
                        <div className="gradient-line"></div>
                        <ul>
                            <li>
                                <FontAwesomeIcon size="1x" icon={FOOTER.col1.icon1} className="footer-container-col1-icon" />
                                <div>
                                    <span>{FOOTER.col1.addressField}</span>
                                    {FOOTER.col1.addressValue}
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon size="1x" icon={FOOTER.col1.icon2} className="footer-container-col1-icon" />
                                <div>
                                    <span>{FOOTER.col1.emailField}</span>
                                    {FOOTER.col1.emailValue}
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon size="1x" icon={FOOTER.col1.icon3} className="footer-container-col1-icon" />
                                <div>
                                    <span>{FOOTER.col1.telephoneField}</span>
                                    {FOOTER.col1.telephoneValue}
                                    <br></br>
                                    <span>{FOOTER.col1.faxField}</span>
                                    {FOOTER.col1.faxValue}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-container-col2">
                        <h3>{FOOTER.col2.header}</h3>
                        <ul>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col2.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col2.valu1}
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col2.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col2.value2}
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col2.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col2.value3}
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col2.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col2.value4}
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col2.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col2.value5}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-container-col3">
                        <h3>{FOOTER.col3.header}</h3>
                        <ul>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col3.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col3.valu1}
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col3.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col3.value2}
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col3.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col3.value3}
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col3.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col3.value4}
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col3.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col3.value5}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-container-col4">
                        <h3>{FOOTER.col4.header}</h3>
                        <ul>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col4.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col4.valu1}
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col4.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col4.value2}
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col4.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col4.value3}
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col4.icon} className="footer-container-arrowleft"/>
                                    {FOOTER.col4.value4}
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon icon={FOOTER.col4.icon} className="footer-container-arrowleft"/>
                                    <FontAwesomeIcon icon={FOOTER.col4.value5Icon} className="footer-container-heart"/>
                                    {FOOTER.col4.value5}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-container-col5">
                        <h3>{FOOTER.col5.header}</h3>
                        <ul>
                            <li>
                                <a>
                                    {FOOTER.col5.header}
                                </a>
                            </li>
                            <li>
                                <a>
                                    {FOOTER.col5.placeholderValue}
                                </a>
                            </li>
                            <li>
                                <a>
                                    {FOOTER.col5.btnValue}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-container">
                        <span>{FOOTER_2.text}</span>
                        <div className="footer-bottom-container-icons">
                        {FOOTER_2.icons.map((icon) => (
                            <FontAwesomeIcon icon={icon} className="footer-bottom-container-icon"/>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}