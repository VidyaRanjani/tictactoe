import react from 'react';

const MyButton = (props) => {

    return(
    <span >
        <button style = {{width : 100 ,height : 100 ,margin :10 ,padding :20,backgroundColor: props.highlight? '#a8a832':'#accf46'}} onClick = {() => {props.onPress(props.index)}}>{props.label}</button>
    </span>
    )
}

export default MyButton;