const Greeting = () => {
	const myFirstName = document.getElementById('fname').value;
	const mylastName = document.getElementById('lname').value;
	const myAge = document.getElementById('Age').value;
	const myGender = document.getElementById('gender').value;
	const myRegion = document.getElementById('area').value;
	const myHobbies = document.getElementById('hobby').value;
	alert(
		'Your Details' +
			'\nfirst Name: ' +
			myFirstName +
			'\nLast Name: ' +
			mylastName +
			'\nAge: ' +
			myAge +
			'\nGender: ' +
			myGender +
			'\nRegion: ' +
			myRegion +
			'\nHobbies: ' +
			myHobbies
	);
};
