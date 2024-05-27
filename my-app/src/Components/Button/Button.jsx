import React from "react";
import styles from "./Button.scss"

export function Button({ btnValue }) {
    return (
        <a className="btn">{btnValue}</a>
    )
}