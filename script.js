document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            category: "electronics",
            price: 59.99,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "High-quality wireless headphones with deep bass and comfortable earcups. Perfect for music lovers and gamers."
        },
        {
            id: 2,
            name: "Men's Casual T-Shirt",
            category: "apparel",
            price: 19.99,
            rating: 4.0,
            image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Soft cotton t-shirt, ideal for everyday wear. Available in various colors and sizes."
        },
        {
            id: 3,
            name: "Smart LED TV 55 inch",
            category: "electronics",
            price: 799.00,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1593789382676-5602d66ee364?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Experience stunning visuals with this 4K Smart LED TV. Built-in streaming apps and voice control."
        },
        {
            id: 4,
            name: "Classic Leather Wallet",
            category: "apparel",
            price: 34.50,
            rating: 4.3,
            image: "https://images.unsplash.com/photo-1628122394144-8d99c43d2c88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Durable and stylish genuine leather wallet with multiple card slots and a coin pocket."
        },
        {
            id: 5,
            name: "Coffee Maker",
            category: "home",
            price: 89.99,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1541097235255-a0c36b801a1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Programmable coffee maker with a 12-cup capacity. Enjoy fresh coffee every morning."
        },
        {
            id: 6,
            name: "Science Fiction Novel",
            category: "books",
            price: 14.99,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1532012197247-ebef9e612fcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "An enthralling science fiction novel exploring distant galaxies and futuristic societies."
        },
        {
            id: 7,
            name: "Gaming Mouse",
            category: "electronics",
            price: 49.99,
            rating: 4.4,
            image: "https://images.unsplash.com/photo-1603481273934-0994d5ff1a77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "High-precision gaming mouse with customizable RGB lighting and programmable buttons."
        },
        {
            id: 8,
            name: "Women's Summer Dress",
            category: "apparel",
            price: 29.99,
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1601007746560-65342a12128e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Light and airy summer dress, perfect for warm weather. Floral patterns available."
        },
        {
            id: 9,
            name: "Blender",
            category: "home",
            price: 69.99,
            rating: 4.1,
            image: "https://images.unsplash.com/photo-1628102491689-548482458428?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Powerful blender with multiple speed settings, ideal for smoothies, soups, and more."
        },
        {
            id: 10,
            name: "Fantasy Epic Series",
            category: "books",
            price: 49.99,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1548048026-5a1a94558cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "A complete set of the best-selling fantasy epic series. Immerse yourself in a world of magic and adventure."
        }
    ];

    let filteredProducts = [...products];

    const productGrid = document.getElementById('product-grid');
    const productSearch = document.getElementById('product-search');
    const categoryFilter = document.getElementById('category-filter');
    const priceRange = document.getElementById('price-range');
    const priceValueDisplay = document.getElementById('price-value');
    const ratingFilterContainer = document.getElementById('rating-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const productDetailsModal = document.getElementById('product-details-modal');
    const closeButton = document.querySelector('.modal .close-button');
    const modalProductDetails = document.getElementById('modal-product-details');

    // Function to render product cards
    const renderProducts = (productsToRender) => {
        productGrid.innerHTML = ''; // Clear existing products
        if (productsToRender.length === 0) {
            productGrid.innerHTML = '<p class="no-results">No products found matching your criteria.</p>';
            return;
        }

        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.dataset.id = product.id; // Store product ID for details

            const ratingStars = '<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating)) +
                                (product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : '');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <div class="rating">
                        ${ratingStars}
                        <span>(${product.rating})</span>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    };

    // Function to apply all filters
    const applyFilters = () => {
        let currentProducts = [...products];

        // Search Filter
        const searchTerm = productSearch.value.toLowerCase();
        if (searchTerm) {
            currentProducts = currentProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
        }

        // Category Filter
        const selectedCategory = categoryFilter.value;
        if (selectedCategory !== 'all') {
            currentProducts = currentProducts.filter(product =>
                product.category === selectedCategory
            );
        }

        // Price Filter
        const maxPrice = parseFloat(priceRange.value);
        currentProducts = currentProducts.filter(product => product.price <= maxPrice);
        priceValueDisplay.textContent = `$0 - $${maxPrice.toFixed(2)}`;

        // Rating Filter
        const selectedRatingSpan = ratingFilterContainer.querySelector('.rating-filter span.selected');
        if (selectedRatingSpan) {
            const minRating = parseFloat(selectedRatingSpan.dataset.rating);
            currentProducts = currentProducts.filter(product => product.rating >= minRating);
        }

        filteredProducts = currentProducts;
        renderProducts(filteredProducts);
    };

    // Event Listeners
    productSearch.addEventListener('input', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    priceRange.addEventListener('input', applyFilters);

    ratingFilterContainer.addEventListener('click', (event) => {
        if (event.target.closest('span')) {
            const clickedSpan = event.target.closest('span');
            // Remove 'selected' from all spans
            ratingFilterContainer.querySelectorAll('span').forEach(span => {
                span.classList.remove('selected');
            });
            // Add 'selected' to the clicked span
            clickedSpan.classList.add('selected');
            applyFilters();
        }
    });

    clearFiltersBtn.addEventListener('click', () => {
        productSearch.value = '';
        categoryFilter.value = 'all';
        priceRange.value = priceRange.max; // Reset to max price
        priceValueDisplay.textContent = `$0 - $${priceRange.max}`;
        ratingFilterContainer.querySelectorAll('span').forEach(span => {
            span.classList.remove('selected');
        });
        applyFilters(); // Re-apply filters to show all products
    });

    // Product Details Modal
    productGrid.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        if (productCard) {
            const productId = parseInt(productCard.dataset.id);
            const product = products.find(p => p.id === productId);

            if (product) {
                const ratingStars = '<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating)) +
                                    (product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : '');
                modalProductDetails.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="details-text">
                        <h2>${product.name}</h2>
                        <p><strong>Category:</strong> ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                        <p class="price">$${product.price.toFixed(2)}</p>
                        <div class="rating">
                            ${ratingStars}
                            <span>(${product.rating})</span>
                        </div>
                        <p>${product.description}</p>
                    </div>
                `;
                productDetailsModal.style.display = 'flex'; // Use flex to center
            }
        }
    });

    closeButton.addEventListener('click', () => {
        productDetailsModal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === productDetailsModal) {
            productDetailsModal.style.display = 'none';
        }
    });

    // Initial render of all products
    renderProducts(products);
});