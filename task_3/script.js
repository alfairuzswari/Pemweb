const judul = document.querySelector('.jumbotron')
judul.innerHTML = '<h1> FC Barcelona</h1> <p>Klub sepakbola raksasa dunia yang bermarkas di kota Barcelona, Spanyol</p> <em> <p> (tapi dulu raksasa dunia nya, sekarang lagi lucu-lucu nya) </p> </em>'

const elemenBaru = document.createElement('p')
const teksElemenBaru = document.createTextNode('Tapi pada saat musim kemarin, musim 2021/2022 barcelona sama sekali tidak mendapatkan gelar apapun, salah satu faktor yang mungkin mengakibatkan ini terjadi adalah kepergian nya Lionel Messi dan kurangnya dalamnya sisi kepelatihan')

elemenBaru.appendChild(teksElemenBaru)
const tempel = document.querySelector('article#Prestasi')
tempel.appendChild(elemenBaru)

const doa = document.querySelector('.doa')
doa.addEventListener('click', function() {
    alert('Terimakasih untuk dukungannya!')
})