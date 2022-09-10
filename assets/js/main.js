
/*
  Layout
 */

const swiper = new Swiper('#brands .swiper', {
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
    }
  }
});


const swiper2 = new Swiper('#feed .swiper', {
  
  // Navigation arrows
 navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
  autoplay: {
    delay: 2000,
  },
  
  slidesPerView: 2,
  spaceBetween: 60,

  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    }
  },
  
});

/*
  Main Content
 */

/*
  Home Page
 */


  /*
  Google Maps 
  */



  function getlocation(){ 
    if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition(showPos); 
    }
    else{
        alert("Sorry! your Browser does not support Geolocation API")
    }
}

  function showPos(position){ 
    latt = position.coords.latitude; 
    long = position.coords.longitude; 
    var lattlong = new google.maps.LatLng(latt, long); 
    var myOptions = { 
        center: lattlong, 
        zoom: 15, 
        mapTypeControl: true, 
        navigationControlOptions: {style:google.maps.NavigationControlStyle.SMALL} 
    } 
    var maps = new google.maps.Map(document.getElementById("map"), myOptions); 
    var markers = 
    new google.maps.Marker({position:lattlong, map:maps, title:"You are here!"}); 
} 

getlocation();


/*
  Out Latest Projects
 */

  const projectsFiltersBtns = document.querySelectorAll("#latest-projects [data-filter]");
  const projects = document.querySelectorAll("#latest-projects [data-cat]");
  
  function projectFilterClickHandler(e) {
    const clickedBtn = e.target;
    const projectSelector = clickedBtn.getAttribute("data-filter");
  
    if (projectSelector === "all") return projects.forEach(function (project) {
      project.classList.remove("hide");
    });
  
    const relatedProjects = document.querySelectorAll(`#latest-projects [data-cat="${projectSelector}"]`);
  
    projects.forEach(function (project) {
      project.classList.add("hide");
    })
  
    relatedProjects.forEach(function (project) {
      project.classList.remove("hide");
    })
  }
  
  projectsFiltersBtns.forEach(function (projectFilterBtn) {
    projectFilterBtn.addEventListener('click', projectFilterClickHandler);
  })
  