//CLIENT OBJECT

const client = {
  name: "Patagonia",
  logo: "images/patagonia_logo.png",
  heroImg: "images/hero_img.png"
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
        <h2>Who we are</h2>
        <div class="main-para mobile-para">
            <p>Open Partners is an agency, like algorithms, that is constantly evolving. We are created without legacy to thrive both in today’s conditions and for the unexpected needs of tomorrow, working in chorus throughout the marketing funnel. We are free from silos and think holistically at pace and scale. We give our people freedom, fostering a culture that empowers the most talented people to do their best work.</p>
        </div>
        <img class="video-mobile" src="/images/video-placeholder.png" alt="">
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
    <div class="help-title">
        <h2 class="yellow-text help-title">How we can help</h2>
        <svg class="patagonia-logo-svg"  xmlns="http://www.w3.org/2000/svg" width="143" height="27" viewBox="0 0 143 27" fill="none">
            <path d="M120.165 0C118.768 0 116.666 1.16634 116.666 2.71096C116.666 4.0034 117.573 4.66538 118.873 4.66538C120.498 4.66538 123.065 3.97188 123.065 1.98594C123.065 0.346751 121.563 0 120.165 0ZM39.7818 1.15058C39.6084 1.11149 39.5926 1.29244 39.5926 1.29244C38.5694 3.57154 36.3849 5.19748 33.9501 5.89477C33.9501 5.89477 33.8397 5.91746 33.8397 6.05238V7.50243C33.8397 7.7149 33.9501 7.66005 33.9501 7.66005H35.3213C35.4758 7.66005 35.4317 7.78614 35.4317 7.78614V16.9908C35.4317 19.7327 36.5721 21.1518 39.5296 21.1518C42.1668 21.1518 42.361 21.0869 44.4472 19.5914C44.4472 19.5914 44.5808 19.5448 44.5102 19.3865C44.4535 19.2592 43.9113 17.9838 43.864 17.8262C43.806 17.6332 43.6749 17.7473 43.6749 17.7473C43.2935 17.9415 43.2046 17.9365 42.7135 17.9365C42.2261 17.9365 41.3895 17.7473 41.3895 16.7701V7.78614C41.3895 7.78614 41.3577 7.66005 41.5313 7.66005H43.6276C43.6276 7.66005 43.7619 7.72687 43.801 7.53395C43.8474 7.29942 44.2423 5.34312 44.2423 5.34312C44.2423 5.34312 44.3021 5.20127 44.1477 5.20127H41.4998C41.4998 5.20127 41.3895 5.24918 41.3895 5.07517V3.94035C41.3895 3.26387 41.4308 2.37304 41.5786 1.62343C41.5786 1.62343 41.6612 1.50427 41.4683 1.46581C41.2004 1.41222 39.9558 1.18841 39.7818 1.15058ZM75.3395 2.30117C73.5843 2.30117 73.0024 2.77401 72.6128 3.94035C72.6128 3.94035 72.3486 4.70636 72.2661 4.98061C72.2081 5.17416 72.0769 5.12246 72.0769 5.12246C71.2088 4.98817 70.2757 4.72842 68.6409 4.72842C65.099 4.72842 61.3907 6.68284 61.3907 11.2221C61.3907 14.4381 64.0361 16.2923 66.7496 16.7701C66.7496 16.7701 67.1783 16.8344 66.7496 16.9593C65.9445 17.1925 64.258 18.1943 62.3364 18.5039C62.3364 18.5039 62.1453 18.5247 62.2418 18.7561C62.2892 18.8696 62.8218 20.208 62.9038 20.4268C62.9618 20.5813 63.156 20.5529 63.156 20.5529C64.0537 20.3694 66.6342 20.6052 67.0963 20.6632C67.5004 20.7143 67.0963 20.7735 67.0963 20.7735C65.7408 21.0043 64.1647 21.9859 64.1647 23.453C64.1647 26.0057 67.0894 26.6053 69.9492 26.6053C71.8991 26.6053 76.6004 25.7857 76.6004 22.3497C76.6004 18.9049 71.2806 18.2347 68.6725 17.9838C68.2286 17.9415 68.6725 17.8577 68.6725 17.8577C72.563 16.8962 77.1206 15.8667 77.1206 10.9699C77.1206 7.28177 74.0629 6.30456 74.0629 5.67411C74.0629 5.32736 74.2722 5.00267 74.6618 4.98061C75.3377 4.94152 75.366 5.00078 75.7021 5.20127C75.7021 5.20127 75.8017 5.3696 75.8597 5.13822C75.894 5.00141 76.4743 2.71285 76.5059 2.53759C76.5447 2.32512 76.364 2.37997 76.364 2.37997C76.0242 2.34719 75.6725 2.30117 75.3395 2.30117ZM21.8453 4.0034C21.7763 4.02433 21.7665 4.11373 21.7665 4.11373C21.7665 4.11373 19.8896 8.72804 19.8121 8.92096C19.7352 9.11388 19.8751 9.12586 19.8751 9.12586C19.8751 9.12586 21.4349 9.67877 21.6089 9.75631C21.7823 9.83323 21.8453 9.70905 21.8453 9.70905C22.6952 8.66313 23.5488 8.00682 25.3759 8.00682C26.8057 8.00682 27.5194 8.54271 27.5194 9.83515V10.3237C27.5194 10.4971 27.4564 10.5129 27.4564 10.5129L23.0589 10.6232C20.167 10.6232 17.8262 12.7044 17.8262 16.3604C17.8262 19.2926 20.0391 21.1518 22.9959 21.1518C24.7442 21.1518 26.1249 20.3984 27.3933 19.3866C27.3933 19.3866 27.6033 19.0581 27.6613 19.3866C27.7193 19.715 27.8422 20.1368 27.9292 20.5056C27.9746 20.6966 28.1026 20.679 28.1026 20.679H34.2653C34.2653 20.679 34.5017 20.7572 34.5017 20.5056V18.961C34.5017 18.961 34.5477 18.7876 34.2968 18.7876H33.5876C33.4331 18.7876 33.4615 18.5039 33.4615 18.5039V9.96124C33.4615 6.24154 31.0645 4.72845 27.4249 4.72845C26.1387 4.72845 24.9011 4.90687 23.6894 5.37467C23.6894 5.37467 23.4246 5.53669 23.5791 5.16977C23.6528 4.9945 23.7209 4.79149 23.7209 4.79149C23.7209 4.79149 23.8035 4.61686 23.6106 4.53931C23.3981 4.46177 22.1694 4.08917 21.9399 4.00342C21.9012 3.98895 21.8683 3.99644 21.8453 4.0034ZM48.6555 4.0034C48.5862 4.02433 48.5767 4.11373 48.5767 4.11373C48.5767 4.11373 46.6998 8.72804 46.6223 8.92096C46.5454 9.11451 46.6853 9.12586 46.6853 9.12586C46.6853 9.12586 48.2451 9.6794 48.419 9.75631C48.5931 9.83386 48.6555 9.70905 48.6555 9.70905C49.5047 8.66313 50.3432 8.00682 52.1703 8.00682C53.6002 8.00682 54.3138 8.54271 54.3138 9.83515V10.3237C54.3138 10.4978 54.2664 10.5129 54.2664 10.5129L49.869 10.6232C46.9765 10.6232 44.6362 12.7037 44.6362 16.3604C44.6362 19.2914 46.8485 21.1518 49.8059 21.1518C51.5536 21.1518 52.9198 20.3984 54.1877 19.3866C54.1877 19.3866 54.4127 19.0581 54.4713 19.3866C54.5294 19.7144 54.6516 20.1368 54.7393 20.5056C54.7842 20.6973 54.9126 20.679 54.9126 20.679H61.0596C61.0596 20.679 61.3118 20.7565 61.3118 20.5056V18.961C61.3118 18.961 61.3577 18.7876 61.1069 18.7876H60.3976C60.2432 18.7876 60.2715 18.5039 60.2715 18.5039V9.96124C60.2715 6.24154 57.8594 4.72845 54.2191 4.72845C52.9337 4.72845 51.7118 4.90687 50.4994 5.37467C50.4994 5.37467 50.2347 5.53669 50.3891 5.16977C50.4629 4.9945 50.5152 4.77573 50.5152 4.77573C50.5152 4.77573 50.5978 4.61686 50.4049 4.53931C50.1924 4.4624 48.9788 4.08917 48.7499 4.00342C48.7111 3.98895 48.6786 3.99644 48.6555 4.0034ZM127.92 4.0034C127.85 4.02433 127.841 4.11373 127.841 4.11373C127.841 4.11373 125.964 8.72804 125.886 8.92096C125.809 9.11451 125.949 9.12586 125.949 9.12586C125.949 9.12586 127.509 9.6794 127.683 9.75631C127.857 9.83386 127.92 9.70905 127.92 9.70905C128.769 8.66313 129.607 8.00682 131.434 8.00682C132.864 8.00682 133.578 8.54271 133.578 9.83515V10.3237C133.578 10.4978 133.531 10.5129 133.531 10.5129L129.133 10.6232C126.24 10.6232 123.9 12.7037 123.9 16.3604C123.9 19.2914 126.113 21.1518 129.07 21.1518C130.818 21.1518 132.184 20.3984 133.452 19.3866C133.452 19.3866 133.677 19.0581 133.735 19.3866C133.793 19.7144 133.916 20.1368 134.003 20.5056C134.048 20.6973 134.177 20.679 134.177 20.679H140.324C140.324 20.679 140.576 20.7565 140.576 20.5056V18.961C140.576 18.961 140.622 18.7876 140.371 18.7876H139.662C139.507 18.7876 139.536 18.5039 139.536 18.5039V9.96124C139.536 6.24154 137.124 4.72845 133.483 4.72845C132.198 4.72845 130.976 4.90687 129.764 5.37467C129.764 5.37467 129.498 5.53669 129.653 5.16977C129.726 4.9945 129.779 4.77573 129.779 4.77573C129.779 4.77573 129.862 4.61686 129.669 4.53931C129.457 4.4624 128.243 4.08917 128.014 4.00342C127.975 3.98895 127.943 3.99644 127.92 4.0034ZM86.9242 4.72842C81.7576 4.72842 77.7668 7.84855 77.7668 12.9244C77.7668 18.0304 81.7576 21.1518 86.9242 21.1518C92.1242 21.1518 96.1288 18.0304 96.1288 12.9244C96.1288 7.84855 92.1242 4.72842 86.9242 4.72842ZM108.738 4.72842C106.566 4.72842 104.938 5.93386 103.332 7.15568C103.332 7.15568 103.174 7.37571 103.174 7.12416V4.85451C103.174 4.68051 103.017 4.77571 103.017 4.77571L96.1604 6.58827C96.1604 6.58827 96.0185 6.58827 96.0185 6.76165V8.33779C96.0185 8.51179 96.1762 8.43235 96.1762 8.43235C96.1762 8.43235 96.7795 8.28924 97.0115 8.2117C97.2429 8.13415 97.1691 8.32202 97.1691 8.32202V18.6457C97.1691 18.6457 97.2135 18.7876 97.0588 18.7876H96.1288C96.1288 18.7876 96.0185 18.7365 96.0185 18.9295V20.5214C96.0185 20.7338 96.1288 20.679 96.1288 20.679H104.262C104.262 20.679 104.372 20.7042 104.372 20.5686V18.9295C104.372 18.7365 104.214 18.7876 104.214 18.7876H103.237C103.083 18.7876 103.111 18.6773 103.111 18.6773V9.94545C103.111 9.79099 103.221 9.70903 103.221 9.70903C103.963 9.08488 104.726 8.51116 105.775 8.51116C106.652 8.51116 107.493 8.98463 107.493 9.89817V18.6773C107.493 18.6773 107.537 18.7876 107.382 18.7876H106.437C106.437 18.7876 106.263 18.775 106.263 18.9295V20.5686C106.263 20.7042 106.405 20.679 106.405 20.679H114.396C114.396 20.679 114.554 20.7338 114.554 20.5214V18.9295C114.554 18.7561 114.412 18.7876 114.412 18.7876H113.561C113.426 18.7876 113.451 18.63 113.451 18.63V9.20466C113.451 7.47028 112.866 4.72842 108.738 4.72842ZM11.1748 4.74416C9.73362 4.74416 8.63788 5.32985 7.25025 6.16269C7.25025 6.16269 7.09263 6.23834 7.09263 6.08388V4.90177C7.09263 4.7284 6.93502 4.77568 6.93502 4.77568L0.141853 6.5252C0.141853 6.5252 0 6.5252 0 6.69857V8.27472C0 8.48718 0.157614 8.41657 0.157614 8.41657L0.945685 8.22743C0.945685 8.22743 1.13482 8.14106 1.13482 8.35352V23.4687C1.13482 23.4687 1.14239 23.6894 0.929923 23.6894H0.189137C0.189137 23.6894 0 23.6622 0 23.8943V25.3758C0 25.5883 0.252183 25.5807 0.252183 25.5807H9.03129C9.03129 25.5807 9.20466 25.5145 9.20466 25.3601V23.8943C9.20466 23.6818 9.01553 23.6894 9.01553 23.6894H7.28177C7.08822 23.6894 7.09263 23.4214 7.09263 23.4214V20.6947C7.09263 20.5402 7.21873 20.6001 7.21873 20.6001C8.09065 21.044 9.31941 21.1675 10.2449 21.1675C15.0547 21.1675 17.8419 16.7228 17.8419 12.2781C17.8419 7.77035 14.9122 4.74416 11.1748 4.74416ZM122.718 4.7599C122.679 4.75637 122.64 4.77563 122.64 4.77563L115.815 6.65124C115.815 6.65124 115.689 6.65754 115.689 6.79309V8.32195C115.689 8.53441 115.878 8.44804 115.878 8.44804C115.878 8.44804 116.325 8.35221 116.713 8.29043C116.908 8.25825 116.855 8.43921 116.855 8.57413V18.6299C116.855 18.6299 116.907 18.7875 116.713 18.7875H115.752C115.752 18.7875 115.626 18.7327 115.626 18.9451V20.5528C115.626 20.7457 115.752 20.6789 115.752 20.6789H123.743C123.936 20.6789 123.869 20.5213 123.869 20.5213C123.869 20.5213 123.864 19.1954 123.869 18.9451C123.874 18.732 123.727 18.7875 123.727 18.7875H122.939C122.746 18.7875 122.797 18.6457 122.797 18.6457V4.88596C122.797 4.78919 122.757 4.76328 122.718 4.7599ZM68.3888 6.71431C70.8268 6.71431 71.8247 11.4736 71.8247 13.1765C71.8247 14.689 71.3406 15.2885 70.1383 15.2885C67.7009 15.2885 66.6865 10.5286 66.6865 8.82634C66.6865 7.31261 67.1865 6.71431 68.3888 6.71431ZM85.9155 7.12411C89.1982 7.12411 90.1868 12.9249 90.1868 15.194C90.1868 16.8962 89.719 18.756 87.9644 18.756C84.6823 18.756 83.7089 12.9552 83.7089 10.6862C83.7089 9.51921 83.7038 7.12411 85.9155 7.12411ZM8.02256 8.08555C9.03003 8.08555 11.8999 8.36989 11.8999 14.0434C11.8999 17.5746 11.0437 18.7718 9.09433 18.7718C7.53458 18.7718 7.09263 17.6054 7.09263 16.2184V8.47959C7.09263 8.26649 7.26601 8.21165 7.26601 8.21165L8.02256 8.08555ZM26.5737 12.5145H27.3618C27.5547 12.5145 27.5194 12.6406 27.5194 12.6406V15.5407C27.5194 16.7386 27.2174 17.8419 25.7226 17.8419C24.1295 17.8419 23.784 16.4549 23.784 15.2255C23.784 13.6178 24.9484 12.5145 26.5737 12.5145ZM53.3839 12.5145H54.172C54.3649 12.5145 54.3138 12.6406 54.3138 12.6406V15.5407C54.3138 16.7386 54.0276 17.8419 52.5328 17.8419C50.9409 17.8419 50.5784 16.4555 50.5784 15.2255C50.5784 13.6178 51.7592 12.5145 53.3839 12.5145ZM132.648 12.5145H133.436C133.629 12.5145 133.578 12.6406 133.578 12.6406V15.5407C133.578 16.7386 133.292 17.8419 131.797 17.8419C130.205 17.8419 129.843 16.4555 129.843 15.2255C129.843 13.6178 131.023 12.5145 132.648 12.5145ZM69.3975 21.3725C69.4363 21.3726 69.4605 21.3882 69.4605 21.3882C70.5311 22.0401 71.3046 22.5319 71.3046 23.9258C71.3046 24.7132 70.8879 25.0921 70.0753 25.0921C69.1648 25.0921 68.7355 24.2404 68.7355 23.453C68.7355 22.7576 68.9858 21.7167 69.2241 21.467C69.2963 21.391 69.3585 21.3724 69.3975 21.3725Z" fill="#FFF51B"/>
            <path d="M141.326 2.77461C141.222 2.7185 141.056 2.69076 140.827 2.69076H140.476V3.50594H140.848C141.022 3.50594 141.153 3.48889 141.24 3.45616C141.401 3.39438 141.481 3.27711 141.481 3.10373C141.481 2.94045 141.429 2.83072 141.326 2.77461ZM140.889 2.40708C141.173 2.40708 141.381 2.43482 141.513 2.48904C141.749 2.58739 141.867 2.77968 141.867 3.06654C141.867 3.26954 141.793 3.42022 141.646 3.51605C141.568 3.56712 141.459 3.60369 141.319 3.62638C141.493 3.65473 141.622 3.72852 141.703 3.84893C141.784 3.96872 141.824 4.08662 141.824 4.20073V4.36717C141.824 4.4195 141.826 4.47561 141.831 4.53613C141.834 4.59603 141.842 4.63511 141.852 4.65403L141.867 4.68237H141.492C141.49 4.67481 141.488 4.66724 141.486 4.65968C141.484 4.65211 141.483 4.64394 141.481 4.63446L141.472 4.56133V4.38165C141.472 4.11938 141.399 3.94663 141.254 3.86215C141.167 3.81363 141.015 3.78965 140.798 3.78965H140.476V4.68237H140.09V2.40706L140.889 2.40708ZM139.667 2.29549C139.319 2.64287 139.146 3.06212 139.146 3.55388C139.146 4.04879 139.319 4.47056 139.664 4.81984C140.012 5.16848 140.433 5.34312 140.93 5.34312C141.426 5.34312 141.849 5.16848 142.196 4.81984C142.544 4.47056 142.717 4.04879 142.717 3.55388C142.717 3.06212 142.544 2.64287 142.196 2.29549C141.846 1.94685 141.424 1.77221 140.93 1.77221C140.437 1.77221 140.017 1.94685 139.667 2.29549ZM142.394 5.0178C141.99 5.42381 141.501 5.62619 140.927 5.62619C140.353 5.62619 139.866 5.42381 139.463 5.0178C139.063 4.61431 138.863 4.12507 138.863 3.55073C138.863 2.98143 139.065 2.49534 139.469 2.09185C139.872 1.68962 140.357 1.48914 140.927 1.48914C141.501 1.48914 141.99 1.68962 142.394 2.09185C142.798 2.49345 143 2.98017 143 3.55073C143 4.12318 142.798 4.61242 142.394 5.0178Z" fill="#FFF51B"/>
        </svg>
        
      
    </div>    
    <div class="screens-wrap">
        <img class="screen" id="product" src="images/product-screen.png" alt="">
        <img class="screen" id="basket" src="images/basket-screen.png" alt="">

    </div>  
    <div class="main-para">
        <p >To assess the user experience quality of ${client.name}'s website, we undertook a comprehensive CRO audit. Our goal was to pinpoint any areas of performance that could be enhanced.</p>
        <p> This involved a meticulous analysis of your analytics, a deep dive into the user journey funnel, and rigorous usability testing involving 50 participants. Our aim was to uncover valuable insights that could lead to significant improvements for your website.</p>
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


