$('#delete-form').on('submit', function(event) {
    event.preventDefault();
  
    const movieId = $('#id').val();
  
    $.ajax({
      url: '/movie/' + movieId,
      method: 'DELETE',
      success: function(response) {
        alert('Movie deleted successfully');
        // Do any additional tasks here, such as updating the UI
      },
      error: function(xhr, status, error) {
        alert('Failed to delete movie: ' + error);
      }
    });
  });
  


// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })
