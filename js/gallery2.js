document.addEventListener("DOMContentLoaded", function () {
  // Each gallery item holds up to 3 image URLs and a title
  const galleryItems = [
    {
      images: [
        "img/portfolio/suzuki1.jpg",
        "img/portfolio/suzuki2.jpg",
        "img/portfolio/suzuki3.jpg",
      ],
      title:
        "Suzuki Swift back in for front discs and pads. Absolutely nothing left on them.",
    },
    {
      images: ["img/portfolio/item2a.jpg", "img/portfolio/item2b.jpg"],
      title: "Project Title 2",
    },
    { images: ["img/portfolio/item3a.jpg"], title: "Project Title 3" },
    // Add more items as needed
  ];

  const container = document.getElementById("galleryContainer");

  // Loop through galleryItems and build each card
  galleryItems.forEach((item, galleryIndex) => {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col");

    // Create the card
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "h-100", "shadow-sm");

    // Create a responsive row for images inside the card
    const imageRow = document.createElement("div");
    imageRow.classList.add("row", "g-0");

    // Determine column class based on number of images
    const colClass =
      item.images.length === 1
        ? "col-12"
        : item.images.length === 2
        ? "col-6"
        : "col-4";

    // Loop over images for this item
    item.images.forEach((imgSrc) => {
      const imageCol = document.createElement("div");
      imageCol.classList.add(colClass);
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", imgSrc);
      imgElement.setAttribute("alt", item.title);
      imgElement.classList.add("img-fluid");
      // Style to ensure full coverage
      imgElement.style.height = "250px";
      imgElement.style.objectFit = "cover";
      imageCol.appendChild(imgElement);
      imageRow.appendChild(imageCol);
    });

    cardDiv.appendChild(imageRow);

    // Card body with title and a button to open the modal
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = `
        <p class="card-text">${item.title}</p>
        <button class="btn btn-primary view-button" data-gallery-index="${galleryIndex}">
          Enlarge
        </button>
      `;
    cardDiv.appendChild(cardBody);

    colDiv.appendChild(cardDiv);
    container.appendChild(colDiv);
  });

  // Add event listeners to each view-button to trigger modal
  document.querySelectorAll(".view-button").forEach((button) => {
    button.addEventListener("click", function () {
      const galleryIndex = this.getAttribute("data-gallery-index");
      const galleryItem = galleryItems[galleryIndex];

      // Update modal title
      document.getElementById("exampleModalLabel").textContent =
        galleryItem.title;

      // Populate the carousel with images from the gallery item
      const carouselInner = document.querySelector(
        "#modalCarousel .carousel-inner"
      );
      carouselInner.innerHTML = ""; // Clear any previous images

      galleryItem.images.forEach((imgSrc, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) carouselItem.classList.add("active");

        const img = document.createElement("img");
        img.setAttribute("src", imgSrc);
        img.setAttribute("alt", galleryItem.title);
        img.classList.add("d-block", "w-100");
        carouselItem.appendChild(img);

        carouselInner.appendChild(carouselItem);
      });

      // Show the modal using Bootstrap's Modal API
      const modal = new bootstrap.Modal(
        document.getElementById("exampleModalDefault")
      );
      modal.show();
    });
  });
});
