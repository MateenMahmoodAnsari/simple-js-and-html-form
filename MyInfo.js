const Greeting = () => {
	const myForm = document.getElementById('myForm');
	const formElements = myForm.elements;
	const gender = formElements.gender.value;
	const myFirstName = document.getElementById('fname').value;
	const mylastName = document.getElementById('lname').value;
	const myAge = document.getElementById('Age').value;
	const myRegion = document.getElementById('area').value;
	const myHobbies = getHobbies();
	alert(
		'Your Details' +
			'\nfirst Name: ' +
			myFirstName +
			'\nLast Name: ' +
			mylastName +
			'\nAge: ' +
			myAge +
			'\nGender: ' +
			gender +
			'\nRegion: ' +
			myRegion +
			'\nHobbies: ' +
			myHobbies
	);
};
