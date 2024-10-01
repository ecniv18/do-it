import "./styles.css";

import populateProjectList from "./dom/popuplateProjectList";
import populateTodoList from "./dom/popuplateTodoList";
import todoFormInit from "./dom/todoFormInit";
import projectFormInit from "./dom/projectFormInit";

// INIT
todoFormInit();
projectFormInit();
populateProjectList();
populateTodoList();
