const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"])


// Nav bar

let navBarLinks = document.querySelectorAll("nav a");
for(i = 0; i < navBarLinks.length-1; i++){
  const navObject = Object.values(siteContent["nav"]);
  navBarLinks[i].textContent = navObject[i];
  navBarLinks[i].style.color = 'green';
}
let append = document.createElement('a');
append.textContent = "Append";
append.href = "#";
append.style.color = "green";
document.querySelector('nav').appendChild(append);

let prep = document.createElement('a');
prep.textContent = "Prepend";
prep.href = "#";
prep.style.color = "green";
document.querySelector('nav').prepend(prep);

// let a = document.createElement('a').appendChild(document.createElement('b') );
// navBarLinks.appendChild(document.createElement('a'));





// CTA
let h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];

let getStarted = document.querySelector(".cta button");
getStarted.textContent = siteContent["cta"]["button"]

let codeImg = document.getElementById("cta-img");
codeImg.setAttribute("src", siteContent["cta"]["img-src"]);

//main-content
let featuresSectionTitle = document.querySelector(".top-content .text-content:first-of-type h4");
featuresSectionTitle.textContent = siteContent["main-content"]["features-h4"];

let featuresSectionContent = document.querySelector(".top-content .text-content:first-of-type p");
featuresSectionContent.textContent = siteContent["main-content"]["features-content"];

 let aboutSectionTitle = document.querySelector(".top-content .text-content:last-of-type h4");
 aboutSectionTitle.textContent = siteContent["main-content"]["about-h4"];

 let aboutSectionContent = document.querySelector(".top-content .text-content:last-of-type p");
 aboutSectionContent.textContent = siteContent["main-content"]["about-content"];

 let middleImg = document.getElementById("middle-img");
 middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

 //
 //
 let servicesSectionTitle = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
servicesSectionTitle.textContent = siteContent["main-content"]["services-h4"];

let servicesSectionContent = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
servicesSectionContent.textContent = siteContent["main-content"]["services-content"];

let productSectionTitle = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
productSectionTitle.textContent = siteContent["main-content"]["product-h4"];

let productSectionContent = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
productSectionContent.textContent = siteContent["main-content"]["product-content"];

let visionSectionTitle = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
visionSectionTitle.textContent = siteContent["main-content"]["vision-h4"];

let visionSectionContent = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
visionSectionContent.textContent = siteContent["main-content"]["vision-content"];

// Contact

let contactSectionTitle = document.querySelector(".contact h4");
contactSectionTitle.textContent = siteContent["contact"]["contact-h4"];

let contactSectionAddress = document.querySelector(".contact p:nth-of-type(1)");
contactSectionAddress.textContent = siteContent["contact"]["address"];

let contactSectionPhone = document.querySelector(".contact p:nth-of-type(2)");
contactSectionPhone.textContent = siteContent["contact"]["phone"];

let contactSectionEmail = document.querySelector(".contact p:nth-of-type(3)");
contactSectionEmail.textContent = siteContent["contact"]["email"];

//footer
let copyright = document.querySelector("footer p");
copyright.textContent = siteContent["footer"]["copyright"]