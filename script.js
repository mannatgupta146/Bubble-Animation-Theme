const container = document.querySelector(".container");

function dropped() {
    const drop = document.createElement("span");
    drop.classList.add("drop");

    // Random position and size
    drop.style.top = Math.random() * (innerHeight - 80) + "px";
    drop.style.left = Math.random() * (innerWidth - 80) + "px";
    const size = Math.random() * 50 + 20; // Size between 20px and 70px
    drop.style.height = size + "px";
    drop.style.width = size + "px";

    // Click interaction
    drop.addEventListener("click", () => {
        drop.style.transition = "transform 0.3s ease, background-color 0.3s ease";
        drop.style.transform = "scale(1.5)"; // Briefly grow
        setTimeout(() => {
            drop.style.transform = "scale(0)"; // Then shrink
            drop.style.backgroundColor = "white";
        }, 300);
    });

    // Remove drop after animation
    setTimeout(() => {
        drop.style.opacity = 0;
        setTimeout(() => drop.remove(), 500); // Allow fade-out before removal
    }, 6000);

    container.appendChild(drop);

    // Limit total drops to avoid performance issues
    if (container.children.length > 100) {
        container.firstChild.remove(); // Remove the oldest drop
    }
}

// Generate drops at intervals
setInterval(dropped, 500);
