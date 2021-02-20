console.log("qwe");

link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
link.rel = 'stylesheet';
document.head.appendChild(link);

icon = document.createElement('div');
icon.innerHTML = '<span class="material-icons">help</span>';

tabs = document.querySelectorAll('.x-tab-inner');
tabs.forEach(tab => {
    tab.appendChild(icon);
});