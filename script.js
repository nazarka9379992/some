// console.log($('div'));

// $(function () {
// 	$('div').text('I like JS');
// 	$('div').first().css({
// 		background: '#FF0000'
// 	});
// 	$('div').last().css({
// 		background: '#0000FF',
// 		height: 300
// 	});
// });


// var elm = document.getElementById('some');
// console.log(elm);

// elm.addEventListener ('click', function(){
// 	console.log('we did it');
// })

// $('#some').on('click', function(){
// 	console.log('we did it with JQ');
// })

// $(function(){
// 	$('#some').on('keyup', function(){
// 	console.log('we did it with JQ');
	// console.log(e);
	// console.log($('#some').val());

	
// });
	// замість '#some' можна написати this 
	// $('#some').off('click');
	// $('#some').trigger('keyup');
// });
	// $('#some').off();

// click, dblclick, mouseover, mouseenter, mouseleave, mouseout, focus,
 // blur(unfocus), change, keydown, keyup, mouseup, mousedown
// -----------------------------------1------------------------------
 // $(function(){
 // 	$('a').first().prop('href', $('a').first().next().prop('href'));
 // })
// ----------------------------------------2-------------------------------
 // $(function(){
 // 	$('[type=submit]').on('click', function(e) {
 // 		e.preventDefault();
 // 		$('[name=first_name]').val('Jonh');
 // 		$('[name=last_name]').val('Connor');
 // 		$('[name=ages]').val('30');
 // 	});
 // });

 // ---------------------------------Lesson16---------------------------------

//  $(function(){
//  	$('button').on('click', function(e) {
//  		e.preventDefault();
//  		var email = $('[type=email]').val();
//  		var password = $('[type=password]').val();
//  		if (!email) {
//  			$('[type=email]').addClass('has-error');
//  			$('.no_email').show();

//  		}
//  		if (!validateEmail(email)){
//  			$('[type=email]').addClass('has-error');
//  			$('.error_email').show()
//  		}
//  		if (!password) {
//  			$('[type=password]').addClass('has-error')
//  			$('.wrong_password').show();
//  		} 
//  		console.log(email, password);
//  	})
//  });
//  function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

// очищати помилки перед перевіркою, перервати пошук помилок, якщо хоча б знайдена одна + доробити password

// ------------------------------------------Lesson17----------------------------------
// ---------------------------------------------Lesson18----------------------------------

// $(function () {
// 	var email = $('[type=email]').val();
// 	var comment = $('textarea');
// 	$('input, textarea').on('keydown', function(){
// 	$(this).removeClass('error');
// 	$(this).parent().find('small').hide();
		
// 	})

// 	$("button").on('click', function(e) {
// 		e.preventDefault();
// 		var comment_text=comment.val().trim();
// 		var email_text=email.val().trim();
// 		if (!email_text){
// 			email.addClass('has-error');
// 			$('[no_email]').show();
//  			return;
// 		}
// 		if (!email) {
//  			$('[type=email]').addClass('has-error');
//  			$('[no_email]').show();
//  			return;

//  		}
//  		if (!validateEmail(email_text)){
//  			$('[type=email]').addClass('has-error');
//  			$('error_email').show();
//  			return;
// 		}
// 		if (!comment_text) {
// 			comment.addClass('has-error');
// 			$('[name=comment_error]').show();
// 		}
// 		var di=$('<div>');
// 		var h=$('<h5>');
// 		var par = $("<p>");
// 		h.text(email_text);
// 		par.text(comment_text);
// 		di.insertBefore('form');
// 		di.append(h, par);
// 		comment.val('');
// 		email.val('');
// 		par.on('click', function(){
// 		console.log('asdasdasd');
// 		})
// 		// $('body').on('click', 'p' function(){
// 		// console.log('asdasdasd');
// 		})
// 		})

//  function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// };

// ---------------------------------------Lesson19---------------------------------------------
// get, post, put, patch, delete, option, head

// $(function () {
// 	$('button').on('click', function(){
// 		$.ajax({
// 			url: 'http://gs-class.com/age.php',
// 			method: 'get',
// 			success: function(){
// 				console.log('works!')
// 			},
// 			error:function(){
// 				console.log('Oooops!')
// 			}
// 		});
// 	});
// });

// $(function () {
// 	$('[type=submit]').on('click', function(e){
// 		e.preventDefault(e);
// 		$.ajax({
// 			url: 'http://gs-class.com/age.php',
// 			method: 'post',
// 			// dataType:'json',
// 			success: function(){
// 				console.log('works!')
// 			},
// 			error:function(){
// 				console.log('Oooops!')
// 			},
// 			data:{ 	
// 				name: $('#name').val(),
// 				lastname: $('#lastname').val(),
// 				age: $('#age').val(),

// 			}
			
// 		});
// 	});
// });


// $(function () {
// 	$.ajax ({
// 			url: 'http://gs-class.com/ajax.php',
// 			method: 'post',
// 			dataType:'json',
// 				success: function(responce){
// 				console.log(responce)
// 				},
// 				error:function(){
// 				console.log('Oooops!')
// 				},
// 			});
// });

// -----------------------------------------------Lesson21-------------------------------------------
// $(function(){
	// $('#accordion').accordion();

	// $('#datepicker').datepicker({
	// 	showWeek:true;
	// 	showAnim:"blind";
	// });

	// $('#draggable').draggable();
	// $( "#droppable" ).droppable({
 //      drop: function( event, ui ) {
 //        $( this )
 //          .addClass( "ui-state-highlight" )
 //          .find( "p" )
 //            .html( "Dropped!" );
 //      }

  // var availableTags = [
  //     "ActionScript",
  //     "AppleScript",
  //     "Asp",
  //     "BASIC",
  //     "C",
  //     "C++",
  //     "Clojure",
  //     "COBOL",
  //     "ColdFusion",
  //     "Erlang",
  //     "Fortran",
  //     "Groovy",
  //     "Haskell",
  //     "Java",
  //     "JavaScript",
  //     "Lisp",
  //     "Perl",
  //     "PHP",
  //     "Python",
  //     "Ruby",
  //     "Scala",
  //     "Scheme"
  //   ];
  //   $( "#tags" ).autocomplete({
  //     source: availableTags
  //   });

  // $('.banner').unslider();
