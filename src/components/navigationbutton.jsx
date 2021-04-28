import React from "react";

function Navbutton(props) {
	return <a className={props.class} onClick={props.call} aria-hidden="true"> {props.text}</a>
}
export default Navbutton;