$(document).ready(function() {
  $('#upload-form').submit(function(e) {
    e.preventDefault();

    const form = $(this);
    const formData = new FormData(form[0]);

    $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
        if (response.success) {
         
          window.alert('Movie Added Successfully!!');

        }
      }
    });
  });
});









// fetch('/data.json')
//   .then(response => response.json())
//   .then(data => {
//     const cardContainer = document.getElementById('card-container');

//     data.forEach(item => {
//       const card = document.createElement('div');
//       card.classList.add('col');

//       const cardBody = document.createElement('div');
//       cardBody.classList.add('card', 'h-100');

//       const image = document.createElement('img');
//       image.classList.add('card-img-top');
//       image.src = item.imagePath;

//       const cardText = document.createElement('div');
//       cardText.classList.add('card-body');

//       const description = document.createElement('p');
//       description.classList.add('card-text');
//       description.innerText = item.description;

//       cardText.appendChild(description);

//       cardBody.appendChild(image);
//       cardBody.appendChild(cardText);

//       card.appendChild(cardBody);

//       cardContainer.appendChild(card);
//     });
//   })
//   .catch(error => console.log(error));











// $(document).ready(function() {
//   $('#upload-form').submit(function(e) {
//     e.preventDefault();

//     const form = $(this);
//     const formData = new FormData(form[0]);

//     $.ajax({
//       url: '/upload',
//       type: 'POST',
//       data: formData,
//       contentType: false,
//       processData: false,
//       success: function(response) {
//         if (response.success) {
         
//           window.alert('Movie Added Successfully!!');

//         }
//       }
//     });
//   });
// });