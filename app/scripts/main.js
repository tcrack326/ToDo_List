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
  var input = $('#myform').val() + '<button>x</button>'

  $('.list').append('<li>' + input + '</li>');

})

$('ul').on('click','button' , function(){
    $(this).parent().remove()
});
