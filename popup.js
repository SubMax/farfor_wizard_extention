getStartedBtn = document.getElementById('get_started');
getStartedBtn.addEventListener('click', getStarted);

arrowBack = document.getElementById('arrow_back');
arrowBack.addEventListener('click', getBack);

function getStarted() {
    console.log("get start");
    mainCard = document.getElementById('main_card');
    listCard = document.getElementById('list_card');
    mainCard.hidden = 1;
    listCard.hidden = 0;
}

function getBack() {
    console.log('back');
    mainCard = document.getElementById('main_card');
    listCard = document.getElementById('list_card');
    mainCard.hidden = 0;
    listCard.hidden = 1;
}