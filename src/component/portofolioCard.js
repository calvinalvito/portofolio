// portfolioCard.js

function createPortfolioCard(portfolio) {
    const cardContainer = document.getElementById("portfolioContainer");
  
    const card = document.createElement("div");
    card.className = "w-full mb-8 overflow-hidden lg:w-1/2 lg:px-4";
  
    card.innerHTML = `
      <img src="${portfolio.image}" alt="${portfolio.judul}" class="rounded-sm mb-[18px] object-cover">
      <a href="${portfolio.viewMoreLink}" class="text-white text-[22px] hover:text-opacity-80 block font-bold mb-[4px]">${portfolio.judul}</a>
      <p class="text-black50 mb-[18px] overflow-hidden" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
        ${portfolio.description}
      </p>
      <div class="inline-flex gap-[18px]">
        <a href="${portfolio.viewMoreLink}" class="group px-[12px] py-2 lg:px-[18px] bg-green50 rounded-[100px] justify-center items-center gap-[18px] flex group-hover:opacity-80">
          <div class="w-[27px] h-[27px] relative group-hover:opacity-80">
            <div class="absolute">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0966 3.77419C18.9787 1.88419 21.8778 1.73119 23.5732 3.43106C25.2675 5.13206 25.1145 8.04356 23.2323 9.93356L20.5053 12.6707M11.3028 15.7498C9.60746 14.0488 9.76159 11.1373 11.6426 9.24844L14.0625 6.81956" stroke="#F3F3F3" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M15.6982 11.25C17.3925 12.951 17.2395 15.8625 15.3574 17.7514L12.6304 20.4885L9.90335 23.2256C8.02123 25.1156 5.1221 25.2686 3.42673 23.5688C1.73248 21.8678 1.88548 18.9563 3.7676 17.0663L6.4946 14.3291" stroke="#F3F3F3" stroke-width="1.5" stroke-linecap="round"/>
            </svg>            
            </div>
          </div>
          <div class="text-zinc-100 text-lg font-normal group-hover:opacity-80">View More</div>
        </a>
        <a href="${portfolio.viewMoreLink}" class="group px-[12px] py-2 lg:px-[18px] lg:py-3 bg-green50 rounded-[100px] justify-center items-center gap-[18px] flex group-hover:opacity-80">
          <div class="w-[27px] h-[27px] relative group-hover:opacity-80">
            <div class="absolute">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_17_415)">
                <path d="M15.4957 16.2439C16.3575 18.7979 16.937 21.4387 17.2237 24.1189C16.027 24.5379 14.768 24.7513 13.5 24.75C11.2694 24.7534 9.08856 24.0906 7.23711 22.8465C8.09982 21.2479 9.27555 19.8393 10.6942 18.7048C12.1129 17.5702 13.7455 16.7329 15.4946 16.2428L15.4957 16.2439ZM24.2696 16.7648C23.4663 19.4043 21.7232 21.6577 19.3702 23.0985C19.0557 20.6262 18.5057 18.1897 17.7277 15.822C19.9527 15.5921 22.2001 15.9159 24.2696 16.7648ZM13.6631 11.7956C14.0366 12.5584 14.3865 13.3369 14.7094 14.1278C10.8131 15.2697 7.50645 17.8688 5.47649 21.3851C4.3358 20.2163 3.46108 18.8148 2.91217 17.2766C2.36326 15.7384 2.15311 14.0998 2.29611 12.4729C6.05699 13.2694 10.0249 13.0376 13.6631 11.7956ZM22.185 6.3495C24.0593 8.63847 24.9638 11.5699 24.705 14.517C22.2302 13.5855 19.5617 13.2877 16.9425 13.6508C16.5809 12.7369 16.185 11.837 15.7556 10.953C18.1657 9.83059 20.346 8.26952 22.185 6.3495ZM8.17424 3.58875C9.85542 5.49567 11.3369 7.56974 12.5955 9.7785C9.40253 10.7954 5.99957 10.9622 2.72249 10.2623C3.58498 7.40394 5.54545 5.00413 8.17424 3.58875ZM13.5 2.25C16.1865 2.25 18.6536 3.19163 20.5875 4.76325C18.9129 6.51954 16.9201 7.94197 14.715 8.955C13.473 6.73177 12.0187 4.63399 10.3725 2.691C11.3891 2.39774 12.4419 2.24928 13.5 2.25Z" fill="#F3F3F3"/>
                </g>
                <defs>
                <clipPath id="clip0_17_415">
                <rect width="27" height="27" fill="white"/>
                </clipPath>
                </defs>
              </svg>            
            </div>
          </div>
          <div class="text-zinc-100 text-lg font-normal group-hover:opacity-80">View Dribbble</div>
        </a>
      </div>
    `;
  
    cardContainer.appendChild(card);
  }
  
  // Fetch JSON data from a separate file
  function filterContent(type) {
    event.preventDefault();
    const cardContainer = document.getElementById("portfolioContainer");

    // Fetch JSON data from a separate file
    fetch('dist/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Filter portfolios based on the selected type
            const filteredPortfolios = data.portfolios.filter(portfolio => portfolio.type === type);

            // Clear the existing portfolio container
            cardContainer.innerHTML = "";

            // Check if there are portfolios to display
            if (filteredPortfolios.length === 0) {
                cardContainer.innerHTML = "<p>No portfolios found for the selected type.</p>";
            } else {
                // Populate portfolio cards using the external component
                filteredPortfolios.forEach(createPortfolioCard);
            }

            // Reset underline of all links
            resetLinkUnderline();

            // Set underline for the selected link
            const selectedLink = document.querySelector(`a[onclick="filterContent('${type}')"]`);
            if (selectedLink) {
                selectedLink.style.textDecoration = 'underline';
                selectedLink.style.textUnderlineOffset = '18px';
                selectedLink.style.textDecorationColor = 'green';
            }
        })
        .catch(error => {
            console.error('Error fetching portfolio data:', error);
            cardContainer.innerHTML = "<p>Error fetching portfolio data. Please try again later.</p>";
        });
}

function resetLinkUnderline() {
    // Reset underline of all links
    const allLinks = document.querySelectorAll('.filter-link');
    allLinks.forEach(link => {
        link.style.textDecoration = 'none'; // Remove underline
    });
}




  