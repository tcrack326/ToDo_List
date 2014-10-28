//Item Constructor

var Item = function(options) {
  options = options || {};
  this.status = options.status || 'incomplete';
};


//Instances
var item = new Item({
});


//Pass it into the document



$('.addbutton').on('click', function(){
  var input = $('#myform').val()

  $('.list').append('<li>' + input + '</li>');

})
