//CLIENT OBJECT

const client = {
  name: "Patagonia",
  logo: "images/patagonia_logo.png",
};

const heroHTML = `
    <div class="logo-wrap">
        <div class="op-logo"></div>
        <p class="x">X</p>
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
    <h2>Who we are</h2>
    <div class="main-para">
        <p>Open Partners is an agency, like algorithms, that is constantly evolving. We are created without legacy to thrive both in today’s conditions and for the unexpected needs of tomorrow, working in chorus throughout the marketing funnel. We are free from silos and think holistically at pace and scale. We give our people freedom, fostering a culture that empowers the most talented people to do their best work.</p>
    </div>
    <img class="video" src="/images/video-placeholder.png" alt="">
    <svg class="arrow-animation" xmlns="http://www.w3.org/2000/svg" width="194" height="138" viewBox="0 0 294 138" fill="none">
    <path class="loop" d="M193 127.161C161 160.221 63.1999 103.677 108 50.7801C139.862 13.1599 170.5 59.9923 144 94.1007C121.761 122.725 32.5 109.741 31.5 6" stroke="black" />
    <path class="arrow-head" d="M3 31L31.5 3L60 31" stroke="black" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <div class="video-cta">Watch a 5 minute video on who we are</div>
`;

const helpHTML = `
    <div class="help-title">
        <h2 class="yellow-text help-title">How we can help</h2>
        <svg class="patagonia-logo-svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="208" height="25" viewBox="-1.5825 -1.5825 286.68975 55.915" id="svg7595">
                <defs id="defs7597"/>
                <path d="m 238.24995,0 c -2.7699,0 -6.9374,2.3125 -6.9374,5.375 0,2.5625 1.7987,3.875 4.375,3.875 3.2224,0 8.3124,-1.375 8.3124,-5.3125 0,-3.25 -2.9787,-3.9375 -5.75,-3.9375 z m -159.375,2.28125 c -0.3437,-0.0775 -0.375,0.28125 -0.375,0.28125 -2.0287,4.51875 -6.35995,7.7425 -11.18745,9.125 0,0 -0.21875,0.045 -0.21875,0.3125 l 0,2.875 c 0,0.42125 0.21875,0.3125 0.21875,0.3125 l 2.71875,0 c 0.30625,0 0.21875,0.25 0.21875,0.25 l 0,18.25 c 0,5.43625 2.26125,8.25 8.12495,8.25 5.2288,0 5.6138,-0.12875 9.75,-3.09375 0,0 0.265,-0.0925 0.125,-0.40625 -0.1124,-0.2525 -1.1874,-2.78125 -1.2812,-3.09375 -0.115,-0.3825 -0.375,-0.15625 -0.375,-0.15625 -0.7562,0.385 -0.9325,0.375 -1.9062,0.375 -0.9663,0 -2.625,-0.375 -2.625,-2.3125 l 0,-17.8125 c 0,0 -0.063,-0.25 0.2812,-0.25 l 4.1562,0 c 0,0 0.2663,0.1325 0.3438,-0.25 0.092,-0.465 0.875,-4.34375 0.875,-4.34375 0,0 0.1187,-0.28125 -0.1875,-0.28125 l -5.25,0 c 0,0 -0.2187,0.095 -0.2187,-0.25 l 0,-2.25 c 0,-1.34125 0.082,-3.1075 0.375,-4.59375 0,0 0.1637,-0.23625 -0.2188,-0.3125 -0.5312,-0.10625 -2.9987,-0.55 -3.3438,-0.625 z m 70.5,2.28125 c -3.48,0 -4.6337,0.9375 -5.4062,3.25 0,0 -0.5238,1.51875 -0.6875,2.0625 -0.115,0.38375 -0.375,0.28125 -0.375,0.28125 -1.7213,-0.26625 -3.5712,-0.78125 -6.8125,-0.78125 -7.0225,0 -14.375,3.875 -14.375,12.875 0,6.37625 5.245,10.0525 10.625,11 0,0 0.85,0.1275 0,0.375 -1.5963,0.4625 -4.94,2.44875 -8.75,3.0625 0,0 -0.3788,0.0412 -0.1875,0.5 0.094,0.225 1.15,2.87875 1.3125,3.3125 0.115,0.30625 0.5,0.25 0.5,0.25 1.78,-0.36375 6.8963,0.10375 7.8125,0.21875 0.8012,0.10125 0,0.21875 0,0.21875 -2.6875,0.4575 -5.8125,2.40375 -5.8125,5.3125 0,5.06125 5.7988,6.25 11.4688,6.25 3.8662,0 13.1874,-1.625 13.1874,-8.4375 0,-6.83 -10.5475,-8.15875 -15.7187,-8.65625 -0.88,-0.0838 0,-0.25 0,-0.25 7.7138,-1.90625 16.75,-3.9475 16.75,-13.65625 0,-7.3125 -6.0625,-9.25 -6.0625,-10.5 0,-0.6875 0.415,-1.33125 1.1875,-1.375 1.34,-0.0775 1.3962,0.04 2.0625,0.4375 0,0 0.1975,0.33375 0.3125,-0.125 0.068,-0.27125 1.2187,-4.80875 1.2813,-5.15625 0.077,-0.42125 -0.2813,-0.3125 -0.2813,-0.3125 -0.6737,-0.065 -1.3712,-0.15625 -2.0313,-0.15625 z M 43.3125,7.9375 c -0.13693,0.0415 -0.15625,0.21875 -0.15625,0.21875 0,0 -3.72125,9.14875 -3.875,9.53125 -0.1525,0.3825 0.125,0.40625 0.125,0.40625 0,0 3.0925,1.09625 3.4375,1.25 0.34375,0.1525 0.46875,-0.0937 0.46875,-0.0937 1.685,-2.07375 3.3775,-3.375 7,-3.375 2.835,0 4.25,1.0625 4.25,3.625 l 0,0.96875 c 0,0.34375 -0.125,0.375 -0.125,0.375 l -8.71875,0.21875 c -5.73375,0 -10.375,4.12625 -10.375,11.375 0,5.81375 4.3875,9.5 10.25,9.5 3.46625,0 6.20375,-1.49375 8.71875,-3.5 0,0 0.41625,-0.65125 0.53125,0 0.115,0.65125 0.35875,1.4875 0.53125,2.21875 0.09,0.37875 0.34375,0.34375 0.34375,0.34375 l 12.21875,0 c 0,0 0.46875,0.155 0.46875,-0.34375 l 0,-3.0625 c 0,0 0.0912,-0.34375 -0.40625,-0.34375 l -1.40625,0 c -0.30625,0 -0.25,-0.5625 -0.25,-0.5625 l 0,-16.9375 c 0,-7.375 -4.7525,-10.375 -11.96875,-10.375 -2.55,0 -5.00375,0.35375 -7.40625,1.28125 0,0 -0.525,0.32125 -0.21875,-0.40625 0.14625,-0.3475 0.28125,-0.75 0.28125,-0.75 0,0 0.16375,-0.34625 -0.21875,-0.5 C 46.39125,8.8463 43.955,8.10755 43.5,7.93755 c -0.0766,-0.0287 -0.14186,-0.0138 -0.1875,0 z m 53.15625,0 c -0.1373,0.0415 -0.1562,0.21875 -0.1562,0.21875 0,0 -3.7213,9.14875 -3.875,9.53125 -0.1525,0.38375 0.125,0.40625 0.125,0.40625 0,0 3.0925,1.0975 3.4374,1.25 0.3451,0.15375 0.4688,-0.0937 0.4688,-0.0937 1.6838,-2.07375 3.3462,-3.375 6.9688,-3.375 2.835,0 4.25,1.0625 4.25,3.625 l 0,0.96875 c 0,0.345 -0.094,0.375 -0.094,0.375 l -8.7188,0.21875 c -5.7349,0 -10.375,4.125 -10.375,11.375 0,5.81125 4.3863,9.5 10.25,9.5 3.465,0 6.1738,-1.49375 8.6876,-3.5 0,0 0.4462,-0.65125 0.5624,0 0.1151,0.65 0.3575,1.4875 0.5313,2.21875 0.089,0.38 0.3437,0.34375 0.3437,0.34375 l 12.1876,0 c 0,0 0.5,0.15375 0.5,-0.34375 l 0,-3.0625 c 0,0 0.091,-0.34375 -0.4063,-0.34375 l -1.4063,0 c -0.3062,0 -0.25,-0.5625 -0.25,-0.5625 l 0,-16.9375 c 0,-7.375 -4.7825,-10.375 -12,-10.375 -2.5487,0 -4.9712,0.35375 -7.375,1.28125 0,0 -0.5249,0.32125 -0.2187,-0.40625 0.1462,-0.3475 0.25,-0.78125 0.25,-0.78125 0,0 0.1638,-0.315 -0.2187,-0.46875 -0.4213,-0.1525 -2.8275,-0.8925 -3.2813,-1.0625 -0.077,-0.0287 -0.1417,-0.0138 -0.1875,0 z m 157.1562,0 c -0.1372,0.0415 -0.1562,0.21875 -0.1562,0.21875 0,0 -3.7212,9.14875 -3.875,9.53125 -0.1525,0.38375 0.125,0.40625 0.125,0.40625 0,0 3.0925,1.0975 3.4375,1.25 0.345,0.15375 0.4687,-0.0937 0.4687,-0.0937 1.6838,-2.07375 3.3463,-3.375 6.9688,-3.375 2.835,0 4.25,1.0625 4.25,3.625 l 0,0.96875 c 0,0.345 -0.094,0.375 -0.094,0.375 l -8.7187,0.21875 c -5.7362,0 -10.375,4.125 -10.375,11.375 0,5.81125 4.3863,9.5 10.25,9.5 3.465,0 6.1738,-1.49375 8.6875,-3.5 0,0 0.4463,-0.65125 0.5625,0 0.115,0.65 0.3575,1.4875 0.5313,2.21875 0.089,0.38 0.3437,0.34375 0.3437,0.34375 l 12.1875,0 c 0,0 0.5,0.15375 0.5,-0.34375 l 0,-3.0625 c 0,0 0.091,-0.34375 -0.4062,-0.34375 l -1.4063,0 c -0.3062,0 -0.25,-0.5625 -0.25,-0.5625 l 0,-16.9375 c 0,-7.375 -4.7825,-10.375 -12,-10.375 -2.5487,0 -4.9713,0.35375 -7.375,1.28125 0,0 -0.5263,0.32125 -0.2187,-0.40625 0.1449,-0.3475 0.25,-0.78125 0.25,-0.78125 0,0 0.1637,-0.315 -0.2188,-0.46875 -0.4213,-0.1525 -2.8275,-0.8925 -3.2812,-1.0625 -0.077,-0.0287 -0.1418,-0.0138 -0.1876,0 z m -81.2812,1.4375 c -10.2438,0 -18.1562,6.18625 -18.1562,16.25 0,10.12375 7.9124,16.3125 18.1562,16.3125 10.31,0 18.25,-6.18875 18.25,-16.3125 0,-10.06375 -7.94,-16.25 -18.25,-16.25 z m 43.25,0 c -4.3063,0 -7.535,2.39 -10.7188,4.8125 0,0 -0.3124,0.43625 -0.3124,-0.0625 l 0,-4.5 c 0,-0.345 -0.3126,-0.15625 -0.3126,-0.15625 l -13.5937,3.59375 c 0,0 -0.2813,0 -0.2813,0.34375 l 0,3.125 c 0,0.345 0.3126,0.1875 0.3126,0.1875 0,0 1.1962,-0.28375 1.6562,-0.4375 0.4588,-0.15375 0.3125,0.21875 0.3125,0.21875 l 0,20.46875 c 0,0 0.088,0.28125 -0.2187,0.28125 l -1.8438,0 c 0,0 -0.2188,-0.10125 -0.2188,0.28125 l 0,3.15625 c 0,0.42125 0.2188,0.3125 0.2188,0.3125 l 16.125,0 c 0,0 0.2188,0.05 0.2188,-0.21875 l 0,-3.25 c 0,-0.3825 -0.3126,-0.28125 -0.3126,-0.28125 l -1.9374,0 c -0.3063,0 -0.25,-0.21875 -0.25,-0.21875 l 0,-17.3125 c 0,-0.30625 0.2187,-0.46875 0.2187,-0.46875 1.47,-1.2375 2.9825,-2.375 5.0625,-2.375 1.7387,0 3.4062,0.93875 3.4062,2.75 l 0,17.40625 c 0,0 0.088,0.21875 -0.2187,0.21875 l -1.875,0 c 0,0 -0.3437,-0.025 -0.3437,0.28125 l 0,3.25 c 0,0.26875 0.2812,0.21875 0.2812,0.21875 l 15.8438,0 c 0,0 0.3124,0.10875 0.3124,-0.3125 l 0,-3.15625 c 0,-0.34375 -0.2812,-0.28125 -0.2812,-0.28125 l -1.6875,0 c -0.2675,0 -0.2187,-0.3125 -0.2187,-0.3125 l 0,-18.6875 c 0,-3.43875 -1.1601,-8.875 -9.3438,-8.875 z M 22.15625,9.4062 c -2.8575,0 -5.03,1.16125 -7.78125,2.8125 0,0 -0.3125,0.15 -0.3125,-0.15625 l 0,-2.34375 c 0,-0.34375 -0.3125,-0.25 -0.3125,-0.25 L 0.28125,12.93745 c 0,0 -0.28125,0 -0.28125,0.34375 l 0,3.125 c 0,0.42125 0.3125,0.28125 0.3125,0.28125 l 1.5625,-0.375 c 0,0 0.375,-0.17125 0.375,0.25 l 0,29.96875 c 0,0 0.015,0.4375 -0.40625,0.4375 l -1.46875,0 c 0,0 -0.375,-0.0538 -0.375,0.40625 l 0,2.9375 c 0,0.42125 0.5,0.40625 0.5,0.40625 l 17.40625,0 c 0,0 0.34375,-0.13125 0.34375,-0.4375 l 0,-2.90625 c 0,-0.42125 -0.375,-0.40625 -0.375,-0.40625 l -3.4375,0 c -0.38375,0 -0.375,-0.53125 -0.375,-0.53125 l 0,-5.40625 c 0,-0.30625 0.25,-0.1875 0.25,-0.1875 1.72875,0.88 4.165,1.125 6,1.125 9.53625,0 15.0625,-8.8125 15.0625,-17.625 0,-8.9375 -5.80875,-14.9375 -13.21875,-14.9375 z m 221.1563,0.0312 c -0.078,-0.007 -0.1563,0.0312 -0.1563,0.0312 l -13.5313,3.71875 c 0,0 -0.25,0.0125 -0.25,0.28125 l 0,3.03125 c 0,0.42125 0.375,0.25 0.375,0.25 0,0 0.8863,-0.19 1.6563,-0.3125 0.3863,-0.0638 0.2813,0.295 0.2813,0.5625 l 0,19.9375 c 0,0 0.1024,0.3125 -0.2813,0.3125 l -1.9063,0 c 0,0 -0.25,-0.10875 -0.25,0.3125 l 0,3.1875 c 0,0.3825 0.25,0.25 0.25,0.25 l 15.8438,0 c 0.3825,0 0.25,-0.3125 0.25,-0.3125 0,0 -0.01,-2.62875 0,-3.125 0.01,-0.4225 -0.2812,-0.3125 -0.2812,-0.3125 l -1.5626,0 c -0.3825,0 -0.2812,-0.28125 -0.2812,-0.28125 l 0,-27.28125 c 0,-0.19187 -0.079,-0.24328 -0.1562,-0.25 z m -107.7188,3.875 c 4.8338,0 6.8125,9.43625 6.8125,12.8125 0,2.99875 -0.96,4.1875 -3.3437,4.1875 -4.8326,0 -6.8438,-9.4375 -6.8438,-12.8125 0,-3.00125 0.9913,-4.1875 3.375,-4.1875 z m 34.75,0.8125 c 6.5087,0 8.4688,11.50125 8.4688,16 0,3.375 -0.9276,7.0625 -4.4063,7.0625 -6.5075,0 -8.4375,-11.50125 -8.4375,-16 0,-2.31375 -0.01,-7.0625 4.375,-7.0625 z m -154.4375,1.90625 c 1.9975,0 7.6875,0.56375 7.6875,11.8125 0,7.00125 -1.6975,9.375 -5.5625,9.375 -3.0925,0 -3.96875,-2.3125 -3.96875,-5.0625 l 0,-15.34375 c 0,-0.4225 0.34375,-0.53125 0.34375,-0.53125 l 1.5,-0.25 z m 36.78125,8.78125 1.5625,0 c 0.3825,0 0.3125,0.25 0.3125,0.25 l 0,5.75 c 0,2.375 -0.59875,4.5625 -3.5625,4.5625 -3.15875,0 -3.84375,-2.75 -3.84375,-5.1875 0,-3.1875 2.30875,-5.375 5.53125,-5.375 z m 53.15625,0 1.5625,0 c 0.3825,0 0.2813,0.25 0.2813,0.25 l 0,5.75 c 0,2.375 -0.5676,4.5625 -3.5313,4.5625 -3.1563,0 -3.875,-2.74875 -3.875,-5.1875 0,-3.1875 2.3413,-5.375 5.5625,-5.375 z m 157.1562,0 1.5626,0 c 0.3824,0 0.2812,0.25 0.2812,0.25 l 0,5.75 c 0,2.375 -0.5662,4.5625 -3.5312,4.5625 -3.1563,0 -3.875,-2.74875 -3.875,-5.1875 0,-3.1875 2.3412,-5.375 5.5624,-5.375 z M 137.59375,42.375 c 0.077,1.6e-4 0.125,0.0312 0.125,0.0312 2.1225,1.2925 3.6562,2.2675 3.6562,5.03125 0,1.56125 -0.8262,2.3125 -2.4374,2.3125 -1.8051,0 -2.6563,-1.68875 -2.6563,-3.25 0,-1.37875 0.4962,-3.4425 0.9687,-3.9375 0.1432,-0.15062 0.2665,-0.18766 0.3438,-0.1875 z" id="path7420" style="fill:#231f20;fill-opacity:1;fill-rule:nonzero;stroke:none"/>
                <path d="m 280.20475,5.50113 c -0.205,-0.11125 -0.53375,-0.16625 -0.9875,-0.16625 l -0.69625,0 0,1.61625 0.7375,0 c 0.345,0 0.60375,-0.0338 0.77624,-0.0987 0.31876,-0.1225 0.47751,-0.355 0.47751,-0.69875 0,-0.32375 -0.10251,-0.54125 -0.3075,-0.6525 m -0.865,-0.72875 c 0.5625,0 0.975,0.055 1.23624,0.1625 0.46875,0.195 0.70251,0.57625 0.70251,1.145 0,0.4025 -0.14625,0.70125 -0.43875,0.89125 -0.155,0.10125 -0.37125,0.17375 -0.64876,0.21875 0.34626,0.0562 0.60125,0.2025 0.76126,0.44125 0.16125,0.2375 0.24125,0.47125 0.24125,0.6975 l 0,0.33 c 0,0.10375 0.004,0.215 0.0125,0.335 0.007,0.11875 0.0225,0.19625 0.0425,0.23375 l 0.03,0.0562 -0.74375,0 c -0.004,-0.015 -0.007,-0.03 -0.0112,-0.045 -0.004,-0.015 -0.007,-0.0312 -0.0113,-0.05 l -0.0163,-0.145 0,-0.35625 c 0,-0.52 -0.145,-0.8625 -0.43374,-1.03 -0.17125,-0.0962 -0.47251,-0.14375 -0.9025,-0.14375 l -0.63875,0 0,1.77 -0.765,0 0,-4.51125 1.58375,0 z m -2.4225,-0.22125 c -0.69,0.68875 -1.03375,1.52 -1.03375,2.495 0,0.98125 0.3425,1.8175 1.0275,2.51 0.68875,0.69125 1.525,1.0375 2.51,1.0375 0.98375,0 1.82124,-0.34625 2.50874,-1.0375 0.69001,-0.6925 1.03376,-1.52875 1.03376,-2.51 0,-0.975 -0.34375,-1.80625 -1.03376,-2.495 -0.69249,-0.69125 -1.52874,-1.0375 -2.50874,-1.0375 -0.97751,0 -1.81125,0.34625 -2.50376,1.0375 m 5.405,5.3975 c -0.8,0.805 -1.77,1.20625 -2.9075,1.20625 -1.1375,0 -2.10375,-0.40125 -2.9025,-1.20625 -0.79375,-0.8 -1.19,-1.77 -1.19,-2.90875 0,-1.12875 0.4,-2.0925 1.2025,-2.8925 0.7975,-0.7975 1.76,-1.195 2.89,-1.195 1.1375,0 2.1075,0.3975 2.9075,1.195 0.8025,0.79625 1.20251,1.76125 1.20251,2.8925 0,1.135 -0.40001,2.105 -1.20251,2.90875" id="path7424" style="fill:#231f20;fill-opacity:1;fill-rule:nonzero;stroke:none"/>
        </svg>
    </div>    
    <div class="screens-wrap">
        <img class="screen" id="product" src="images/product-screen.png" alt="">
        <img class="screen" id="basket" src="images/basket-screen.png" alt="">

    </div>  
    <div class="main-para">
        <p >To assess the user experience quality of Patagonia's website, we undertook a comprehensive CRO audit. Our goal was to pinpoint any areas of performance that could be enhanced.</p>
        <p> This involved a meticulous analysis of your analytics, a deep dive into the user journey funnel, and rigorous usability testing involving 50 participants. Our aim was to uncover valuable insights that could lead to significant improvements for your website.</p>
    </div>
`

const statsHTML = `
    <h2><span class="percentage">42%</span><br>of participants expressed that they faced challenges in assessing clothing sizing accurately</h2>
    <div class="main-para">
        <p>To assess the user experience quality of Patagonia's website, we undertook a comprehensive CRO audit. Our goal was to pinpoint any areas of performance that could be enhanced. </p>
        <p>This involved a meticulous analysis of your analytics, a deep dive into the user journey funnel, and rigorous usability testing involving 50 participants. Our aim was to uncover valuable insights that could lead to significant improvements for your website.</p>
    </div>
`

const heroSection = document.getElementById("hero");
heroSection.insertAdjacentHTML("afterbegin", heroHTML);

const clockSection = document.getElementById("clock");
clockSection.insertAdjacentHTML("afterbegin", clockHTML);

const aboutSection = document.getElementById('about');
aboutSection.insertAdjacentHTML("afterbegin" , aboutHTML);

const helpSection = document.getElementById('help');
helpSection.insertAdjacentHTML("afterbegin" , helpHTML)

const statsSection = document.getElementById('stats');
statsSection.insertAdjacentHTML("afterbegin" , statsHTML);