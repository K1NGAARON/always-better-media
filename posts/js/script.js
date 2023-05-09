let displayedPosts = 9;

function loadMorePosts(e) {
    e.preventDefault();

    removeLastCardClass();

    const target = document.querySelector('#allContent');
    const remainingPosts = content.slice(displayedPosts);

    if (remainingPosts.length > 0) {
        const newCards = remainingPosts.slice(0, 9).map(content => {
            const tagWithSpaces = content.tag.replace(/-/g, ' ');

            return `
                <div class="card all-cards ${content.date} ${content.category} ${content.tag}">
                    <div class="card-image">
                        <img src="${content.img}" alt="${content.title}">
                        <div class="overlay"></div>
                    </div>
                    <div class="card-content">
                        <p class="tag">
                            ${tagWithSpaces}
                        </p>
                        <h5>
                            ${content.title}
                        </h5>
                        <a href="/posts/${content.link}" class="btn ghost no-border">
                            Lees meer <i class="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    
        target.insertAdjacentHTML('beforeend', newCards);
        displayedPosts += 9;
    }

    addLastCardClass();
};

function removeLastCardClass(e) {
    $('.card').removeClass('last-card');
};

function addLastCardClass(e) {
    if (displayedPosts % 2 === 0) {
    } else {
        $('.card').last().addClass('last-card');
    }
};

function createAllContent(e) {
    const target = document.querySelector('#allContent');

    if (target) {
        const cards = content.slice(0, displayedPosts).map(content => {
            const tagWithSpaces = content.tag.replace(/-/g, ' ');

            return `
                <div class="card all-cards ${content.date} ${content.category} ${content.tag}">
                    <div class="card-image">
                        <img src="${content.img}" alt="${content.title}">
                        <div class="overlay"></div>
                    </div>
                    <div class="card-content">
                        <p class="tag">
                            ${tagWithSpaces}
                        </p>
                        <h5>
                            ${content.title}
                        </h5>
                        <a href="/posts/${content.link}" class="btn ghost no-border">
                            Lees meer <i class="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    
        target.innerHTML = cards;
    }

    addLastCardClass();
};

function highlightedContent(e) {
    const target = document.querySelector('#relatedContent');
    
    if (target) {
        const cards = content.slice(0, 4).map(content => {
            const tagWithSpaces = content.tag.replace(/-/g, ' ');

            return `
                <div class="card related-card ${content.date} ${content.category} ${content.tag}">
                    <div class="card-image">
                        <img src="${content.img}" alt="${content.title}">
                        <div class="overlay"></div>
                    </div>
                    <div class="card-content">
                        <p class="tag">
                            ${tagWithSpaces}
                        </p>
                        <h5>
                            ${content.title}
                        </h5>
                    </div>
                    <a href="/posts/${content.link}" class="btn ghost no-border">
                        Lees meer <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
            `;
        }).join('');
    
        target.innerHTML = cards;
    }
};

function copyFacebook() {
    // Get the current URL
    let currentUrl = window.location.href;
    
    // Copy the URL to the clipboard
    navigator.clipboard.writeText(currentUrl);
    
    // Open Facebook in a new tab with the URL in the post field
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl), '_blank');
};

function copyTwitter() {
    let url = encodeURIComponent(window.location.href);
    let tweetUrl = 'https://twitter.com/intent/tweet?url=' + url;
    window.open(tweetUrl, '_blank');
};

function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        alert("URL copied to clipboard!");
      })
      .catch(() => {
        alert("Failed to copy URL to clipboard");
      });
};


$(document).ready(function() {
    createAllContent();
    highlightedContent();

    $('#loadMore').click(loadMorePosts);

    $('#facebook').click(copyFacebook);
    $('#twitter').click(copyTwitter);
    $('#link').click(copyLink);
});