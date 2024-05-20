import React from 'react';
import './car.scss';

export class Car extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"}
        
    }
    render() {
        return <> {   this.props.name && <h2 className='h2'><span>Hi, I am a {this.state.color} Car! with an ability to + {this.props.name}</span></h2> } </>
    }
}