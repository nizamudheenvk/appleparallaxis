
let vision=document.getElementById('vision');
let headset=document.getElementById('headset');
let secoo=document.getElementById('secoo');
let head1=document.getElementById('head1')
let cardooo=document.getElementById('cardooo')
let head3=document.getElementById('head3')
let head4=document.getElementById('head4')
window.addEventListener('scroll',()=>{
    let value=window.scrollY
    vision.style.marginBottom  = value * 0.15 +'px';
    headset.style.marginBottom=value * 2.5 +'px';
     
   
   
   
    const mleft='140';
    secoo.style.marginLeft=mleft-0.09*value +'%';

    const carddss = document.querySelectorAll('.cards')
    carddss.forEach(cardsss=>{
        const cardPosition=cardsss.getBoundingClientRect().left;
        if (cardPosition>=550&& cardPosition<=800) {
            cardsss.classList.add('highlight')
        }else{
            cardsss.classList.remove('highlight')
        }
    }) 

    const Mleft = '150'
    head1.style.marginTop=Mleft-0.15*value+'%';

     const Mtop = '100'
     head3.style.marginTop=Mtop-0.05*value+'%';

     
     const Mbottom = '100'
     head4.style.marginBottom=Mbottom-0.15*value+'%';

     
});




 
