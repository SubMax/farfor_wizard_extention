getStartedBtn = document.getElementById('get_started');
getStartedBtn.addEventListener('click', getStarted);

function getStarted() {
    console.log("get start");
    mainCard = document.getElementById('main_card');
    listCard = document.getElementById('list_card');
    mainCard.hidden = 1;
    listCard.hidden = 0;
}

arrowBack = document.getElementById('arrow_back');
arrowBack.addEventListener('click', getBack);
function getBack() {
    console.log('back');
    mainCard = document.getElementById('main_card');
    listCard = document.getElementById('list_card');
    mainCard.hidden = 0;
    listCard.hidden = 1;
}

orders = document.getElementById('orders');
orders.addEventListener('click', getOrders);
function getOrders() {
    console.log('Orders');
    listOrders = document.getElementsByClassName('list_orders');
    for (let el of listOrders) {
        el.hidden = !el.hidden
    }
    console.log('listOrders.hidden');
}