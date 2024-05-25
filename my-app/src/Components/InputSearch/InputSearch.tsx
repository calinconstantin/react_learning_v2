import React from "react";
import "./InputSearch.scss";

type Props = {
    placeholder: string;
}

export const InputSearch = ({ placeholder } : Props) => {

    return (
        <input className="input-search" placeholder={placeholder}></input>
    )
}