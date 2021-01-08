// Jinn Foxx, 2021

;(function(){
    const elements = document.querySelectorAll('.hi')
    
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
        pageScrolled = window.pageYOffset || document.documentElement.scrollTop
        elementTop = element.getBoundingClientRect().top
    
        return (windowHeight + pageScrolled > elementTop + 200) 
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