//   var mixer =mixitup('.container');
// });

// $( function() {
//     $( "#accordion" ).accordion();
//  });
// -----------------------------------------------23---------------------------
// var collection = [
// { 
// 	text:'Hello there',
// 	author:'Sam Adams',
// 	date:'March 8 1989',
// 	rating:5,
// 	greet: function(){
// 		console.log(this.author);
// 	}
// },
// {
// 	text:'Hello there',
// 	author:'Edvin durke',
// 	date:'august 26 2016',
// 	rating:5
// },
// {
// 	text:'This is article',
// 	author:'parampamoam',
// 	date:'february 6 2079',
// 	rating:2
// }
// ];

// for (var key in collection) {
// 	console.log(collection[key].author);
// }

// console.log(collection[1].author);

// _.each(collection,function(elm,key){
// 	console.log(elm.author);
// });

// var someelm = _.find(collection, function(elm,key){
// 	return elm.author === 'Sam Adams';
// })
// console.log(someelm);


// var mostPopular = _.find(collection, function(elm,key){
// 	return elm.rating === 5;
// })
// console.log(mostPopular);

// var mostPopular = _.filter(collection, function(elm,key){
// 	return elm.rating === 5;
// })
// console.log(mostPopular);

// var mostPopular = _.where(collection, {rating:5});

// console.log(mostPopular);

// var lessPopular = _.reject(collection, function(elm,key){
// 	return elm.rating === 5;
// })
// console.log(lessPopular);


// var exists = _.some(collection, function(elm,key){
// 	return elm.rating === 5;
// })
// console.log(exists);

// collection[0].great();


// _.invoke(collection, 'greet');

// console.log(_.pluck(collection, 'author'));

// var maxRating = _.max(collection, function(elm,key){
// 	return elm.rating;
// })
// console.log(maxRating);

// var minRating = _.min(collection, function(elm,key){
// 	return elm.rating;
// })
// console.log(minRating);

// console.log(_.shuffle(collection));

// console.log(_.sample(collection, 2));

// var obj = {
// 	key1:'value1',
// 	key2:'value2',
// 	key3:'value3',
// 	key4:'value4',
// };
// console.log(_.size(obj));

// console.log(_.first(collection,2));

// console.log(_.last(collection,2));

// console.log(_.rest(collection,2)); видаляє той який вказуєш або перший якщо не вказати

// var arr = ([1,2,0,2,1,3,6,4,5]);
// var x = _.without(arr, 0,1);
// console.log(x);

// var x = _.intersection([1,2,3], [2,9,9]);
// console.log(x);

// var x = _.difference([1,2,3], [2,9,9]);
// console.log(x);

// var x = _.uniq([1,5,2,1,6,5,8]);
// console.log(x);

// var arr = ['one', 'two', 'three'];
// console.log(_.indexOf(arr,'two'));

// console.log(_.range(10));
// console.log(_.range(2,5));
// console.log(_.range(2,50,2));

// console.log(_.random(100,1000));

// console.log(_.now());
// ------------------------------1--------------------
// function getRange (num) {
// 	return _.range(num);
// }
// console.log(getRange(19));

// --------------------------2-----------------------
// $(function(){
// 	getDiv();
// });
// function getDiv(){
	
// 	for (var i=0; i<random(1,50); i++ ) {
// 		$('<div>').appendTo('body');
// 	};
// };
// -----------------------3------------------

// var collection = [
// {
// 	name:'Nazar',
// 	age:28,

// },
// {
// 	name:'Gregory',
// 	age:27,
// },
// {
// 	name:'Aslan',
// 	age:44
// }]
// function retArr(collection) {
// 	return _.filter(collection, function(elm,key){
// 		return elm.age>=18;
// 	})
// }
// console.log(retArr(collection));

// -------------------------8-10-------------------------------
// $(function () {
// 	someFun();
// 	$('button').on('click', function(){
// 		var current = ($(this).data('id'));
// 		if (current == 'All') {
// 			$ ('.comment').show()
// 			return;
// 		} 
// 		$('.comment').hide();
// 		$('.comment').each(function() {
// 			if ($(this).data('id') == current){
// 				$(this).show();
			
// 			}
// 		})
// 	})
// })
// function someFun() {
// 	$.ajax({
// 		dataType:'json',
// 		url: 'http://gs-class.com/collection.php',
// 		method:'GET',
// 		success: function (jsonData) {
// 			// var getAnna = _.filter(jsonData, function (elm,key) {
// 			// 	return elm.name === 'Anna';
// 			// });
// 			// console.log (getAnna);
// 			_.each(jsonData, function (elm, key) {
// 				var newDiv = $ ('<div class = "comment">');
// 				newDiv.data('id', elm.data);
// 				var newH5 = $ ('<H5>');
// 				var newP = $ ('<p>');
// 				var newSmall = $ ('<small>');
// 				newH5.text(elm.name);
// 				newP.text(elm.comment);
// 				newSmall.text(elm.data);
// 				newDiv.append(newH5, newP, newSmall);
// 				newDiv.appendTo('body');
				

// 			})
// 		}
// 	})
// }



// ------------------------------Lesson24--------------------------
