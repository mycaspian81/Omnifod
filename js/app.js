const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;


const btnOpenNavEl = document.querySelector('.menu-open');
const btnCloseNavEl = document.querySelector('.menu-close');
const headerEl = document.querySelector('.header')

btnOpenNavEl.addEventListener('click', function() {
    headerEl.classList.toggle('nav__open');
})

btnCloseNavEl.addEventListener('click', function() {
    headerEl.classList.toggle('nav__open');
})

////////////////////////////////
//smooth scroling
////////////////////////////////

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const href = link.getAttribute("href");

        //scroll to top
        if (href === "#") 
        window.scrollTo ({
            top:0,
            behavior: "smooth",
        })
        //scroll to another link
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        //remove navbar
        if (link.classList.contains("main__nav")) {
            headerEl.classList.toggle('nav__open');
        }
    });
});

/////////////////////////////
//sticky nav
const sectionHeroEl = document.querySelector(".header__main");
const obs = new IntersectionObserver(function(entries) {
const ent = entries[0];
if (ent.isIntersecting === false)
    document.body.classList.add("sticky")
    if (ent.isIntersecting === true)
    document.body.classList.remove("sticky")
}, 
{
    root: null,
    threshold:0,
    rootMargin:"-80px"
});
obs.observe(sectionHeroEl);


/////////////////////////////