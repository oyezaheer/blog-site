// filter js
$(document).ready(function() {
    $(".filter-item").click(function() {
        const value = $(this).attr("data-filter");
        if(value=="all") {
            $(".post-box").show("1000");
        } else{
            $(".post-box")
            .not("." + value)
            .hide("1000");
            $(".post-box")
            .filter("." + value)
            .show("1000");
        }
    });

    // add actvie to btn
    $('.filter-item').click(function() {
        $(this).addClass('active-filter').siblings().removeClass("active-filter");
    });
});


// header background change on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});



// addd another blog to 

const createBlog = (tech) => {
    let data = tech.data();
    tech.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
    </div>
    `;
}