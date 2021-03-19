newOrderCard = document.getElementById('new_order_card')
mainCard = document.getElementById('main_card');
listCard = document.getElementById('list_card');

getStartedBtn = document.getElementById('get_started');
getStartedBtn.addEventListener('click', getStarted);
function getStarted() {
    console.log("get start");
    mainCard.hidden = 1;
    listCard.hidden = 0;
    newOrderCard.hidden = 1;
}

arrowBack = document.getElementById('arrow_back');
arrowBack.addEventListener('click', getBack);
homeBack = document.getElementById('home_back');
homeBack.addEventListener('click', getBack);

function getBack() {
    console.log('back');
    mainCard.hidden = 0;
    listCard.hidden = 1;
    newOrderCard.hidden = 1;
}

orders = document.getElementById('orders');
orders.addEventListener('click', getOrders);
function getOrders() {
    console.log('Orders');
    listOrders = document.getElementsByClassName('list_orders');
    for (let el of listOrders) {
        el.hidden = !el.hidden
    }
}

newOrder = document.getElementById("new_order");
newOrder.addEventListener('click', getNewOrder);
function getNewOrder() {
    console.log('getNewOrder');
    mainCard.hidden = 1;
    listCard.hidden = 1;
    newOrderCard.hidden = 0;
}
