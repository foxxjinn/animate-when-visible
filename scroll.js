// Jinn Foxx, 2021

;(function(){
    const elements = document.querySelectorAll('.to-fade')
    
    let pageScrolled = 0,
        elementTop = 0
        windowHeight = window.innerHeight
    
    function updateElement() {
        for (let element of elements) {
            if (!(element.classList.contains('fade-in'))) {
                if (isVisible(element)) {
                    element.classList.add('fade-in')
                }
            }
        }
    }
    
    function isVisible(element) {
        elementTop = element.getBoundingClientRect().top
        return (windowHeight * 0.5 + pageScrolled > elementTop) 
    }
    
    document.addEventListener('scroll', ()=> {
        pageScrolled = window.pageYOffset
        updateElement()
    })
    
    document.addEventListener('resize', ()=> {
        windowHeight = window.innerHeight
    })
    
    updateElement()
})();


