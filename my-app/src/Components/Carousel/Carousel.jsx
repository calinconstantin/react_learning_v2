import React from "react";
import styles from "./Carousel.scss"
import { useState } from "react";

export function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activate = (index) => {
        setActiveIndex(index);
    }
    return (
        <div className="carousel">
            <div className="btn--carousel">
                <button onClick={() => activate(0)}>1</button>
                <button onClick={() => activate(1)}>2</button>
                <button onClick={() => activate(2)}>3</button>
                <button onClick={() => activate(3)}>4</button>
            </div>
            <img className={activeIndex === 0 ? 'active' : 'hidden'} src="https://images.unsplash.com/photo-1606140997117-cc3f4f28ba88?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JleSUyMG1vdW50YWlufGVufDB8fDB8fHww" alt="Image 1"></img>
            <img className={activeIndex === 1 ? 'active' : 'hidden'} src="https://images.pexels.com/photos/991422/pexels-photo-991422.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200" alt="Image 2"></img>
            <img className={activeIndex === 2 ? 'active' : 'hidden'} src="https://whc.unesco.org/uploads/thumbs/site_0768_0001-1200-630-20151105152427.jpg" alt="Image 3"></img>
            <img className={activeIndex === 3 ? 'active' : 'hidden'} src="https://www.naturalworldheritagesites.org/wp-content/uploads/2017/05/Mountains-scaled.jpg" alt="Image 4"></img>
        </div>
    )
}