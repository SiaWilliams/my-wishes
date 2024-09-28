// Функция для добавления нового предмета в список желаемого
document.getElementById('add-item').addEventListener('click', function() {
    const name = document.getElementById('item-name').value;
    const url = document.getElementById('item-url').value;
    const imageUrl = document.getElementById('item-image').value;

    if (name && url && imageUrl) {
        const wishlist = document.getElementById('wishlist');
        const item = document.createElement('div');
        item.className = 'wishlist-item';

        item.innerHTML = `
            <div class="wishlist-info">
                <img src="${imageUrl}" alt="${name}">
                <div>
                    <h3>${name}</h3>
                    <a href="${url}" target="_blank">View Item</a>
                </div>
            </div>
            <button onclick="this.parentElement.remove()">Remove</button>
        `;

        wishlist.appendChild(item);

        // Очистка полей после добавления предмета
        document.getElementById('item-name').value = '';
        document.getElementById('item-url').value = '';
        document.getElementById('item-image').value = '';
    } else {
        alert('Please fill in all fields');
    }
});