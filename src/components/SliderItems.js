import React,{Component} from 'react';
import SliderItem from "./SliderItem";
export default class SliderItems extends Component{
    componentDidMount(){
        this.props.setSliders(this.refs.sliders)
    }
    render(){
        let style={
            width:(this.props.images.length+1)*500,
            left:this.props.index*-500+'px',
            transitionDuration:this.props.speed+'s'
        };
        return(
            <ul ref="sliders" className="sliders" style={style}>
                {
                    this.props.images.map((img,index)=>(<SliderItem key={index} img={img}/>))
                }
                <SliderItem key={this.props.images.length} img={this.props.images[0]}/>

            </ul>
        )
    }
}