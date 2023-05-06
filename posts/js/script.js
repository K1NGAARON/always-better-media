function createAllContent(e) {
    const target = document.querySelector('#allContent');

    if (target) {
        const cards = content.map(content => {

            return `
                <div class="card all-cards ${content.date} ${content.category} ${content.tag}">
                    <div class="card-image">
                        <img src="${content.img}" alt="${content.title}">
                        <div class="overlay"></div>
                    </div>
                    <div class="card-content">
                        <p class="tag">
                            ${content.tag}
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

function highlightedContent(e) {
    const target = document.querySelector('#relatedContent');
    
    if (target) {
        const cards = content.slice(0, 4).map(content => {

            return `
                <div class="card related-card ${content.date} ${content.category} ${content.tag}">
                    <div class="card-image">
                        <img src="${content.img}" alt="${content.title}">
                        <div class="overlay"></div>
                    </div>
                    <div class="card-content">
                        <p class="tag">
                            ${content.tag}
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


$(document).ready(function() {
    createAllContent();
    highlightedContent()
});