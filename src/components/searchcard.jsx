import React from "react";

function Searchcard(props) {
	return (<div id={props.id} class="list" onClick={()=>{props.clk(props.name)}}>{props.name}</div>)
}

export default Searchcard;