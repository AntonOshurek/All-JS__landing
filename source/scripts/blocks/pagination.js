export  default function pagination() {

  const getRandomInt = (minValue, maxValue) => {
    if((Math.sign(minValue) === -1) || (Math.sign(maxValue) === -1) || minValue >= maxValue) {
        throw new Error('minValue or maxValue they have the wrong value');
    }
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  };

  const usersNames = ['Abraham', 'Addison', 'Adrian', 'Albert', 'Alec', 'Alfred', 'Alvin', 'Andrew',
   'Andy', 'Archibald', 'Archie', 'Arlo', 'Arthur', 'Arthur', 'Austen', 'Barnabe', 'Bartholomew', 'Bertram',
   'Bramwell', 'Byam', 'Cardew', 'Chad', 'Chance', 'Colin', 'Coloman', 'Curtis', 'Cuthbert', 'Daniel', 'Darryl',
   'David', 'Dickon', 'Donald', 'Dougie', 'Douglas', 'Earl', 'Ebenezer', 'Edgar', 'Edmund', 'Edward', 'Edwin', 'Elliot',
   'Emil', 'Floyd', 'Franklin', 'Frederick', 'Gabrie', 'Galton', 'Gareth', 'George', 'Gerard', 'Gilbert', 'Gorden', 'Gordon',
   'Graham', 'Grant', 'Henry', 'Hervey', 'Hudson', 'Hugh', 'Ian', 'Jack', 'Jaime', 'James', 'Jason', 'Jeffrey', 'Joey', 'John',
   'Jolyon', 'Jonas', 'Joseph', 'Joshua', 'Julian', 'Justin', 'Kurt', 'Lanny', 'Larry', 'Laurence', 'Lawton', 'Lester', 'Malcolm',
   'Marcus', 'Mark', 'Marshall', 'Martin', 'Marvin', 'Matt', 'Maximilian', 'Michael', 'Miles', 'Murray', 'Myron', 'Nate', 'Nathan',
   'Neil', 'Nicholas', 'Nicolas', 'Norman', 'Oliver', 'Oscar', 'Osric', 'Owen', 'Patrick', 'Paul', 'Peleg', 'Philip', 'Phillipps',
   'Raymond', 'Reginald', 'Rhys', 'Richard', 'Robert', 'Roderick', 'Rodger', 'Roger', 'Ronald', 'Rowland', 'Rufus', 'Russell',
   'Sebastian', 'Shahaf', 'Simon', 'Stephen', 'Swaine', 'Thomas', 'Tobias', 'Travis', 'Victor', 'Vincent', 'Vincent', 'Vivian', 'Wayne',
    'Wilfred', 'William', 'Winston', 'Zadoc'
  ];

  const citys = ['Абаза', 'Абакан', 'Абдулино', 'Абинск', 'Агидель',
    'Гдов', 'Геленджик', 'Георгиевск', 'Глазов', 'Голицыно', 'Киселёвск', 'Кисловодск', 'Клин', 'НовыйУренгой', 'Ногинск',
    'Нолинск', 'Норильск', 'Ноябрьск', 'Нурлат', 'Нытва', 'Нюрба', 'Нягань', 'Нязепетровск', 'Няндома', 'Облучье',
    'Обнинск', 'Обоянь', 'Обь', 'Североуральск',
    'Трёхгорный', 'Усолье', 'Лабинск', 'Уссурийск'
  ];

  let users = [];

  class User {
    constructor(name, city, age) {
      this.name = name;
      this.city = city;
      this.age = age;
    }
  };

  const numberOfNotes = 32;

  function pushToUsers(value) {
    for(let i = 0; i < value; i++) {
      const user = new User(usersNames[getRandomInt(0, usersNames.length - 1)], citys[getRandomInt(0, citys.length - 1)], getRandomInt(15, 50));
      users.push(user);
    }
  };
  pushToUsers(numberOfNotes);

  let notesOnPage = 5;

  function createPaginationBtns() {
    const paginationControls = document.querySelector('.pagination-controls');
    let btns = [];
    for(let i = 0; i < Math.ceil(users.length / notesOnPage); i++) {
      btns += `
        <li class="pagination-controls__elem">
          <button class="pagination-controls__btn" type="button">${i + 1}</button>
        </li>
      `;
      paginationControls.innerHTML = btns;
    };
  };
  createPaginationBtns();

  const paginationBtns = document.querySelectorAll('.pagination-controls__btn');
  paginationBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      searchPaginationList(this);
    });
  });

  function searchPaginationList(event = paginationBtns[0]) {
    buttonLabeling(event);
    let pageNum = +event.innerHTML; //get page number
    let start = (pageNum - 1) * notesOnPage;
    let end = start + notesOnPage;
    let notes = users.slice(start, end);

    showPaginationList(notes);
  };
  searchPaginationList();

  function buttonLabeling(button) {
    paginationBtns.forEach(btn => {
      btn.classList.remove('pagination-controls__btn--active');
    });
    button.classList.add('pagination-controls__btn--active');
  };

  function showPaginationList(notes) {
    const tableBody = document.querySelector('.table__body');
    let list = [];

    notes.forEach(elem => {
      list += `
      <tr class="table__row">
        <th class="table__item table__item--row" scope="row">${elem.name}</th>
        <td class="table__item">${elem.city}</td>
        <td class="table__item">${elem.age}</td>
      </tr>
      `;
      tableBody.innerHTML = list ;
    });
    tableHeightProp(tableBody)
  };

  function tableHeightProp(tableBody) {
    const tableHeight = window.getComputedStyle(document.querySelector('.table__row')).height;
    const height = +tableHeight.slice(0, tableHeight.length - 2) * notesOnPage;
    tableBody.style.height = `${height}px`;
  };
};

