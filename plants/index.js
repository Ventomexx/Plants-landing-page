console.log('При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\nВ разделе contacts реализован select с выбором городов +25\n\ntotal 100/125')
// Burger menu
const myBurger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
const body = document.body;
  myBurger.addEventListener ('click', () => {
    navMenu.classList.toggle ('active');
})
  navMenu.addEventListener ('click', () => {
    navMenu.classList.toggle ('active');
})
  body.addEventListener('click', function( event ) {
  if (myBurger !== event.target && !myBurger.contains(event.target)) {    
    navMenu.classList.remove ('active');
  }
});
const btnGardens = document.getElementById('btnGardens');
const btnLawn = document.getElementById('btnLawn');
const btnPlanting = document.getElementById('btnPlanting');
const figure = document.querySelectorAll('figure');

btnGardens.onclick = function() {
  if(btnLawn.classList.contains('button-on') && btnPlanting.classList.contains('button-on')) {
    return false;}
  this.classList.toggle('button-on');
  if (btnLawn.classList.contains('button-on') || btnPlanting.classList.contains('button-on'))
  {
  figure.forEach(element => {
    if (element.innerText === "Garden care\nLorem Ipsum has been the industry")
    element.classList.toggle('figure-off');
  });}
    else {
  figure.forEach(element => {
    if (element.innerText != "Garden care\nLorem Ipsum has been the industry")
    element.classList.toggle('figure-off');
  });}
}
btnLawn.onclick = function() {
  if (btnGardens.classList.contains('button-on') && btnPlanting.classList.contains('button-on')) {
    return false;}
  this.classList.toggle('button-on');
  if (btnGardens.classList.contains('button-on') || btnPlanting.classList.contains('button-on'))
  {
  figure.forEach(element => {
    if (element.innerText === "Lawn care\nLorem Ipsum has been the industry")
    element.classList.toggle('figure-off');
  });}
    else {
      figure.forEach(element => {
        if (element.innerText != "Lawn care\nLorem Ipsum has been the industry")
        element.classList.toggle('figure-off');
      });}
}
btnPlanting.onclick = function() {
  if(btnGardens.classList.contains('button-on') && btnLawn.classList.contains('button-on')) {
    return false;}
  this.classList.toggle('button-on');
  if (btnGardens.classList.contains('button-on') || btnLawn.classList.contains('button-on'))
  {
  figure.forEach(element => {
    if (element.innerText === "Planting\nLorem Ipsum has been the industry")
    element.classList.toggle('figure-off');
  });}
  else {
  figure.forEach(element => {
    if (element.innerText != "Planting\nLorem Ipsum has been the industry")
    element.classList.toggle('figure-off');
  });}
}
// Prices
const accordion = document.querySelectorAll('.button-price')
const description = document.querySelectorAll('.description')
const icos = document.querySelectorAll('.ico')


function accordionOpen () {
	accordion.forEach(function(item) {
		item.addEventListener('click',  function (e) {
      
      if (item.nextElementSibling.classList.contains('opened')) {
        item.nextElementSibling.classList.remove('opened')
        item.parentElement.classList.remove('best-green')
        item.lastElementChild.classList.remove('ico-rotate')
      }
      else {
      icos.forEach((item) => {
      item.classList.remove('ico-rotate')
      })
      description.forEach((item) => {
      item.classList.remove('opened')
      item.parentElement.classList.remove('best-green')
      })
      item.nextElementSibling.classList.toggle('opened')
      item.parentElement.classList.toggle('best-green')
      item.lastElementChild.classList.toggle('ico-rotate')
    }
		})
	})
}
accordionOpen ()
// Contact us
const btnContacts = document.querySelector('.button-contacts')
const accordionContacts = document.querySelector('.select-contacts')
const icoContact = document.getElementById('ico');
const accordionItems = document.querySelectorAll('.select-items')
const addressesCard = document.querySelector('.adresses-card')

const CanandaiguaNY = {
  city: 'Canandaigua, NY',
  phone: '+1	585	393 0001',
  address: '151 Charlotte Street',
}
const NewYorkCity = {
  city: 'New York City',
  phone: '+1	212	456 0002',
  address: '9 East 91st Street',
}
const YonkersNY = {
  city: 'Yonkers, NY',
  phone: '+1	914	678 0003',
  address: '511 Warburton Ave',
}
const SherrillNY = {
  city: 'Sherrill, NY',
  phone: '+1	315	908 0004',
  address: '14 WEST Noyes BLVD',
}
let nameCity ='132'

btnContacts.addEventListener ('click', () => {
  accordionContacts.classList.toggle('opened');
  btnContacts.classList.toggle('button-contacts-open');
  icoContact.classList.toggle('ico-rotate')
})

accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    addressesCard.classList.add('card-vision');
    nameCity = item.innerText;
    btnContacts.childNodes[0].nodeValue  = nameCity;
    btnContacts.style.fontSize = '16px';
    accordionContacts.classList.toggle('opened')
    icoContact.classList.toggle('ico-rotate')
    getCardInfo ()
  })
})

function getCardInfo () {
  let ObjectName = eval(nameCity.replace(/\s+/g, '').replace(/,/g, ''))
    document.querySelector('.city-info').innerText = ObjectName.city;
    document.querySelector('.phone-info').innerText = ObjectName.phone;
    document.querySelector('.address-info').innerText = ObjectName.address;
    document.querySelector('.callus-info').href = `tel:${ObjectName.phone}`;
  }
  

