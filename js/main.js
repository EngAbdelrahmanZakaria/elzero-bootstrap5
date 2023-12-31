let switchers = document.querySelectorAll('.our-work ul li');
let imgs = document.querySelectorAll('.our-work .col-sm-6');

switchers.forEach( (li)=>{
    li.addEventListener('click', active);
    li.addEventListener('click', show);
} );
function active() {
    switchers.forEach( (li)=>{
        li.classList.remove('active');
        this.classList.add('active');
        this.classList.add('rounded-pill');
    } );
}
function show() {
    imgs.forEach( (img)=>{
        img.style.display='none';
    } );
    document.querySelector('.our-work .row').style.display='flex'
    document.querySelectorAll(this.dataset.cat).forEach( (el)=>{
        el.style.display = 'block';
    } );
}