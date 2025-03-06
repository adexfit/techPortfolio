
(() =>{

    window.addEventListener('scroll', () => {
        document.querySelector('.header').classList.toggle('window-scroll', window.scrollY > 0)
    })
    
    
 
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;
  
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);
  
    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }
  
    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && 
            window.innerWidth <= mediaSize){
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
          // if menuItemHasChildren is already expanded, collapse it
          if(menuItemHasChildren.classList.contains("active")){
              collapseSubMenu();
          }
          else{
            // collapse existing expanded menuItemHasChildren
            if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
            }
            // expand new menuItemHasChildren
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          }
        }
    });
    function collapseSubMenu(){
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix(){
         // if navMenu is open ,close it
         if(navMenu.classList.contains("open")){
             toggleNav();
         }
         // if menuItemHasChildren is expanded , collapse it
         if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
       }
    }
  
    window.addEventListener("resize", function(){
       if(this.innerWidth > mediaSize){
           resizeFix();
       }
    });

    
            // Filter switch start

            // Select relevant HTML elements
            const filterButtons = document.querySelectorAll("#filter-buttons button");
            const filterableCards = document.querySelectorAll("#filterable-cards .project");
    
            // Function to filter cards based on filter buttons
            const filterCards = (e) => {
                document.querySelector("#filter-buttons .active").classList.remove("active");
                e.target.classList.add("active");
    
                filterableCards.forEach(project => {
                    // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
                    if(project.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
                        return project.classList.replace("hide", "show");
                    }
                    project.classList.add("hide");
                });
            }
    
            filterButtons.forEach(button => button.addEventListener("click", filterCards));
      // Filter switch end


    const allImages = document.querySelectorAll(".images .img");
    const lightbox = document.querySelector(".lightbox");
    const closeImgBtn = lightbox.querySelector(".close-icon");

    allImages.forEach(img => {
    // Calling showLightBox function with passing clicked img src as argument
    img.addEventListener("click", () => showLightbox(img.querySelector("img").src));
    });

    const showLightbox = (img) => {
    // Showing lightbox and updating img source
    lightbox.querySelector("img").src = img;
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
    }

    closeImgBtn.addEventListener("click", () => {
    // Hiding lightbox on close icon click
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
    });

  })();