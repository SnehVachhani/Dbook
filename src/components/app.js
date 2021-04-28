import React from "react";
import Nav from "./nav";
import Bookintro from "./bookIntro";
import Searchbar from "./searchBar"
import Card from "./card"


function App() {
	const [homeVisible,setHomeVisible]=React.useState(true);
	const [searchVisible,setSearchVisible]=React.useState(false);
	const [cardVisible,setCardVisible]=React.useState(false);
	const [returnedName,setReturnedName]=React.useState("");
	function clickedHome() {
		setHomeVisible(true)
		setSearchVisible(false)
		setCardVisible(false)
	}
	function clickedSearch() {
		setHomeVisible(false)
		setSearchVisible(true)
		setCardVisible(false)
	}
	function clickedCard(beta) {
		setReturnedName(beta)
		setSearchVisible(false)
		setHomeVisible(false)
		setCardVisible(true)
	}
	return(<div>
		<Nav menu="MENU" home="HOME" search="SEARCH" clickedSearch={clickedSearch} clickedHome={clickedHome} />
		{homeVisible?<Bookintro />:null}
		{searchVisible?<Searchbar clkKard={clickedCard} />:null}
		{cardVisible?<Card name={returnedName} />:null}
	</div>)
}
export default App;