class NavBar {
    constructor(resMenu,navegList,navegLinks) {
        this.resMenu = document.querySelector(resMenu);
        this.navegList = document.querySelector(navegList);
        this.navegLinks = document.querySelectorAll(navegLinks);
        this.activeClass = "active";

       this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navegLinks.forEach((link, index) => {
            link.style.animation
                ?(link.style.animation = " ")
                :(link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
            
        });
    }

    handleClick(){
       // console.log(this);
     this.navegList.classList.toggle(this.activeClass);
     this.resMenu.classList.toggle(this.activeClass);
     this.animateLinks();
   }

    addClickEvent() {
        this.resMenu.addEventListener("click", this.handleClick );
    }

    init() {
        if (this.resMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const navBar = new NavBar (
    ".res-menu",
    ".naveg-list",
    ".naveg-list li",
);

navBar.init();