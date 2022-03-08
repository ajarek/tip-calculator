var amount = document.querySelector('#amount');
var total = document.querySelector('#total');
var tipButtons = document.querySelectorAll('.grid button');
var reset = document.querySelector('#reset');
var selectTip = [];
var readInputs = function () {
    var billInput = parseFloat(document.querySelector('#bill-input').value);
    var peopleInput = parseFloat(document.querySelector('#people-input').value);
    var people = Number(peopleInput);
    var procent = Number(selectTip[0]) / 100;
    if (!isNaN(billInput) || !isNaN(peopleInput) || peopleInput !== 0) {
        amount.innerText = "".concat((billInput * procent / people).toFixed(2));
        total.innerText = "".concat((billInput * (1 + procent) / people).toFixed(2));
        document.querySelector('#bill-input').classList.remove('error');
        document.querySelector('#people-input').classList.remove('error');
    }
    if (isNaN(billInput) || isNaN(peopleInput) || peopleInput == 0) {
        amount.innerText = '0';
        total.innerText = '0';
        document.querySelector('#bill-input').classList.add('error');
        document.querySelector('#people-input').classList.add('error');
    }
};
tipButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        selectTip.splice(0, 1, e.target.id);
        readInputs();
    });
});
reset.addEventListener('click', function () {
    var inputBill = document.querySelector('#bill-input');
    var inputPeople = document.querySelector('#people-input');
    amount.innerText = '0';
    total.innerText = '0';
    selectTip.splice(0, 1);
    inputBill.value = '';
    inputPeople.value = '';
});
