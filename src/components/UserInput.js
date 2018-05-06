import React from 'react';

const userInput = (props) => {
  	const inputStyle = {
  		padding: '10px 20px',
  		border: 'none',
  		borderRadius: '10px',
  		color: '#bbb',
  		fontSize: '1.2em',
  		width: '70%',
  		display: 'block',
  		margin: '10px auto 0'
  	};

	return (
			<input type="text" style={inputStyle} value={props.username} onChange={props.changed} />
		);

	}


export default userInput;