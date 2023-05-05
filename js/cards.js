const content = [
    {
        title: "Apple Music Live returns for a brand-new season with Ed Sheeran",
        tag: "health",
        category: "podcast",
        img: "/posts/img/image1.jpg",
        link: "",
        date: "2023-05-05",
    },
    {
        title: "Apple reports second quarter results",
        tag: "health",
        category: "podcast",
        img: "/posts/img/image2.jpg",
        link: "",
        date: "2023-04-05",
    },
    {
        title: "Apple launches 20 fun new games for its award-winning Apple Arcade service",
        tag: "business",
        category: "blog",
        img: "/posts/img/image3.jpg",
        link: "",
        date: "2023-03-27",
    },
    {
        title: "Apple, Google partner on an industry specification to address unwanted tracking",
        tag: "Health",
        category: "blog",
        img: "/posts/img/image4.jpg",
        link: "",
        date: "2022-08-14",
    },
    {
        title: "Apple Saket will open this Thursday, April 20, in New Delhi",
        tag: "science",
        category: "podcast",
        img: "/posts/img/image5.jpg",
        link: "",
        date: "2022-01-03",
    },
    {
        title: "Apple Card's new high-yield Savings account is now available, offering a 4.15 percent APY",
        tag: "science",
        category: "blog",
        img: "/posts/img/image6.jpg",
        link: "",
        date: "2023-05-02",
    },
];

function createCards(e) {
    const target = document.querySelector('#content');

    const cards = content.map(content => {
        // const tagWithSpaces = content.tag.replace(/-/g, ' ');

        // Check the href on the a tag wrapping this card.

        return `
            <div class="card ${content.date} ${content.category} ${content.tag}">
                <a href="/posts/${content.link}">
                    <img src="${content.img}" alt="${content.title}">
                    <div class="card-content">
                        <p class="tag">
                            ${content.tag}
                        </p>
                        <h5>
                            ${content.title}
                        </h5>
                        <a class="btn">
                            Lees meer
                        </a>
                    </div>
                </a>
            </div>
        `;
    }).join('');

    target.innerHTML = cards;
};