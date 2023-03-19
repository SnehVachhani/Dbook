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
	if(name==="Sneh Vachhani"){
		img="https://instagram.fjga1-1.fna.fbcdn.net/v/t51.2885-19/333418284_3553409611611178_1249760614493696429_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fjga1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=SNdCZcRLVJEAX8Xu2Gs&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCsBH-0ssWLV8Tc3NrLr_aZdc1ph6PxvMs6pg5EMkQ2TQ&oe=641BD110&_nc_sid=8fd12b"
	}
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
