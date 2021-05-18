const mains = [
  {
    name: "Double Cheese Dribble",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula libero nisi, eu pharetra sapien varius vel.",
    price: 21,
    image: "https://source.unsplash.com/rUmET8NYXFU",
    imageCredit: "unsplash.com/@alexhaney",
  },
  {
    name: "Ink Fix",
    description: "Maecenas placerat dictum felis, ornare pulvinar nunc gravida non.",
    price: 22,
    image: "https://source.unsplash.com/tOaVS1skf20",
    imageCredit: "unsplash.com/@jackiepark_",
  },
  {
    name: "Wet Gnaws",
    description: "Sed a sagittis ex, sed eleifend risus. Quisque varius erat at quam dignissim, sed condimentum ex aliquam.",
    price: 25,
    image: "https://source.unsplash.com/y_wGdAJMdOo",
    imageCredit: "unsplash.com/@__menglong",
  },
  {
    name: "Delicately",
    description: "Duis eget purus pretium, eleifend purus vel, scelerisque lorem. Sed et ullamcorper turpis. Vestibulum interdum sem at dignissim sagittis.",
    price: 14,
    image: "https://source.unsplash.com/Heu40Pe6A48",
    imageCredit: "unsplash.com/@covertnine",
  }
];

const desserts = [
  {
    name: "Creamy Revolution",
    description: "Praesent maximus metus arcu. Vestibulum ullamcorper, ipsum sed viverra scelerisque, metus neque vulputate lorem, eu tincidunt risus nibh vitae turpis.",
    price: 6,
    image: "https://source.unsplash.com/0fyS-gk0h4w",
    imageCredit: "unsplash.com/@micheile"
  },
    {
    name: "The Quick Wax",
    description: "Suspendisse et arcu ultricies, fermentum purus nec, tristique nisl. Ut tempus sed quam quis luctus. Fusce blandit nulla velit, et interdum elit cursus a.",
    price: 12,
    image: "https://source.unsplash.com/4CwxnXWPDMQ",
    imageCredit: "unsplash.com/@portuguesegravity"
  },
  {
    name: "Quarter-Melt Waddle",
    description: "Nam et felis rhoncus, luctus tellus at, porta magna. Praesent porta sollicitudin mi ut tristique. Phasellus mattis sed nulla in lacinia. ",
    price: 12,
    image: "https://source.unsplash.com/B5uXKlluUQE",
    imageCredit: "unsplash.com/@notethanum"
  },
  {
    name: "Assorted Crumblers",
    description: "Praesent tempus interdum eros, ut dictum felis sodales ut. Fusce mollis in justo eget rhoncus.",
    price: 3,
    image: "https://source.unsplash.com/-tR4fnNJW2A",
    imageCredit: "unsplash.com/@aesullivan2010"
  }
];

function updateMainImage() {
  const mainImage = document.querySelector(".main-image");

  mainImage.setAttribute("src", "https://source.unsplash.com/Bt5VbQ8HSwc");
  mainImage.setAttribute("alt-text", "Drenched Beard");

  const imageCredit = document.querySelector(".main-image-container .image-credit");
  imageCredit.innerText = "unsplash.com/@mishaalzahed";
}

function updateHeader() {
  const title = document.querySelector("header h1");
  title.innerText = "Beard-Soakers"

  const tagline = document.querySelector("header p");
  tagline.innerText = "Moist Mains";
}

function updateSection() {
  const section = document.querySelector("section");
  // EMPTY SECTION
  section.innerHTML = "";

  const mainsTitle = document.createElement("h2");
  mainsTitle.innerText = "Moist Mains";

  section.append(mainsTitle);

  mains.forEach(dish => {
    let item = createMenuItem(dish.name, dish.description, dish.price, dish.image, dish.imageCredit);
    section.append(item);
  });

  const dessertsTitle = document.createElement("h2");
  mainsTitle.innerText = "Decadent Desserts";

  section.append(dessertsTitle);

  desserts.forEach(dish => {
    let item = createMenuItem(dish.name, dish.description, dish.price, dish.image, dish.imageCredit);
    section.append(item);
  });
}

function createMenuItem(name, description, price, image, imageCredit) {
  const item = document.createElement("div");
  item.classList.add("item-container");

  // MAKE INFO CONTAINER
  const itemInfoContainer = document.createElement("div");
  itemInfoContainer.classList.add("item-info-container");

  const itemName = document.createElement("h3");
  itemName.classList.add("item-name");
  itemName.innerText = name;

  const itemDescription = document.createElement("p");
  itemDescription.classList.add("item-description");
  itemDescription.innerText = description;

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("itme-price");
  itemPrice.innerText = "$" + price;

  itemInfoContainer.append(itemName, itemDescription, itemPrice);

  // MAKE IMAGE CONTAINER
  const itemImageContainer = document.createElement("div");
  itemImageContainer.classList.add("item-image-container");

  const itemImage = document.createElement("img");
  itemImage.classList.add("item-image");
  itemImage.setAttribute("src", image);
  itemImage.setAttribute("alt-text", name);

  const itemImageCredit = document.createElement("p");
  itemImageCredit.classList.add("item-image-credit");
  itemImageCredit.innerText = imageCredit;

  itemImageContainer.append(itemImage, itemImageCredit);

  // COMPOSE MENU ITEM
  item.append(itemImageContainer, itemInfoContainer);

  return item
}


function loadMenu() {
  updateMainImage();
  updateHeader();
  updateSection();
}

export default loadMenu

