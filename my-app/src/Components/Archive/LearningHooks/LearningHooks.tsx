import React, { useEffect, createContext, useContext, useRef } from "react";
import styles from "./LearningHooks.scss";
import { useState } from "react";

export const LearningHooks = () => {
    const [count, setCount] = useState(1);
    const [color, setColor] = useState('lightgreen');
    const counter = useRef(0);
    const counterino = { current: 0 };

    function increase() {
        counter.current = counter.current + 1;
        counterino.current = counterino.current + 1;
        console.warn(`Counter: ${counter.current}`);
        console.warn(`Counterino: ${counterino.current}`);
        setCount(count + 1);
    }

    useEffect(() => {
        console.warn('Color got changed to: ' + color);
    }, [color]);

    useEffect(() => {
        console.warn('Count:' + count)
    }, [count]);

    return (
        <button style={{ backgroundColor: color }} onClick={increase} >
            {count}
        </button >
    )
}


const TitleContext = createContext<string>('');

export const Component1 = () => {
    const [title, setTitle] = useState('Very cool title!');

    return (
        <TitleContext.Provider value={title}>
            <br></br>
            {title}
            <Component2 />
        </TitleContext.Provider>
    )
}

type Props = {
    title: string;
}

export const Component2 = () => {
    const title = useContext(TitleContext);
    return (
        <>
            <br></br>
            {title}
            <Component3 />
        </>
    )
}

export const Component3 = () => {
    const title = useContext(TitleContext);
    return (

        <>
            <br></br>{title}
        </>
    )
}