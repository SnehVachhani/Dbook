import React from "react";
import Navbutton from "./navigationbutton.jsx"
function Nav(props) {
	const [navClick,setNavClick]=React.useState(false)
	function mybabyboss(event) {
		setNavClick(!navClick)

	}
	var trueNavComp ={

		visibility: "visible",
		opacity:"1",
		transition: "opacity 1s ease-out",
	}
	var falseNavComp ={
		visibility: "hidden",
		opacity:"0",
		transition: "visibility 1s,opacity 0.5s ease-out",
	}
	var trueNavMain ={
	width:"321px",
	padding: "2px",
	borderRadius: "10px",
	transition:" width 2s ease-out",
	}
	var falseNavMain ={
	width:"100%",
	backgroundColor: "#66FCF1",
	transition:" width 2s ease-out",
	}
	return(<div>
		<nav style={navClick?trueNavMain:falseNavMain}>
				<Navbutton class=" navstyle fa fa-bars" call={mybabyboss} text={props.menu} />
				<span id="mylinks" style={navClick?trueNavComp:falseNavComp}>
					<Navbutton class=" navstyle fa fa-home" call={props.clickedHome} text={props.home} />
					<Navbutton class=" navstyle fa fa-search" call={props.clickedSearch} text={props.search} />
				</span>
		</nav>
	</div>
);
}
export default Nav;