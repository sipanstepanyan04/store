let data = [
  {
    id: 1,
    img: "https://www.sas.am/upload/Sh/imageCache/405/757/757656559973207.png",
    name: "Հոթ դոգ 1հատ",
    price: "300 դր.",
  },
  {
    id: 2,
    img: "https://www.sas.am/upload/Sh/imageCache/235/624/624260666230390.png",
    name: "Բուլկի չամիչով «SAS Sweet» 1 հատ",
    price: "230 դր.",
  },
  {
    id: 3,
    img: "https://www.sas.am/upload/Sh/imageCache/303/593/5933993784175770.png",
    name: "Բուլկի կակաչի սերմերով «SAS Sweet»  1 հատ",
    price: "230 դր.",
  },
  {
    id: 4,
    img: "https://www.sas.am/upload/Sh/imageCache/345/536/5364863501981357.jpg.webp",
    name: "Գալետ «SAS Product» ",
    price: "280 դր.",
  },
  {
    id: 5,
    img: "https://www.sas.am/upload/Sh/imageCache/136/833/8334374253074056.png",
    name: "Բուլկի կրեմով «SAS Sweet» 1 հատ",
    price: "160 դր.",
  },
  {
    id: 6,
    img: "https://www.sas.am/upload/Sh/imageCache/173/516/5164884179309404.jpg.webp",
    name: "Խաչապուրի պանրով «Sas Sweet» փոքր",
    price: "320 դր.",
  },
  {
    id: 7,
    img: "https://www.sas.am/upload/Sh/imageCache/119/944/944733784334110.jpg.webp",
    name: "Խաչապուրի պանրով «Sas Sweet»",
    price: "370 դր.",
  },
  {
    id: 8,
    img: "https://www.sas.am/upload/Sh/imageCache/569/722/7228672609272520.jpg.webp",
    name: "Թխվածք դոնաթ «Yum-Yum»",
    price: "680 դր.",
  },
  {
    id: 9,
    img: "https://www.sas.am/upload/Sh/imageCache/423/107/1073891395567198.png",
    name: "Կարկանդակ պանրով  «Տիրոպիտա»",
    price: "570 դր.",
  },
  {
    id: 10,
    img: "https://www.sas.am/upload/Sh/imageCache/388/259/2591801242075491.jpg.webp",
    name: "Կարկանդակ պանրով և սպանախով  «Սպանակոպիտա»",
    price: "570 դր.",
  },
  {
    id: 11,
    img: "https://www.sas.am/upload/Sh/imageCache/221/523/523940360926653.png",
    name: "Կարկանդակ ցլիկի մսով «Կրեատոպիտա»",
    price: "570 դր.",
  },
  {
    id: 12,
    img: "https://www.sas.am/upload/Sh/imageCache/364/894/8940174206840069.jpg.webp",
    name: "Խաչապուրի քիմիոնով",
    price: "450 դր.",
  },
  {
    id: 13,
    img: "https://www.sas.am/upload/Sh/imageCache/383/003/0033021078239419.jpg.webp",
    name: "Կարկանդակ «Կոտոպիտա»",
    price: "570 դր.",
  },
];

let basket = [];
const favoriteObj = {};
const cardSection = document.getElementById("cardSection");

function basketCount() {
  const dataCount = document.querySelector(".basket");
  dataCount.setAttribute("data-count", basket.length);
}

function favoriteCount() {
  const dataCount = document.querySelector(".favorite");
  const favoriteCount = Object.keys(favoriteObj).length;
  dataCount.setAttribute("data-count", favoriteCount);
}

function renderData(data) {
  cardSection.innerHTML = "";

  data.forEach((product) => {
    const card = document.createElement("article");
    card.classList.add("card");

    const imgContent = document.createElement("div");
    imgContent.classList.add("imgContent");

    const cardImg = document.createElement("img");
    cardImg.classList.add("cardImg");
    cardImg.src = product.img;

    const cardContent = document.createElement("div");
    cardContent.classList.add("cardContent");

    const productName = document.createElement("h3");
    productName.classList.add("productName");
    productName.innerText = product.name;

    const cardContentBottom = document.createElement("div");
    cardContentBottom.classList.add("cardContentBottom");

    const productPrice = document.createElement("span");
    productPrice.classList.add("productPrice");
    productPrice.innerText = product.price;

    const basketAddBtn = document.createElement("button");
    basketAddBtn.classList.add("basketAddBtn");

    const iconBasket = document.createElement("i");
    iconBasket.classList.add("icon-add");
    basketAddBtn.appendChild(iconBasket);

    const favoriteAddBtn = document.createElement("button");
    favoriteAddBtn.classList.add("favoriteBtn");

    const favoriteIcon = document.createElement("i");
    favoriteIcon.classList.add("icon-favorite");

    basketAddBtn.addEventListener("click", (event) => {
      basket.push(product);
      basketCount();
    });

    favoriteAddBtn.addEventListener("click", (event) => {
      if (favoriteObj.hasOwnProperty(product.id)) {
        delete favoriteObj[product.id];
        favoriteAddBtn.classList.remove("active");
      } else {
        favoriteObj[product.id] = product;
        favoriteAddBtn.classList.add("active");
      }
      favoriteCount();
    });

    cardContent.appendChild(productName);
    imgContent.append(cardImg, favoriteAddBtn);
    favoriteAddBtn.appendChild(favoriteIcon);
    cardContentBottom.append(productPrice, basketAddBtn);
    card.append(imgContent, cardContent, cardContentBottom);
    cardSection.appendChild(card);
  });
}

renderData(data);

const basketBtn = document.querySelector(".basket");
const rigthAside = document.querySelector(".rigth-aside");
const basketList = document.querySelector(".basket-list");
basketList.classList.add("basketList");

function renderBasket() {
  basketList.innerHTML = "";
  basket.forEach((product) => {
    const basketListItem = document.createElement("li");
    basketListItem.classList.add("basketListItem");
    const imgContent = document.createElement("div");

    const cardImg = document.createElement("img");
    cardImg.classList.add("cardImg");

    cardImg.src = product.img;

    const cardContent = document.createElement("div");
    const productName = document.createElement("h3");
    productName.innerText = product.name;

    const cardContentBottom = document.createElement("div");
    const productPrice = document.createElement("span");
    productPrice.innerText = product.price;

    const basketRemoveBtn = document.createElement("button");
    const iconRemove = document.createElement("i");
    iconRemove.classList.add("icon-remove");

    cardContent.appendChild(productName);
    imgContent.appendChild(cardImg);
    basketRemoveBtn.appendChild(iconRemove);
    cardContentBottom.append(productPrice, basketRemoveBtn);
    basketListItem.append(imgContent, cardContent, cardContentBottom);
    basketList.appendChild(basketListItem);

    basketRemoveBtn.addEventListener("click", (event) => {
      basket = basket.filter((item) => {
        return item.id !== product.id;
      });
      renderBasket();
    });
  });
}

basketBtn.addEventListener("click", (event) => {
  rigthAside.classList.toggle("open");
  renderBasket();
});

rigthAside.addEventListener("click", (event) => {
  if (event.target === rigthAside) {
    rigthAside.classList.remove("open");
  }
});

const search = document.getElementById("searchInput");
const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", () => {
  let filtered = data.filter((item) => {
    return item.name.toLowerCase().includes(search.value.toLowerCase());
  });
  renderData(filtered);
});
