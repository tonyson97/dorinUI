import React from 'react';
import { Link } from 'react-router-dom';

class Switcher extends React.Component {
  render() {
  	return (
        <div id="style-switcher">
            <div>
                <h3>Select your color</h3>
                <ul className="pattern">
                    <li>
                    <Link to="JavaScript:Void(0);" className="color1" />
                    </li>
                    <li>
                    <Link to="JavaScript:Void(0);"  className="color2"/>
                    </li>
                    <li>
                       <Link to="JavaScript:Void(0);" className="color3"/>
                    </li>
                    <li>
                       <Link to="JavaScript:Void(0);" className="color4"/>
                    </li>
                    <li>
                        <Link to="JavaScript:Void(0);" className="color5"/>
                    </li>
                    <li>
                       <Link to="JavaScript:Void(0);"  className="color6"/>
                    </li> 
                    <li>
                       <Link to="JavaScript:Void(0);" className="color7"/>
                    </li>
                    <li>
                       <Link to="JavaScript:Void(0);"  className="color8"/>
                    </li>                    
                </ul>
            </div>
            <div className="bottom">
            <a href="#" className="settings"><i className="mdi mdi-settings mdi-spin"/></a>
            </div>
        </div>
  	);
  }
}
export default Switcher;