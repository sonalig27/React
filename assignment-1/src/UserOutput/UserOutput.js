import React from 'react';
import "./UserOutput.css"
const userOutput = (props) => {
    return (
        <div>
            <p style = {props.style}><strong>{props.username} </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <p style = {props.style}><strong>{props.username} </strong>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</p>
        </div>
    )
}

export default userOutput;