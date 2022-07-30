
const activeBtns = document.querySelectorAll('.rate-bttn');

activeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        activeBtns.forEach(f => f != e.target ? f.classList.remove('active') : '');
        e.target.classList.toggle('active');
    });
});
//this works from solution "toggle active class to buttons when clicked"
/* solution selects and leaves in active state
but doesnt remove active state if another button is selected */
//prob is I have no idea how it works ... but I can learn !
 
var ele = document.querySelector('.active');
 document.getElementById('number-selected').textContent += 
 `You selected ${(ele)} out of 5`;

 //might just need to use button as submit form ... this would be a simple solution I'v overlooked haha

 //PsuedoCode
 /*Simplest Way:
 find element wtih active class getElementbyId
 pull id from element with active class 
 place id into ${} above
 */