import React from "react";

export const LanguageSwitcher = ({ onChangeLanguage }) => {
    return (
        <select onChange={(e) => onChangeLanguage(e.target.ariaValueMax)}>
            <option value="en"> English </option>
            <option value="fr"> Francais </option>
        </select>
    );
};