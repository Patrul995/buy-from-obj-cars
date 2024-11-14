
let ford = [
    { brand: "Ford", model: "Mustang", year: 2022, price: 100 },
    { brand: "Ford", model: "Mustang1", year: 2022, price: 100 },
    { brand: "Ford", model: "F-150-2", year: 2023, price: 200 },
    { brand: "Ford", model: "F-150-4", year: 2023, price: 200 },
];

let bmw = [
    { brand: "BMW", model: "X5-1", year: 2022, price: 300 },
    { brand: "BMW", model: "3 Series-1", year: 2023, price: 250 },
    { brand: "BMW", model: "X5-2", year: 2022, price: 300 },
    { brand: "BMW", model: "3 Series-2", year: 2023, price: 250 },
];

let added = [
    { thing: 'CHEXOL', price: 20 },
    { thing: 'TONIROVKA', price: 15 },
    { thing: 'PODSVETKA', price: 10 },
    { thing: 'DISKI', price: 50 },
];

let selectedCar;
let fords = document.getElementById('fords');
let bmws = document.getElementById('bmws');
let adding = document.getElementById('adding');

ford.forEach((item) => {
    let carOption = document.createElement('option');
    carOption.innerText = item.model;
    carOption.value = item.model;
    carOption.setAttribute('data-price', item.price);
    fords.appendChild(carOption);
});

bmw.forEach((item) => {
    let carOption = document.createElement('option');
    carOption.innerText = item.model;
    carOption.value = item.model;
    carOption.setAttribute('data-price', item.price);
    bmws.appendChild(carOption);
});

added.forEach((item) => {
    let label = document.createElement('label');
    label.innerHTML = `${item.thing} ($${item.price}) <input type="checkbox" data-price="${item.price}">`;
    adding.appendChild(label);
});

document.getElementById('fords').addEventListener('change', (ev) => {
    selectedCar = {
        model: ev.target.value,
        price: parseInt(ev.target.selectedOptions[0].getAttribute('data-price'), 10)
    };
    bmws.selectedIndex = 0; 
});


document.getElementById('bmws').addEventListener('change', (ev) => {
    selectedCar = {
        model: ev.target.value,
        price: parseInt(ev.target.selectedOptions[0].getAttribute('data-price'), 10)
    };
    fords.selectedIndex = 0;
});


document.getElementById('add').addEventListener('click', () => {
    let total = selectedCar ? selectedCar.price : 0;

    document.querySelectorAll('#adding input[type="checkbox"]').forEach(element => {
        if (element.checked) {
            total += parseInt(element.getAttribute('data-price'), 10);
        }
    });

    document.getElementById('totalPrice').innerText = `Total: $${total}`;
});
