import React from "react";
import './Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../constants/constants";


export function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="footer-container">
                    <div className="footer-container-col1">
                        <h3>{data.FOOTER.col1.header}</h3>
                        <div className="gradient-line"></div>
                        <ul>
                            {data.FOOTER.col1.elements.map((elem, index) => (
                                <li key={index}>
                                    <FontAwesomeIcon size="1x" icon={elem.icon} className="footer-container-col1-icon" />
                                    <div>
                                        <span>{elem.subTitle}</span>
                                        {elem.text}
                                        {elem.subTitle2 ? <span><br></br>{elem.subTitle2}</span> : <></>}
                                        {elem.text2 ? elem.text2 : <></>}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-container-col2">
                        <h3>{data.FOOTER.col2.header}</h3>
                        <ul>
                            {data.FOOTER.col2.values.map((value, index) => (
                                <li key={index}>
                                    <a>
                                        <FontAwesomeIcon icon={data.FOOTER.col2.icon} className="footer-container-arrowleft" />
                                        {value}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-container-col3">
                        <h3>{data.FOOTER.col3.header}</h3>
                        <ul>
                            {data.FOOTER.col3.values.map((value, index) => (
                                <li key={index}>
                                    <a>
                                        <FontAwesomeIcon icon={data.FOOTER.col3.icon} className="footer-container-arrowleft" />
                                        {value}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-container-col4">
                        <h3>{data.FOOTER.col4.header}</h3>
                        <ul>
                            {data.FOOTER.col4.values.map((value, index) => (
                                <li key={index}>
                                    <a>
                                        <FontAwesomeIcon icon={data.FOOTER.col4.icon} className="footer-container-arrowleft" />
                                        {value.icon ? <FontAwesomeIcon icon={value.icon} className="footer-container-arrowleft" /> : <></>}
                                        {value.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-container-col5">
                        <h3>{data.FOOTER.col5.header}</h3>
                        <ul>
                            <li>
                                <a>
                                    {data.FOOTER.col5.header}
                                </a>
                            </li>
                            <li>
                                <a>
                                    {data.FOOTER.col5.placeholderValue}
                                </a>
                            </li>
                            <li>
                                <a>
                                    {data.FOOTER.col5.btnValue}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-container">
                        <span>{data.FOOTER.bottomText}</span>
                        <div className="footer-bottom-container-icons">
                            {data.FOOTER.bottomIcon.map((icon, index) => (
                                <FontAwesomeIcon key={index} icon={icon} className="footer-bottom-container-icon" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}