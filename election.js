document.addEventListener("DOMContentLoaded", function() {
  // Imagination!

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'JSON'
  }).done(function(responseData) {
    var candidateArray = responseData.candidates
    var ul = document.getElementById('candidate_data')

    for (var i = 0; i < candidateArray.length; i++) {
      var name = candidateArray[i].name;
      var votes = candidateArray[i].votes;
      var li = document.createElement('li');
      li.innerText = name +': '+ votes;
      ul.append(li);
      console.log(name, " ", votes);
    }
  });

});
