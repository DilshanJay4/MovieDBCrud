
fetch('/data')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('card-container');

    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('col');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card', 'h-80');

      const image = document.createElement('img');
      image.classList.add('card-img-top');
      image.src = item.imagePath;
      console.log(item.imagePath);

      const cardText = document.createElement('div');
      cardText.classList.add('card-body');

      const title = document.createElement('h4');
      title.classList.add('card-title');
      title.innerText = item.title;

      const description = document.createElement('p');
      description.classList.add('card-text');
      description.innerText = item.description;

      cardText.appendChild(title);
      cardText.appendChild(description);
      cardBody.appendChild(image);
      cardBody.appendChild(cardText);

      card.appendChild(cardBody);

      cardContainer.appendChild(card);
    });
  })

  .catch(error => console.log(error));
