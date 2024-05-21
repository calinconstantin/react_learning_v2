import React from "react";
import "./InputSearch.scss";
import {INPUT_SEARCH_PLACEHOLDER} from "../Utils/constants"

export const InputSearch = () => {
    return (
        <input className="input-search" placeholder={INPUT_SEARCH_PLACEHOLDER}></input>
    )
}