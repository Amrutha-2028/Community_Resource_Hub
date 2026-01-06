//------------- category filter-------------\\
let currentData = communities;

const listContainer = document.getElementById('communityList');
const filterButtons = document.querySelectorAll('.categoryButton');

// makes the cards
function displayCommunities(dataToDisplay) {
    // code for the no. of results shown
    const countElement = document.getElementById('resultsCount');
    countElement.innerText = `Showing ${dataToDisplay.length} resources!`;
    
    // code to display the resource cards
    listContainer.innerHTML = ""; 
    dataToDisplay.forEach(item => {
        const card = document.createElement('div');
        card.className = 'community-card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><b>🏷️Category: </b> ${item.category}</p>
            <p><b>📍Address: </b> ${item.address}</p>
            <p><b>📞Phone: </b> ${item.phone}</p>
            ${item.email ? `<p><b>✉️Email: </b> ${item.email}</p>` : ''}
            <p><b>⭐Rating: </b> ${item.rating} (For demonstration only) </p>
            <p><b>🌐Website: </b> <a href="${item.website}" target="_blank">Visit Site</a></p>
        `;
        listContainer.appendChild(card); 
    });
}

// gets all the cards of category button clicked
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.getAttribute('data-category');

        if (selectedCategory === "all") {
            currentData = communities;
        } 
        
        else {
            currentData = communities.filter(item => item.category === selectedCategory);
        }
        displayCommunities(currentData);
    });
});

displayCommunities(communities);


//-------------alphabetical (A-Z) filter-------------\\
const sortAlphaLink = document.getElementById('sortAlpha');
if (sortAlphaLink){
    sortAlphaLink.onclick = function(e) {
        //prevents the page from refresing so js can do the work w/o refresing
        e.preventDefault();

        //hides disclaimer
        hideDisclaimer();

        // puts the data in alphabetical order
        currentData.sort((a, b) => a.name.localeCompare(b.name));
        displayCommunities(currentData);
    };
};

//-------------alphabetical (Z-A) filter-------------\\
const sortZtoALink = document.getElementById('sortZtoA');
if (sortZtoALink){
    sortZtoALink.onclick = function(e) {
        //prevents the page from refresing so js can do the work w/o refresing
        e.preventDefault();

        //hides disclaimer
        hideDisclaimer();

        // puts the data in alphabetical order
        currentData.sort((a, b) => b.name.localeCompare(a.name));
        displayCommunities(currentData);
    };
};

//-------------functions to show/hide the disclaimer div-------------\\
function showDisclaimer() {
    const disclaimer = document.getElementById('ratingDisclaimer');
    if (disclaimer) disclaimer.style.display = 'block';
}

function hideDisclaimer() {
    const disclaimer = document.getElementById('ratingDisclaimer');
    if (disclaimer) disclaimer.style.display = 'none';
}

//-------------rating (high-low) filter-------------\\
const ratingHightoLowLink = document.getElementById('ratingHightoLow');
if (ratingHightoLowLink){
    ratingHightoLowLink.onclick = function(e) {
        //prevents the page from refresing so js can do the work w/o refresing
        e.preventDefault();

        //shows disclaimer
        showDisclaimer();
        
        //sorts the data from high to low rating
        currentData.sort((a, b) => b.rating - a.rating);
        displayCommunities(currentData);
    };
};

//-------------rating (low-high) filter-------------\\
const ratingLowtoHighLink = document.getElementById('ratingLowtoHigh');
if (ratingLowtoHighLink){
    ratingLowtoHighLink.onclick = function(e) {
        //prevents the page from refresing so js can do the work w/o refresing
        e.preventDefault();

        //shows disclaimer
        showDisclaimer();

        //sorts the data from high to low rating
        currentData.sort((a, b) => a.rating - b.rating);
        displayCommunities(currentData);
    };
};

//-------------search-------------\\
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', (e) => {
    // gets the text inputted from the search
    const searchTerm = e.target.value.toLowerCase(); //.toLowerCase ensures the input is not case sensitive
    
    //filters data to the show results related to input
    const filteredResults = currentData.filter(item => {
        return item.name.toLowerCase().includes(searchTerm);
    });

    displayCommunities(filteredResults);
});


displayCommunities(communities);