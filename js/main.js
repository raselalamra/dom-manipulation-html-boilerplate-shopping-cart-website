const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');

const shippingFiled = document.getElementById('shipping');
const total = document.getElementById('total');

function isContain(elem){
    // return is class present
    return elem.classList.contains('selected')
}

free.addEventListener('click', function(){
    if(!isContain(free)){
        free.classList.add('selected')
        express.classList.remove('selected')
    }
    shippingFiled.innerText = '5'
    updateTotal()
})

express.addEventListener('click', function(){
    if(!isContain(express)){
        free.classList.remove('selected')
        express.classList.add('selected')
    }
    shippingFiled.innerText = '30'
    updateTotal()
})

// update total 
function updateTotal(){
    const shippingCharg = Number(shippingFiled.innerText);
    const productPrice = Number(price.innerText);
    const totalPrice = shippingCharg + productPrice;
    total.innerText = totalPrice;
}

div1.addEventListener('click', function(){
    if(!isContain(div1)){
        div1.classList.add('selected')
        div2.classList.remove('selected')
        div3.classList.remove('selected')
    }
    // changing img
    img.src = 'images/1.jpg'
    // changing description
    desc.innerText = 'First-Cartoon Movement is a community of over 500 cartoonists, publishing political cartoons. A website for international political satire. Donate Online. Get Newsletter. View Blog. Highlights: Newsletter Available, Donation Option Available.'
    // changing price
    price.innerText = '650'
    // update total
    updateTotal()
});
div2.addEventListener('click', function(){
    if(!isContain(div2)){
        div1.classList.remove('selected')
        div2.classList.add('selected')
        div3.classList.remove('selected')
    }
    // changing img
    img.src = 'images/2.jpg'
    // changing description
    desc.innerText = 'Second-Cartoon Movement is a community of over 500 cartoonists, publishing political cartoons. A website for international political satire. Donate Online. Get Newsletter. View Blog. Highlights: Newsletter Available, Donation Option Available.'
    // changing price
    price.innerText = '550'
})
div3.addEventListener('click', function(){
    if(!isContain(div3)){
        div1.classList.remove('selected')
        div2.classList.remove('selected')
        div3.classList.add('selected')
    }
    // changing img
    img.src = 'images/3.jpg'
    // changing description
    desc.innerText = 'Third-Cartoon Movement is a community of over 500 cartoonists, publishing political cartoons. A website for international political satire. Donate Online. Get Newsletter. View Blog. Highlights: Newsletter Available, Donation Option Available.'
    // changing price
    price.innerText = '330'
})
