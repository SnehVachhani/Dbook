import React from "react";
import info from "../detailsarray"
import Searchcard from "./searchcard.jsx"
function Searchbar(props) {
	const [searchArray,setSearchArray]=React.useState([]);
	const [balue,setBalue]=React.useState("");
	const [executeMap,setExecuteMap]=React.useState(false);

	function Baluechange(event) {
		setBalue(event.target.value)
	};

	function mopingnames(singleInfo) {
		return singleInfo.name.toUpperCase();
	};
	function mopingnamesnormal(singleInfoNormal) {
		return singleInfoNormal.name;
	};
	function SearchCaard(singleSCard,index) {
		return <Searchcard clk={props.clkKard} key={index} id={index} name={singleSCard} />
	};
	
	function Searchname(event) {
		setSearchArray([]);
		var i=0;
		var inBalue = balue.toUpperCase();
		const moping = info.map(mopingnames);
		const mopingnormal = info.map(mopingnamesnormal);

		for (i=0; i <moping.length; i++) {
			if(moping[i].indexOf(inBalue)>-1){
				let val = mopingnormal[i];
				setSearchArray((prevValue)=>{
					return ([...prevValue,val])
				})
			}
		}
		setExecuteMap(true);
	};
	return(	<div>
			<div>
				<input type="text"  className="myInput" onKeyUp={Searchname} onChange={Baluechange} placeholder="Enter name..." value={balue}></input>
				<i class="fa fa-search fa-lg"></i>
			</div>
			{executeMap?searchArray.map(SearchCaard):null}

		</div>
	);
}
export default Searchbar;