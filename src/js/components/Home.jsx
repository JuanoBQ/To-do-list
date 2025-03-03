import React, { useEffect, useState } from "react";
import "./Home.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [taskCounter, setTaskCounter] = useState(0);
  const [noTaskAdvise, setNoTaskAdvise] = useState();

  useEffect(() => {
    setTaskCounter(items.length);
    noTask();
  }, [inputValue, items, taskCounter]);

  const addItems = () => {
    if (inputValue !== "") {
      setItems([...items, inputValue]);
    }
  };

  const noTask = () => {
    if (taskCounter === 0) {
      setNoTaskAdvise(<h2>No task yet</h2>);
    } else if (taskCounter > 0) {
      return setNoTaskAdvise();
    }
  };

  return (
    <div className="to-do-list">
      <label htmlFor="Todo" className="label-text">
        To do list
      </label>
      <div className="list">
        <input
          type="text"
          id="to-do"
          placeholder="What needs to be done?"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addItems();
            }
          }}
        />
        <ul className="u-list">
          {noTaskAdvise}
          {items.map((item, index) => {
            return (
              <div className="task" key={index}>
                <div className="item">
                  <li>{item}</li>
                </div>
                <div className="icon">
                  <i
                    class="fa-solid fa-x"
                    onClick={() => {
                      setItems(
                        items.filter((item, currentIndex) => {
                          return index != currentIndex;
                        })
                      );
                    }}
                  ></i>
                </div>
                <hr></hr>
              </div>
            );
          })}
        </ul>
        <hr />
        <p className="task-left">{taskCounter} items</p>
      </div>
    </div>
  );
};

export default Home;
