import React,{Component} from 'react';
import './Slider.less'
import SliderArrows from "./SliderArrows"
import SliderItems from "./SliderItems"
import SliderDots from "./SliderDots"


export default class Slider extends Component{
    constructor(){
        super();
        this.state={index:0,isMoving:false};
    }
    componentDidMount(){
        if(this.props.autoPlay){
            this.go();
        }
    }
    turn=(step)=>{
        if(!this.state.isMoving){
            this.setState({isMoving:true});
            let index=this.state.index+step;
            if(index>this.props.images.length){
                this.sliders.style.transitionDuration='0s';
                this.sliders.style.left=0;
                index=1;
                window.getComputedStyle(this.sliders,null).left;
                this.setState({index});
                this.sliders.style.transitionDuration=this.props.speed+'s';
                setTimeout(()=>{
                    this.setState({isMoving:false});
                },this.props.speed*1000);
                return;
            }else if(index<0){
                this.sliders.style.transitionDuration='0s';
                this.sliders.style.left=this.props.images.length*-500+'px';
                index=this.props.images.length-1;
                window.getComputedStyle(this.sliders,null).left;
                this.setState({index});
                this.sliders.style.transitionDuration=this.props.speed+'s';
                setTimeout(()=>{
                    this.setState({isMoving:false});
                },this.props.speed*1000);
                return;
            }
            setTimeout(()=>{
                this.setState({isMoving:false});
            },this.props.speed*1000);
            this.setState({index})
        }
    };
    go=()=>{
        this.timer=setInterval(()=>{
            this.turn(1);
        },this.props.delay*1000);
    };
    setSliders=(ref)=>{
        this.sliders=ref
    };

    render(){
        return(
            <div className="slider-wrapper" onMouseOut={this.go} onMouseOver={()=>clearInterval(this.timer)}>
                <SliderItems
                    images={this.props.images}
                    index={this.state.index}
                    setSliders={this.setSliders}
                    speed={this.props.speed}
                />
                <SliderDots images={this.props.images} turn={this.turn} index={this.state.index}/>
                <SliderArrows turn={this.turn}/>
            </div>
        )
    }
}