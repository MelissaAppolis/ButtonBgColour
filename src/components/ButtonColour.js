import {useState} from 'react';
import Button from 'react-bootstrap/Button';

function ButtonColour(props) {
    const [bgColour, setBgColour] = useState(0);

    const handleClick = () => {
        /* check if current index is the last one 
        and moves back to the beginning of the array, 
        otherwise it adds one to go to next colour
        */
        setBgColour(prev => {
            console.log("prev:", prev)
            if (prev === props.colourClasses.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        });
    };

    return (
        <div>
            <Button type="button" 
                    onClick={handleClick} 
                    variant={props.colourClasses[bgColour]}
                    className="myBtn"
                    >Change Bg Colour</Button>
        </div>
    )
}

export default ButtonColour;