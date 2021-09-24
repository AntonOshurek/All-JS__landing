export default function tabs() {
  const tab = function() {
    const tab = document.querySelectorAll('.tab');
    const tabButton = document.querySelectorAll('.tabs-controls__btn');
    let tabName;

    tabButton.forEach(btn => {
        btn.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tab.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('tab--current') : item.classList.remove('tab--current');
        })
    }
};

tab();
};
