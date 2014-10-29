var my_server = 'http://tiy-atl-fe-server.herokuapp.com/collections/et';

//Item Constructor

var Item = function(options) {
  options = options || {};
  this.status = options.status || 'incomplete';
  this.task = options.task || '';
};

var todo_list;
var completedTotal = 0;
//Instances

var task_template = $("#task_items").html();
var rendered = _.template(task_template);

//grab todo items and show on page
        $.getJSON(my_server).done(function(data){
          todo_list = data;
          _.each(todo_list, function(item){
              $('.list').append(rendered(item));
          });

          // add the total count
          $('.totalcount').text(todo_list.length);

          todo_list.forEach(function(list_item){
            if(list_item.status == 'complete'){
              completedTotal += 1;
            }
          });

          $('.completedcount').text(completedTotal);

        });

var task;
var contents;

$('.addbutton').on('click', function(event){
  event.preventDefault();

  var self=this;
  contents = $('#myform').val();

  task = new Item({
    task: contents
  });

  //send to our server
  $.ajax({
    type: 'POST',
    url: my_server,
    data: task
  }).done(function(data){
    // Add to my todo_list
    todo_list.push(data);
    // add the total count
    $('.totalcount').text(todo_list.length);

    $('.list').append(rendered(data));

  // $(self)[0].reset();
  });


});

//manage todo items
var todo_modifier;
$('.list').on('click', 'li', function (event) {
  event.preventDefault();

  var myID = $(this).attr('id');

  todo_modifier = _.findWhere(todo_list, { _id: myID });

  if (todo_modifier.status == 'complete') {
    todo_modifier.status = 'incomplete';
  } else {
    todo_modifier.status = 'complete';
  }

  var self= this;

 $.ajax({
   type: 'PUT',
   url: my_server + "/" + todo_modifier._id,
   data: todo_modifier
 }).done(function(){
   if (todo_modifier.status == 'complete') {
     $(self).addClass('complete');
     completedTotal += 1;
   } else {
     $(self).removeClass('complete');
     completedTotal -= 1;
   }

  $('.completedcount').text(completedTotal);
  });




});

var delete_modifier;


$('.list').on('click', 'button', function(event){
    event.preventDefault();
    event.stopPropagation();

    var myID = $(this).attr('id');

    delete_modifier = _.findWhere(todo_list, { _id: myID });
    var self=this;

    $.ajax({

      type: 'DELETE',
      url: my_server + "/" + delete_modifier._id,
    }).done(function(data){

      $(self).parent().remove();
      todo_list = _.without(todo_list, delete_modifier);

      // add the total count
      if(delete_modifier.status == "complete"){
      completedTotal -= 1;
    }

      $('.totalcount').text(todo_list.length);


      $('.completedcount').text(completedTotal);
    });


});




















// $('ul').on('click','button' , function(){
//     $(this).parent().remove()
// });
