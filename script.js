/* =====================================
   KEKSCRAFT SCRIPT.JS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= HEADER ================= */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 60){

            header.style.background = "rgba(10,10,10,.98)";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

        }else{

            header.style.background = "rgba(20,20,20,.92)";
            header.style.boxShadow = "none";

        }

    });

    /* ================= SMOOTH LINKS ================= */

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",e=>{

            const target=document.querySelector(link.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /* ================= HERO SLIDESHOW ================= */

    const heroImage = document.querySelector(".hero img");

    const heroImages = [

        "images/hero.jpg",
        "images/hero2.jpg",
        "images/hero3.jpg",
        "images/hero4.jpg"

    ];

    let heroIndex = 0;

    setInterval(()=>{

        heroIndex++;

        if(heroIndex >= heroImages.length){

            heroIndex = 0;

        }

        heroImage.style.opacity = "0";

        setTimeout(()=>{

            heroImage.src = heroImages[heroIndex];

            heroImage.style.opacity = "1";

        },500);

    },6000);

    /* ================= SCROLL ANIMATION ================= */

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0px)";

            }

        });

    },{

        threshold:0.2

    });

    document.querySelectorAll("section").forEach(section=>{

        section.style.opacity="0";
        section.style.transform="translateY(60px)";
        section.style.transition="1s";

        observer.observe(section);

    });

    /* ================= GAME CARDS ================= */

    document.querySelectorAll(".game").forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;
            const y=e.clientY-rect.top;

            const rotateY=(x-rect.width/2)/18;
            const rotateX=(rect.height/2-y)/18;

            card.style.transform=
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="rotateX(0deg) rotateY(0deg)";

        });

    });

    /* ================= NEWS HOVER ================= */

    document.querySelectorAll(".news article").forEach(article=>{

        article.addEventListener("mouseenter",()=>{

            article.style.boxShadow="0 15px 35px rgba(0,0,0,.5)";

        });

        article.addEventListener("mouseleave",()=>{

            article.style.boxShadow="none";

        });

    });

    /* ================= BACK TO TOP ================= */

    const topButton=document.createElement("button");

    topButton.innerHTML="▲";

    topButton.style.position="fixed";
    topButton.style.right="25px";
    topButton.style.bottom="25px";
    topButton.style.width="55px";
    topButton.style.height="55px";
    topButton.style.borderRadius="50%";
    topButton.style.border="none";
    topButton.style.cursor="pointer";
    topButton.style.fontSize="22px";
    topButton.style.background="#46c34a";
    topButton.style.color="white";
    topButton.style.display="none";
    topButton.style.zIndex="9999";

    document.body.appendChild(topButton);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>600){

            topButton.style.display="block";

        }else{

            topButton.style.display="none";

        }

    });

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* ================= NEWSLETTER ================= */

    const form=document.querySelector(".newsletter form");

    if(form){

        form.addEventListener("submit",(e)=>{

            e.preventDefault();

            const email=form.querySelector("input").value.trim();

            if(email===""){

                alert("Bitte gib eine E-Mail-Adresse ein.");

                return;

            }

            if(!email.includes("@")){

                alert("Ungültige E-Mail-Adresse.");

                return;

            }

            alert("Danke fürs Abonnieren!");

            form.reset();

        });

    }

    /* ================= LOGIN BUTTON ================= */

    const login=document.querySelector(".login a");

    if(login){

        login.addEventListener("mouseenter",()=>{

            login.style.transform="scale(1.05)";

        });

        login.addEventListener("mouseleave",()=>{

            login.style.transform="scale(1)";

        });

    }

    /* ================= RANDOM BUTTON EFFECT ================= */

    document.querySelectorAll("button").forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.filter="brightness(110%)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.filter="brightness(100%)";

        });

    });

    /* ================= LOADING EFFECT ================= */

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="opacity .8s";

        document.body.style.opacity="1";

    },100);

    /* ================= PARALLAX HERO ================= */

    window.addEventListener("scroll",()=>{

        if(heroImage){

            heroImage.style.transform=`translateY(${window.scrollY*0.25}px)`;

        }

    });

});
