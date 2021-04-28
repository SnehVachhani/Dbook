import React from "react";
import info from "../detailsarray"
function Card(props) {
	var i
	function mopingnames(singleInfo) {
		return singleInfo.name;
	}; 
	const moping = info.map(mopingnames);
	for(i=0;i<moping.length;i++){
		if(props.name === moping[i]){
			break;
		}
	}
	const {img,name,age,l1,professional,status,hobbies,other} =info[i];
	return (<div>
			<div className="bout">
			About:
		</div>
		<img src={img} className="respo" />
		<p>
			Name : {name}<br/>
			Age : {age}<br/>
			{l1}<br/>
			Professional In : {professional}<br/>
			Relationship Status : {status}<br/>
			Hobbies : {hobbies}<br/>
			Other Things : {other}
		</p>
		</div>)
}
export default Card;