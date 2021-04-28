import React from "react";
function Bookintro() {
	const name="??? BOOK " , author ="- SV" , about1 ="This Book is created by Sneh Vachhani ." ,
	about2 ="This Books is only created 4 fun & Practice." ,
	about3="This Book contains Information about members of ??? group."

	return(<div>
		<h1>{name}<em><small><sub>{author}</sub></small></em></h1>
		<h2>{about1}<br /><br />
		{about2}<br /><br />
		{about3}</h2>
	</div>);
}
export default Bookintro;