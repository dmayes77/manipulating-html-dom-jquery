document.addEventListener('DOMContentLoaded', function() {
	//1
	let btn = document.createElement('button');
	let btnMsg = document.createTextNode('Click Me!');
	btn.appendChild(btnMsg);
	document.body.appendChild(btn);

	btn.addEventListener('click', () => {
		alert("It's great to be alive!");
	});

	//2
	let btnId = document.getElementById('button');
	btnId.addEventListener('click', () => {
		let text = document.getElementById('inputText').value;
		alert(text);
	});

	//3
	let divHover = document.getElementById('hover');
	divHover.addEventListener('mouseover', () => {
		divHover.style.backgroundColor = getRandomColor();
	});
	divHover.addEventListener('mouseout', () => {
		divHover.style.backgroundColor = 'transparent';
	});

	//4
	let p = document.getElementById('colorChange');
	p.addEventListener('click', () => {
		p.style.color = getRandomColor();
	});

	function getRandomColor() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	}

	//5
	let div = document.createElement('div');
	let btn2 = document.createElement('button');
	let btnMsg2 = document.createTextNode('SPAN');
	btn2.appendChild(btnMsg2);
	document.body.appendChild(btn2)	
	document.body.appendChild(div);

	let span = document.createElement('span');
	let sText = document.createTextNode('David');
	btn2.addEventListener('click', () => {
		span.appendChild(sText);
		div.appendChild(span)
	})

	//6
	let btnThree = document.getElementById('btnThree');
	btnThree.addEventListener('click', addFriends);

	function addFriends() {
		let friends = ['April', 'Larry', 'Tay', 'Jermaine', 'Rachel', 'Jessica', 'Sharon', 'Carlos', 'Maria', 'Wesley']
		for (var i = 0; i < friends.length; i++) {
			let li = document.createElement('li');
			let ul = document.getElementById('list');
			li.innerText = friends[i];
			ul.appendChild(li);
		}
	}
});
