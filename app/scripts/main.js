//Item Constructor

var Item = function(options) {
  options = options || {};
  this.status = options.status || 'incomplete';
  this.message = options.message || 'Type something here';
};


//Instances
var item = new Item({
  message: "Hey here's a test message!"
});


//Pass it into the document

$('.list').append('<li>' + item.message + '<img src="http://png-4.findicons.com/files/icons/1580/devine_icons_part_2/128/trash_recyclebin_empty_closed.png" height=30px width=30px /></li>');


$('.addbutton').on('click', function(){
  $('.list').append('<li>' + item.message + '</li>');

})
