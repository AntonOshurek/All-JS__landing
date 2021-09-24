export  default function pagination() {
  let users = [
    {name: 'name1', surname: 'surname1', age: 30},
    {name: 'name2', surname: 'surname2', age: 30},
    {name: 'name3', surname: 'surname3', age: 30},
    {name: 'name4', surname: 'surname4', age: 30},
    {name: 'name5', surname: 'surname5', age: 30},
    {name: 'name6', surname: 'surname6', age: 30},
    {name: 'name7', surname: 'surname7', age: 30},
    {name: 'name8', surname: 'surname8', age: 30},
    {name: 'name9', surname: 'surname9', age: 30},
    {name: 'name10', surname: 'surname10', age: 30},
    {name: 'name11', surname: 'surname11', age: 30},
    {name: 'name12', surname: 'surname12', age: 30},
    {name: 'name13', surname: 'surname13', age: 30},
    {name: 'name14', surname: 'surname14', age: 30},
    {name: 'name15', surname: 'surname15', age: 30},
    {name: 'name16', surname: 'surname16', age: 30},
    {name: 'name17', surname: 'surname17', age: 30},
  ];

  const paginationBtns = document.querySelectorAll('.pagination-controls__btn');
  const tableBody = document.querySelector('.table__body');
  const paginationControls = document.querySelector('.pagination-controls');

  let notesOnPage = 5;

  /*function showPaginationBtns() {
    let btns;
    for(let i = 0; i < users.length / notesOnPage; i++) {
      btns += `
        <li class="pagination-controls__elem">
          <button class="pagination-controls__btn" type="button">${i + 1}</button>
        </li>
      `;

      paginationControls.innerHTML = btns;
      listenPagBtns();
    };

  };
  showPaginationBtns();*/

  paginationBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      buttonLabeling(this);
      let pageNum = +this.innerHTML; //get page number

      let start = (pageNum - 1) * notesOnPage;
      let end = start + notesOnPage;

      let notes = users.slice(start, end);

      console.log(notes);
      showPaginationList(notes);
    })
  });

  function buttonLabeling(button) {
    paginationBtns.forEach(btn => {
      btn.classList.remove('pagination-controls__btn--active');
    });
    button.classList.add('pagination-controls__btn--active');
  };

  function showPaginationList(notes) {
    let list;

    notes.forEach(elem => {
      list += `
      <tr class="table__row">
        <th class="table__item table__item--row" scope="row">${elem.name}</th>
        <td class="table__item">${elem.surname}</td>
        <td class="table__item">${elem.age}</td>
      </tr>
      `;

      tableBody.innerHTML = list;
      console.log(list);
    });

  };
};
