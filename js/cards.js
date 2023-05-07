const content = [
    {
        title: "1. Apple Music Live returns for a brand-new season with Ed Sheeran",
        tag: "onze-mensen",
        category: "podcast",
        img: "/posts/img/image1.jpg",
        link: "dit-is-een-voorbeeld/",
        date: "2023-05-05",
    },
    {
        title: "2. Apple reports second quarter results",
        tag: "brand-updates",
        category: "podcast",
        img: "/posts/img/image2.jpg",
        link: "",
        date: "2023-04-05",
    },
    {
        title: "3. Apple launches 20 fun new games for its award-winning Apple Arcade service",
        tag: "brand-updates",
        category: "blog",
        img: "/posts/img/image3.jpg",
        link: "",
        date: "2023-03-27",
    },
    {
        title: "4. Apple, Google partner on an industry specification to address unwanted tracking",
        tag: "onze-mensen",
        category: "blog",
        img: "/posts/img/image4.jpg",
        link: "",
        date: "2022-08-14",
    },
    {
        title: "5. Apple Saket will open this Thursday, April 20, in New Delhi",
        tag: "onze-mensen",
        category: "podcast",
        img: "/posts/img/image5.jpg",
        link: "",
        date: "2022-01-03",
    },
    {
        title: "6. Apple Card's new high-yield Savings account is now available, offering a 4.15 percent APY",
        tag: "welzijn-verhogen",
        category: "blog",
        img: "/posts/img/image6.jpg",
        link: "",
        date: "2023-05-06",
    },
    {
        title: "7. Apple Music Live returns for a brand-new season with Ed Sheeran",
        tag: "welzijn-verhogen",
        category: "podcast",
        img: "/posts/img/image1.jpg",
        link: "post-1/",
        date: "2023-05-05",
    },
    {
        title: "8. Apple Saket will open this Thursday, April 20, in New Delhi",
        tag: "leiderschap",
        category: "podcast",
        img: "/posts/img/image5.jpg",
        link: "",
        date: "2022-01-03",
    },
    {
        title: "9. Apple launches 20 fun new games for its award-winning Apple Arcade service",
        tag: "onze-mensen",
        category: "blog",
        img: "/posts/img/image3.jpg",
        link: "",
        date: "2023-03-27",
    },
    {
        title: "10. Apple reports second quarter results",
        tag: "leiderschap",
        category: "podcast",
        img: "/posts/img/image2.jpg",
        link: "",
        date: "2023-04-05",
    },
    {
        title: "11. Apple, Google partner on an industry specification to address unwanted tracking",
        tag: "leiderschap",
        category: "blog",
        img: "/posts/img/image4.jpg",
        link: "",
        date: "2022-08-14",
    },
    {
        title: "12. Apple Saket will open this Thursday, April 20, in New Delhi",
        tag: "welzijn-verhogen",
        category: "podcast",
        img: "/posts/img/image5.jpg",
        link: "",
        date: "2022-01-03",
    },
];

const highlightedToShow = 6
const archivedToShow = 8

function sortPosts() {
    content.sort((a, b) => new Date(b.date) - new Date(a.date));
};


function highlightedContent(e) {
    const target = document.querySelector('#content');

    if (target) {
        const cards = content.slice(0, highlightedToShow).map(content => {
            const tagWithSpaces = content.tag.replace(/-/g, ' ');

            return `
                <div class="card ${content.date} ${content.category} ${content.tag}">
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
};

function archiveContent(e) {
    const target = document.querySelector('#archive');

    if (target) {
        const cards = content.slice(highlightedToShow, highlightedToShow + archivedToShow).map(content => {
            const tagWithSpaces = content.tag.replace(/-/g, ' ');

            return `
                <div class="card-wrapper">
                    <img src="${content.img}" alt="${content.title}">
                    <div class="card archive-card ${content.date} ${content.category} ${content.tag}">
                        <div class="card-content">
                            <p class="tag">
                                ${tagWithSpaces}
                            </p>
                            <h5>
                                ${content.title}
                            </h5>
                        </div>
                        <a href="/posts/${content.link}" class="btn ghost">
                            Lees meer
                        </a>
                    </div>
                </div>
            `;
    
        }).join('');
    
        target.innerHTML = cards;
    }
};


$(document).ready(function() {
    sortPosts();
    highlightedContent();
    archiveContent();
});