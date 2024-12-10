import { books } from './books.mjs';

const container = document.getElementById('book-container');

function loadCompletedStatus() {
    const completedStatus = JSON.parse(localStorage.getItem('completedStatus')) || {};
    books.forEach(book => {
        book.completed = completedStatus[book.title] || false;
    });
}

function saveCompletedStatus() {
    const completedStatus = {};
    books.forEach(book => {
        completedStatus[book.title] = book.completed;
    });
    localStorage.setItem('completedStatus', JSON.stringify(completedStatus));
}

function displayBooks(filter) {
    container.innerHTML = '';
    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.completed = book.completed;

        card.innerHTML = `
            <img src="${book.image}" class="book_img" alt="Book Cover">
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Publication Year:</strong> ${book.year}</p>
            <p>${book.description}</p>
            <button onclick="markCompleted(this)" class="${book.completed ? 'completed' : ''}">
                ${book.completed ? 'Completed' : 'Mark as Completed'}
            </button>
        `;

        if (filter === 'all' || (filter === 'completed' && book.completed) || (filter === 'incomplete' && !book.completed)) {
            container.appendChild(card);
        }
    });
}

window.markCompleted = function(button) {
    const card = button.parentElement;
    const title = card.querySelector('h2').textContent;
    const book = books.find(b => b.title === title);
    book.completed = !book.completed;
    saveCompletedStatus();
    displayBooks(currentFilter);
};

let currentFilter = 'all';
window.filterBooks = function(filter) {
    currentFilter = filter;
    displayBooks(filter);
};

loadCompletedStatus();
displayBooks('all');