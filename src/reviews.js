document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Data review dummy berasal dari reviews.json
        const response = await fetch('/src/reviews.json');
        const allReviews = await response.json();
        
        const container = document.getElementById('reviews-container');
        const container2 = document.getElementById('reviews-container2');
        
        if (!container || !container2) return;
        
        container.innerHTML = '';
        container2.innerHTML = '';
        // Saya gunakan js untuk duplikasi review supaya hemat tempat di file html
        const createReviewCard = (review) => {
            const reviewCard = document.createElement('div');
            reviewCard.className = `testimoni-card w-75 ${review.bg} rounded-2xl p-5 h-37 flex-shrink-0`;
            reviewCard.innerHTML = `
                <div class="profile flex gap-2">
                    <img
                        src="${review.avatar}"
                        alt="profile"
                        class="w-10 h-10 rounded-full"
                    />
                    <div class="profile-text">
                        <h1 class="text-sm font-medium">${review.name}</h1>
                        <h2 class="text-xs text-gray-500 mt-0.5">
                            ${review.univ}
                        </h2>
                    </div>
                </div>
                <p class="text-xs text-gray-500 mt-2">
                    ${review.review}
                </p>
            `;
            return reviewCard;
        };
        
        const firstFour = allReviews.slice(0, 4);
        const lastFour = allReviews.slice(-4);

        // Saya buat per kontainer dua isi supaya review langsung muncul lagi saat scroll
        firstFour.forEach(review => {
            container.appendChild(createReviewCard(review));
        });
        
        firstFour.forEach(review => {
            container.appendChild(createReviewCard(review));
        });
        
        lastFour.forEach(review => {
            container2.appendChild(createReviewCard(review));
        });
        
        lastFour.forEach(review => {
            container2.appendChild(createReviewCard(review));
        });
        
    } catch (error) {
        console.error('Error loading reviews:', error);
    }
});
