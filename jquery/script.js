$(document).ready(() => {
	//1
	let $btn = $('<button> Click Me! </button>');
	$('body').append($btn);

	$btn.click(() => {
		alert("It's great to be alive!");
	});

	//2
	$('#button').click(() => {
		alert($('#inputText').val());
	});

	//3
	$('#hover').mouseover(e => {
		$(e.target).css({ backgroundColor: getRandomColor() });
	});
	$('#hover').mouseout(e => {
		$(e.target).css({ backgroundColor: 'transparent' });
	});

	//4
	$('#colorChange').click(e => {
		$(e.target).css({ color: getRandomColor() });
	});

	function getRandomColor() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	}

	//5
	$('body').append($('<button id="btnTwo">SPAN</button>'));
	$('body').append($('<div id="div"></div>'));
	$('#btnTwo').click(() => {
		$('#div').append($('<span>David </span>'));
	});

	//6
	$('#btnThree').click(() => {
		let friends = ['April', 'Larry', 'Tay',	'Jermaine',	'Rachel', 'Jessica', 'Sharon', 'Carlos', 'Maria', 'Wesley'];
		for (var i = 0; i < friends.length; i++) {
			$('#list').append('<li>' + friends[i] + '</li>');
		}
	});
});
