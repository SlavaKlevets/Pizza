import React from "react";
import Slider from "./Slider";

class SliderCOntainer extends React{
   /* state=[
        {img:"",
         name:"Биф BBQ",
         ingr:"Шпинат, Баварские колбаски, Сыр моцарелла, Телятина, Черри, Соус барбекю",
         cost:"25.99 руб.",
         masa:"640 гр."
         },
        {img:"",
         name:"",
         ingr:"",
         cost:"",
         masa:"640 гр."
        },
        {img:"",
         name:"",
         ingr:"",
         cost:"",
         masa:"640 гр."
        },
        {img:"",
        name:"",
        ingr:"",
        cost:"",
        masa:"640 гр."
        }];*/
    componentDidMount(){

    }
    render(){
        return(
            <Slider state={this.state}/>
        )
    }
}
