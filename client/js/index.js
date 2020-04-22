console.log("hello world")

$('#import').click(function () {
  var files = $('#inputFile').prop('files')
  var formData = new FormData()
  formData.append('file', files[0])
  $.ajax({
    url: '/api/upload',
    type: 'POST',
    cache: false,
    data: formData,
    processData: false,
    contentType: false
  })
})