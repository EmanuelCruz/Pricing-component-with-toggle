document.addEventListener('DOMContentLoaded',()=>{
    console.log('Documento listo')
})

let button = document.querySelector('.container-pricing__button');

button.addEventListener('click', ()=>{
    
    let classCircle = button.querySelector('div').className;
    
    if (classCircle!=='circle--monthly') {
        
        document.querySelector('.circle--annually').className = 'circle--monthly';
        
        let precings = document.querySelectorAll('.container-pricing__content .card__pricing');
        
        precings.forEach((precing,index)=>{
            if (index === 0) {
                precing.innerText = '$19.99'
            } else {
                precing.innerText = '$39.99'
            }
        })

        document.querySelector('.container-pricing__content .card__pricing--primary').innerText = '$24.99';

    } else {
        document.querySelector('.circle--monthly').className = 'circle--annually';
        
        let precings = document.querySelectorAll('.container-pricing__content .card__pricing');
        
        precings.forEach((precing,index)=>{
            if (index === 0) {
                precing.innerText = '$199.99'
            } else {
                precing.innerText = '$399.99'
            }
        })

        document.querySelector('.container-pricing__content .card__pricing--primary').innerText = '$249.99';
    }

})
