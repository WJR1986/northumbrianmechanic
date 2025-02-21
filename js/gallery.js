document.addEventListener("DOMContentLoaded", function () {
  // Each gallery item has image URLs, a title, and a description
  const galleryItems = [
    {
      images: [
        "img/portfolio/suzuki3.jpg",
        "img/portfolio/suzuki2.jpg",
        "img/portfolio/suzuki1.jpg",
      ],
      title: "Suzuki Swift",
      description:
        "Suzuki Swift we had back in for front discs and pads. Absolutely nothing left on them.",
    },
    {
      images: [
        "img/portfolio/caddy1.jpg",
        "img/portfolio/caddy2.jpg",
        "img/portfolio/caddy3.jpg",
      ],
      title: "VW Caddy",
      description:
        "This lovely caddy was suffering from the dreaded VW clutch drop in Widdrington. Master cylinder and slave cylinders both changed. Clutch feels as good as new. Another happy customer.",
    },
    {
      images: ["img/portfolio/pug1.jpg", "img/portfolio/pug2.jpg"],
      title: "Peugeot",
      description:
        "Bottom ball joint and track rod end on a Peugeot today. Even done it on my birthday 😅",
    },
    {
      images: [
        "img/portfolio/rangerovervogue1.jpg",
        "img/portfolio/rangerovervogue1.jpg",
      ],
      title: "Range Rover Vogue",
      description:
        "Droplink and driveshaft on this lovely range rover vogue today (February 2025) for a customer in Alnwick. Will be back for some more work on this and also on the defender soon.",
    },
    {
      images: [
        "img/portfolio/Swift3.jpg",
        "img/portfolio/Swift2.jpg",
        "img/portfolio/Swift1.jpg",
        "img/portfolio/Swift4.jpg",
      ],
      title: "Suzuki Swift",
      description: "Service on a Suzuki swift in Wooler (February 2025).",
    },
    {
      images: [
        "img/portfolio/nissan1.jpg",
        "img/portfolio/nissan2.jpg",
        "img/portfolio/nissan3.jpg",
        "img/portfolio/nissan4.jpg",
      ],
      title: "Nissan Qashqai",
      description:
        "Had this lovely qashqai back in today after noticing the rear brakes were way past their best after giving it a quick valet last week.",
    },
    // Add more items as needed
  ];

  const container = document.getElementById("galleryContainer");

  // Loop through galleryItems and build each card
  galleryItems.forEach((item, galleryIndex) => {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col");

    // Create the card
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "h-100", "shadow-sm", "gallery-card");

    // Use the first image as the card image
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", item.images[0]);
    imgElement.setAttribute("alt", item.title);
    imgElement.classList.add(
      "card-img-top",
      "img-fluid",
      "gallery-card-img-top"
    );
    cardDiv.appendChild(imgElement);

    // Card body with title and a button to open the modal
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = `
        <p class="card-text">${item.title}</p>
        <button class="btn btn-dark view-button" data-gallery-index="${galleryIndex}">
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
        img.classList.add("d-block", "w-100", "gallery-carousel-img");
        carouselItem.appendChild(img);

        carouselInner.appendChild(carouselItem);
      });

      // Update modal description
      const modalDescription = document.getElementById("modalDescription");
      modalDescription.classList.add("text-center", "px-2");
      modalDescription.textContent = galleryItem.description;

      // Show the modal using Bootstrap's Modal API
      const modal = new bootstrap.Modal(
        document.getElementById("exampleModalDefault")
      );
      modal.show();
    });
  });
});
