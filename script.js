/**
 * Opens the modal with team member information
 * @param {string} name - Name of the team member
 * @param {string} role - Role of the team member
 * @param {string} bio - Bio of the team member
 * @param {string} imageUrl - URL of the team member's image
 */
function openModal(name, role, bio, imageUrl, galleryImages = []) {
    document.getElementById("modalName").textContent = name;
    document.getElementById("modalRole").textContent = role;
    document.getElementById("modalBio").textContent = bio;
    document.getElementById("modalImage").src = imageUrl;

    const gallery = document.getElementById("modalGallery");
    gallery.innerHTML = "";
    galleryImages.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = "Gallery Image";
        gallery.appendChild(imgElement);
    });

    document.getElementById("bioModal").style.display = "flex";
}

/**
 * Closes the modal
 */
function closeModal() {
    document.getElementById("bioModal").style.display = "none";
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 */
function showSection(sectionId) {
    document.getElementById("bios").style.display = sectionId === "bios" ? "flex" : "none";
    document.getElementById("vision").style.display = sectionId === "vision" ? "block" : "none";
}
