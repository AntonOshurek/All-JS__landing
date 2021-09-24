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

  let notesOnPage = 3;

  paginationBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      let pageNum = +this.innerHTML; //get page number
      
    })
  })
};

