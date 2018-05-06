import React from 'react';


const userOutput = (props) => {
  	const outputStyle = {
  		color: '#fff',
  		fontSize: '1.4em',
  		lineHeight: '1em'
  	};
	return  (
			<div style={outputStyle}>
				<p>My username is {props.username}</p>
				<p>This is a paragraph</p>
				<p>This is another paragraph</p>
			</div>
		);
}



export default userOutput;