import React from 'react';
import "../styles/SidebarOption.css";

const SidebarOption = ({ Icon, title, number, selected, onClick }) => {
  return (
    <div className={`sidebarOption ${selected && 'sidebarOption--active'}`} onClick={onClick}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOption;