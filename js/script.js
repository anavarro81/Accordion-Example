const acc$$ = document.getElementsByClassName('accordion')


for (const accordion of acc$$ ) {

    accordion.addEventListener('click', (event) => {
        event.target.classList.toggle("active");
        
        let panel = event.target.nextElementSibling 

        if (panel.style.display == 'none') {
            panel.style.display = 'block'
        } else {
            panel.style.display = 'none'
        }

    })
    
}