document.addEventListener('DOMContentLoaded', () => {
    console.log('Napix website loaded.');
    // Add interactive transitions or animations here
});
function toggleDetails(id) {
    const moreContent = document.getElementById(id);
    if (moreContent.style.display === "none" || !moreContent.style.display) {
        moreContent.style.display = "block";
    } else {
        moreContent.style.display = "none";
    }
}
function toggleFAQ(id) {
    const faqContent = document.getElementById(id);
    if (faqContent.style.display === 'none') {
        faqContent.style.display = 'block';
    } else {
        faqContent.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const scrollRightBtn = document.getElementById("scrollRight");
    const developerSection = document.getElementById("developer-section");

    // Function to check if the section is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    // Update the visibility of the arrow button based on the section's visibility
    const toggleArrowVisibility = () => {
        if (isInViewport(developerSection)) {
            scrollRightBtn.classList.add("active");
        } else {
            scrollRightBtn.classList.remove("active");
        }
    };

    // Scroll event listener
    window.addEventListener("scroll", toggleArrowVisibility);

    // Click event for scrolling the container
    scrollRightBtn.addEventListener("click", () => {
        const container = developerSection.querySelector(".developer-container");
        container.scrollBy({ left: 200, behavior: "smooth" });
    });

    // Initial check on page load
    toggleArrowVisibility();
});
const developerContainer = document.querySelector('.developer-container');
const rightArrow = document.getElementById('scrollRight');
let currentScroll = 0;

rightArrow.addEventListener('click', () => {
    const devInfoWidth = developerContainer.children[0].offsetWidth; // Get the width of one developer-info div
    currentScroll += devInfoWidth; // Increment the scroll position
    const maxScroll = (developerContainer.children.length - 3) * devInfoWidth;

    if (currentScroll > maxScroll) {
        currentScroll = 0; // Reset to the beginning if exceeding max
    }

    developerContainer.style.transform = `translateX(-${currentScroll}px)`;
});
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');

scrollLeft.addEventListener('click', () => {
    // Scroll left by the width of one card (adjust if needed)
    developerContainer.scrollBy({
        left: -250,  // Adjust this value to match the width of your cards
        behavior: 'smooth'
    });
});

scrollRight.addEventListener('click', () => {
    // Scroll right by the width of one card (adjust if needed)
    developerContainer.scrollBy({
        left: 300,  // Adjust this value to match the width of your cards
        behavior: 'smooth'
    });
});
// Get the left and right scroll buttons
const leftArrow = document.getElementById('scrollLeft');

// Get the container that holds all the developer profiles

// Add event listener for scrolling left
const cloneFirst = container.firstElementChild.cloneNode(true);
const cloneLast = container.lastElementChild.cloneNode(true);
container.append(cloneFirst);
container.prepend(cloneLast);
ontainer.addEventListener('scroll', () => {
    if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth - container.clientWidth;
    } else if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
    }
});