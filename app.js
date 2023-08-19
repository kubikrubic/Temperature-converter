const celsius = document.querySelector('#celsius')
const fahrenheit = document.querySelector('#fahrenheit')
const kelvins = document.querySelector('#kelvins')
const reset = document.querySelector('#reset')

celsius.addEventListener('input', () => {
	let celsiusValue = parseFloat(celsius.value);
	let fahrenheitValue = celsiusValue * 9 / 5 + 32
	let kelvinsValue = celsiusValue + 273

	fahrenheit.value = fahrenheitValue.toFixed(1)   
	kelvins.value = kelvinsValue.toFixed(1)  
})


fahrenheit.addEventListener('input', () => {
	let fahrenheitValue = parseFloat(fahrenheit.value)
	let celsiusValue = (fahrenheitValue - 32) * 5 / 9
	let kelvinsValue = (fahrenheitValue + 459.67) * 5/9

	celsius.value = celsiusValue.toFixed(1) 
	kelvins.value = kelvinsValue.toFixed(1) 
})

kelvins.addEventListener('input', () => {
	let kelvinsValue = parseFloat(kelvins.value)
	let fahrenheitValue = kelvinsValue * 9/5 - 459.67
	let celsiusValue = kelvinsValue - 273

	celsius.value = celsiusValue.toFixed(1) 
	fahrenheit.value = fahrenheitValue.toFixed(1) 
})


reset.addEventListener('click', () => {
	celsius.value = ''
	kelvins.value = ''
	fahrenheit.value = ''
})
