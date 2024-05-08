import React from "react";
import { Car } from "../car/car";

export class Garage extends React.Component {
    
    render() {
        const cars = ['Ford', 'BMW', 'Audi'];
        return (
            <div>
                <a>In my garage I have:</a>
                <ul>
                    {cars.map((car) => <Car name={car}/>)}
                </ul>
            </div>)
    }
}