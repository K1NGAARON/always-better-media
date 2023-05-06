function createAllContent(e) {
    const target = document.querySelector('#allContent');

    if (target) {
        const cards = content.map(content => {

            return `
                <div class="card ${content.date} ${content.category} ${content.tag}">
                    <img src="${content.img}" alt="${content.title}">
                    <div class="card-content">
                        <p class="tag">
                            ${content.tag}
                        </p>
                        <h5>
                            ${content.title}
                        </h5>
                        <a href="/posts/${content.link}" class="btn ghost">
                            Lees meer
                        </a>
                    </div>
                    <div class="overlay"></div>
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
                <div class="card ${content.date} ${content.category} ${content.tag}">
                    <img src="${content.img}" alt="${content.title}">
                    <div class="card-content">
                        <p class="tag">
                            ${content.tag}
                        </p>
                        <h5>
                            ${content.title}
                        </h5>
                        <a href="/posts/${content.link}" class="btn ghost">
                            Lees meer
                        </a>
                    </div>
                    <div class="overlay"></div>
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