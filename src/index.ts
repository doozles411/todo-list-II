import displayData from './modules/displayData';
import manageData from './modules/manageData';
import { todos } from './modules/todoList';
import { ProjectsObject } from './util/types';
import './index.css';

const listContainerEl = document.querySelector('.main-list');
const listContainer: Element = listContainerEl!
const dashboardEl = document.querySelector('.main-dashboard');
const dashboard: Element = dashboardEl!;
const hamburgerEl = document.querySelector('.fa-bars');
const hamburgerMenu: Element = hamburgerEl!;
const filterEl = document.querySelectorAll('.filters-btn');
const filterBtns: NodeListOf<Element> = filterEl!;
const addNewEl = document.querySelector('.projects-btn');
const addNewBtn: Element = addNewEl!;

function initialLoad(todos: ProjectsObject) {
    displayData.renderFilterList(todos);
    displayData.renderProjectList(todos, listContainer);
    displayData.renderHighlightedCategory();
    displayData.renderAllTodos(todos, listContainer);
};

initialLoad(todos);

// Dashboard toggle
hamburgerMenu.addEventListener('click', () => {
    (<HTMLElement>dashboard).style.visibility = (<HTMLElement>dashboard).style.visibility === 'hidden' ? 'visible' : 'hidden';
});

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        let projectName: string;
        projectName = (e.target as Element).textContent!;

        if (projectName === 'All') {
            projectName = 'all';
        } else if (projectName === 'Today') {
            projectName = 'today';
        } else {
            projectName = 'week';
        }

        manageData.setSelectedProject(todos, projectName, listContainer);
    });
});

// Add-New Button    
addNewBtn.addEventListener('click', () => {
    displayData.renderAddNewPopup(todos, listContainer);
});