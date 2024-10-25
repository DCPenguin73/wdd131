const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his \"Aunt Pol\" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.querySelector('#filter-button');
    const filterBox = document.querySelector('.filter-box');

    filterButton.addEventListener('click', () => {
        filterBox.classList.toggle('minimized');
        if (filterBox.classList.contains('minimized')) {
            filterBox.style.height = '100px'; // Adjust height as needed
            filterBox.style.overflowY = 'scroll';
        } else {
            filterBox.style.height = ''; // Reset height
            filterBox.style.overflowY = ''; // Reset overflow
        }
    });

    const handleResize = () => {
        if (window.innerWidth > 768) {
            filterButton.style.display = 'none';
            filterBox.classList.remove('minimized');
            filterBox.style.height = ''; // Reset height
            filterBox.style.overflowY = ''; // Reset overflow
        } else {
            filterButton.style.display = 'block';
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
});

const articlesContainer = document.querySelector('.output'); // Adjust the selector as needed

articles.forEach(article => {
	const articleElement = document.createElement('article');
	articleElement.classList.add('article-class'); // Adjust the class as needed
	const articleContent = `
		<section class="post-sidebar">
			<h2 class="date">${article.date}</h2>
			<p class="ages">${article.ages}</p>
			<p class="genre">${article.genre}</p>
			<p class="stars">${article.stars}</p>
		</section>
		<section class="post-content">
			<h2 class="title">${article.title}</h2>
			<figure>
				<img src="${article.imgSrc}" alt="${article.imgAlt}">
			</figure>
			<p class="description">
				${article.description} <a href="https://byui-cit.github.io/advcss/resources/review-webpage-new.html#">Read More...</a>
			</p>
		</section>
	`;

	articleElement.innerHTML = articleContent;
	articlesContainer.appendChild(articleElement);
});