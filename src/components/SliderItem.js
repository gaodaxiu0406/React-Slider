import React,{Component} from 'react';
export default class SliderItem extends Component{
    render(){
        return(
            <li className="slider">
                <img src={this.props.img.src} alt=""/>
            </li>
        )
    }
}