fetch("https://valorant-api.com/v1/weapons")
  .then((response) => response.json())
  .then((json) => {
    const skinsContainer = document.getElementById("skins-container");

    json.data.forEach((item) => {
      "";
      const newCard = document.createElement("div");
      newCard.innerHTML = ` <img src="${item.displayIcon}">  <p> ${item.displayName} </p> <i>Lorem ipsum is placeholder text commonly used in the graphic</i>`;
      skinsContainer.appendChild(newCard);
      newCard.classList.add("card");
    });
  });
