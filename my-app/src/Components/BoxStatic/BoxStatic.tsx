import React, { useEffect, useState } from "react";
import styles from './BoxStatic.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faUser, faSitemap, faCheck, faAngleRight, faHeart, faLocation, faEnvelope, faPhone, faShower, faFootball, faCocktail, faBookQuran, faQuestion, faDiceD20, faPassport, faUndo, faTruck, faGift, faHeadphones } from '@fortawesome/free-solid-svg-icons';


type Element = {
  icon: IconDefinition,
  header: string,
  context: string
}

type Props = {
  elems: Element[];
}

export const BoxStatic = ({ elems }: Props) => {
  const [state, setState] = useState(
    [
      { icon: faUndo, header: "MONEY BACK GUARANTEE", context: "Lorem ipsum dolor sit amet", value: 0 },
      { icon: faTruck, header: "FREE WORLDWIDE SHIPPING", context: "Lorem ipsum dolor sit amet", value: 1 },
      { icon: faGift, header: "50 off", context: "Lorem ipsum dolor sit amet", value: 2 },
      { icon: faHeadphones, header: "CUSTOMER SERVICE", context: "Lorem ipsum dolor sit amet", value: 3 },
    ]
  )

  const data =
    [
      { icon: faUndo, header: "MONEY BACK GUARANTEE", context: "Lorem ipsum dolor sit amet", value: 0 },
      { icon: faTruck, header: "FREE WORLDWIDE SHIPPING", context: "Lorem ipsum dolor sit amet", value: 1 },
      { icon: faGift, header: "50 off", context: "Lorem ipsum dolor sit amet", value: 2 },
      { icon: faHeadphones, header: "CUSTOMER SERVICE", context: "Lorem ipsum dolor sit amet", value: 3 },
    ];


  const myFunc = () => {


  }

  myFunc();


  console.log("@@ state", state);


  return (
    <ul className="box-static">
      {elems.map((elem, index) => (
        <li key={index}>
          <FontAwesomeIcon icon={elem.icon} />
          <div className="box-static-text" >
            <a>{elem.header}</a>
            <span style={{ background: 'red' }}> {elem.context}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}