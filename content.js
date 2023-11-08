//CLIENT OBJECT

const client = {
  name: "Patagonia",
  logo: "images/patagonia_logo.png",
  heroImg: "https://cdn.shopify.com/s/files/1/0284/7804/6292/files/hs-books-patagonia8.jpg?v=1679643331"
};

const heroHTML = `
    <div class="logo-wrap">
        <div class="op-logo"></div>
        <p class="x">×</p>
        <img class="pata-logo" src="${client.logo}" alt="${client.name} logo">
    </div>
        <svg class="down-arrow" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"> 
            <path d="M17 9.5L12 14.5L7 9.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
`;

const clockHTML = `
    
    <div class="clock">
    <div class="clock-hand"></div>
    <svg xmlns="http://www.w3.org/2000/svg" width="246" height="246" viewBox="0 0 246 246" fill="none">
        <rect x="120" width="6" height="28" rx="3" fill="#3F3F3F" />
        <rect x="120" y="218" width="6" height="28" rx="3" fill="#3F3F3F" />
        <rect x="181.902" y="14.9789" width="6" height="28" rx="3" transform="rotate(30 181.902 14.9789)" fill="#3F3F3F" />
        <rect x="72.9019" y="203.772" width="6" height="28" rx="3" transform="rotate(30 72.9019 203.772)" fill="#3F3F3F" />
        <rect x="228.021" y="58.9019" width="6" height="28" rx="3" transform="rotate(60 228.021 58.9019)" fill="#3F3F3F" />
        <rect x="39.2276" y="167.902" width="6" height="28" rx="3" transform="rotate(60 39.2276 167.902)" fill="#3F3F3F" />
        <rect x="231.021" y="181.902" width="6" height="28" rx="3" transform="rotate(120 231.021 181.902)" fill="#3F3F3F" />
        <rect x="42.2276" y="72.9019" width="6" height="28" rx="3" transform="rotate(120 42.2276 72.9019)" fill="#3F3F3F" />
        <rect x="187.098" y="228.021" width="6" height="28" rx="3" transform="rotate(150 187.098 228.021)" fill="#3F3F3F" />
        <rect x="78.0981" y="39.2276" width="6" height="28" rx="3" transform="rotate(150 78.0981 39.2276)" fill="#3F3F3F" />
        <rect x="246" y="120" width="6" height="28" rx="3" transform="rotate(90 246 120)" fill="#3F3F3F" />
        <rect x="28" y="120" width="6" height="28" rx="3" transform="rotate(90 28 120)" fill="#3F3F3F" />
    </svg>
    </div>
    <div class="main-para">
    <p>In the time you’ve been on this page, we could have helped you generate an estimated <span>£</span><span class="figures"></span></span> in incremental revenue.</p>
    </div>
`;

const aboutHTML = `
    <div class="desktop-wrap">
    <div class="alert">VIDEO PLACEHOLDERS TO BE REPLACED  </div>
        <h2>Who we are</h2>
        <div class="main-para mobile-para">
            <p>Open Partners is an agency, like algorithms, that is constantly evolving. We are created without legacy to thrive both in today’s conditions and for the unexpected needs of tomorrow, working in chorus throughout the marketing funnel. We are free from silos and think holistically at pace and scale. We give our people freedom, fostering a culture that empowers the most talented people to do their best work.</p>
        </div>
        <img class="video-mobile" src="images/video-placeholder.png" alt="">
        <div class="svg-cont">
            <svg class="arrow-animation" xmlns="http://www.w3.org/2000/svg" width="125" height="138" viewBox="0 0 294 138" fill="none">
            <path class="loop" d="M193 127.161C161 160.221 63.1999 103.677 108 50.7801C139.862 13.1599 170.5 59.9923 144 94.1007C121.761 122.725 32.5 109.741 31.5 6" stroke="black" />
            <path class="arrow-head" d="M3 31L31.5 3L60 31" stroke="black" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="video-cta">Watch a 5 minute video on who we are</div>
        </div>
    </div>


    <div class="desktop-para">
        <p>Open Partners is an agency, like algorithms, that is constantly evolving. We are created without legacy to thrive both in today’s conditions and for the unexpected needs of tomorrow, working in chorus throughout the marketing funnel. </p><p>We are free from silos and think holistically at pace and scale. We give our people freedom, fostering a culture that empowers the most talented people to do their best work.</p>
    </div>
   
`;

const helpHTML = `
<div class="left-help">
    <div class="screens-wrap-desktop">
        <img class="screen-desktop" id="product-desktop" src="images/product-screen.png" alt="">
        <img class="screen-desktop" id="basket-desktop" src="images/basket-screen.png" alt="">
    </div>
</div>
<div class="right-help">
    <div class="help-title">
        <h2 class="yellow-text help-title">How we can help</h2>
        <div class="patagonia-logo-svg"></div>
    </div>    
    <div class="screens-wrap">
        <img class="screen" id="product" src="images/product-screen.png" alt="">
        <img class="screen" id="basket" src="images/basket-screen.png" alt="">
    </div>  
    <div class="main-para">
        <p >To assess the user experience quality of ${client.name}'s website, we undertook a comprehensive CRO audit. Our goal was to pinpoint any areas of performance that could be enhanced.</p>
        <p> This involved a meticulous analysis of your analytics, a deep dive into the user journey funnel, and rigorous usability testing involving 50 participants. Our aim was to uncover valuable insights that could lead to significant improvements for your website.</p>
    </div>
</div>
    
`

const statsHTML = `
    <h2><span class="percentage">1%</span><br>of participants expressed that they faced challenges in assessing clothing sizing accurately</h2>
    <div class="main-para">
        <p>To assess the user experience quality of ${client.name}'s website, we undertook a comprehensive CRO audit. Our goal was to pinpoint any areas of performance that could be enhanced. </p>
        <p>This involved a meticulous analysis of your analytics, a deep dive into the user journey funnel, and rigorous usability testing involving 50 participants. Our aim was to uncover valuable insights that could lead to significant improvements for your website.</p>
    </div>
`

const heroSection = document.getElementById("hero");
heroSection.insertAdjacentHTML("afterbegin", heroHTML);
heroSection.style.backgroundImage = `url(${client.heroImg})`



const clockSection = document.getElementById("clock");
clockSection.insertAdjacentHTML("afterbegin", clockHTML);

const aboutSection = document.getElementById('about');
aboutSection.insertAdjacentHTML("afterbegin" , aboutHTML);

const helpSection = document.getElementById('help');
helpSection.insertAdjacentHTML("afterbegin" , helpHTML)

const statsSection = document.getElementById('stats');
statsSection.insertAdjacentHTML("afterbegin" , statsHTML);


//scroll to clock 
const downArrow = document.querySelector('svg.down-arrow')
downArrow.addEventListener('click' , function() {
    clockSection.scrollIntoView({behavior: "smooth"})
})


