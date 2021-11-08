import React from "react";
import { Link } from "react-router-dom";

function Navbar(props){
  
  let menuItemElements = props.menuItems.map((values, index) => {
      return (
        <NavbarItem
          label={values.label}
          link={values.href}
          callback={()=>{props.onChangeHandler(index);}}
          selected={props.currentMenuIndex == index}
          key={index}
        />
      );
    });

  return (
    <div id="navbar">
      <h3>
        {menuItemElements}
      </h3>
    </div>
  );
}

function NavbarItem(props){
  return !props.selected ? (
    <Link className="menuItem" onClick={props.callback} to={props.link}>
      {props.label + " "}
    </Link>
  ) : (
    <a className="menuItem">{props.label + " "}</a>
  );
}

export default Navbar;
