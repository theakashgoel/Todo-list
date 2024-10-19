import React from "react";
import "./MainList.css";
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

//passing the props to the list items
const MainList = ({ list, handleToggleTodo, handleDelete }) => {
  return (
    <ul className="list">
      {list.map((item) => {
        return (
            
            //checking if the item is completed or not and styling accordingly
          <li key={item.id} className={item.completed ? "marked_done" : ""}>
            <span>{item.name}</span>
            <span className="list_icons">
              <FaCheck onClick={() => handleToggleTodo(item.id)} />
              <MdDeleteForever onClick={() => handleDelete(item.id)} />
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default MainList;
