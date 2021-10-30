import React from 'react';
import ReactDOM from 'react-dom';
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';
import HomeThree from './HomeThree';
import HomeFour from './HomeFour';
import HomeFive from './HomeFive';
import HomeSix from './HomeSix';
import HomeSeven from './HomeSeven';
import HomeEight from './HomeEight';
import HomeNine from './HomeNine';
import Login from './Login';
import SignUp from './SignUp';
import PasswordForget from './PasswordForget';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
			  <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeOne}/>
			  <Route path={`${process.env.PUBLIC_URL}/home-one`} component={HomeOne}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-two`} component={HomeTwo}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-three`} component={HomeThree}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-four`} component={HomeFour}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-five`} component={HomeFive}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-six`} component={HomeSix}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-seven`} component={HomeSeven}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-eight`} component={HomeEight}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-nine`} component={HomeNine}/>  
			  <Route path={`${process.env.PUBLIC_URL}/login`} component={Login}/>    
			  <Route path={`${process.env.PUBLIC_URL}/password-forget`} component={PasswordForget}/>  
			  <Route path={`${process.env.PUBLIC_URL}/sign-up`} component={SignUp}/>  
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
