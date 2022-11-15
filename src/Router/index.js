import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import APIDevPartnersLandingpage_v1_mobile from '../Components/APIDevPartnersLandingpage_v1_mobile';
import Group4704 from '../Components/Group4704';
import Iconcode from '../Components/iconcode';
import Basetrophy from '../Components/Basetrophy';
import Bingcolor from '../Components/Bingcolor';
import Quoracolor from '../Components/Quoracolor';
import Atlassian from '../Components/Atlassian';
import Yelpcolor from '../Components/Yelpcolor';
import APIDevPartnersLandingpage_v1 from '../Components/APIDevPartnersLandingpage_v1';
import HeaderMobile from '../Components/HeaderMobile';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/apidevpartnerslandingpage_v1_mobile"><APIDevPartnersLandingpage_v1_mobile /></Route>
				<Route exact path="/group4704"><Group4704 /></Route>
				<Route exact path="/iconcode"><Iconcode /></Route>
				<Route exact path="/basetrophy"><Basetrophy /></Route>
				<Route exact path="/bingcolor"><Bingcolor /></Route>
				<Route exact path="/quoracolor"><Quoracolor /></Route>
				<Route exact path="/atlassian"><Atlassian /></Route>
				<Route exact path="/yelpcolor"><Yelpcolor /></Route>
				<Route exact path="/apidevpartnerslandingpage_v1"><APIDevPartnersLandingpage_v1 /></Route>
				<Route exact path="/headermobile"><HeaderMobile /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;