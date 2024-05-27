import React, { useState, useEffect, useRef } from "react";
import './Dropdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
    arrayElements: string[];
}

export const Dropdown: React.FC<Props> = ({ arrayElements }) => {
    const [selectedTitle, setSelectedTitle] = useState<string>(arrayElements[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropDown = (): void => {
        setIsOpen(!isOpen);
    }

    const handleSelect = (element: string): void => {
        setSelectedTitle(element);
        setIsOpen(false);
    }

    const handleClickOutside = (event: MouseEvent): void => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div className={`dropdown-title ${isOpen ? `open` : ``}`} onClick={toggleDropDown}>
                {selectedTitle}
                <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: '5px' }} />
            </div>
            {isOpen ? (
                <div className="dropdown-content">
                    <ul>
                        {arrayElements.map((element, index) => (
                            <li key={index} onClick={() => handleSelect(element)}>
                                {element}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}