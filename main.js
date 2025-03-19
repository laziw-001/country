const url = 'https://restcountries.com/v3.1/all'
const input = document.querySelector('input')
const button = document.querySelector('button')
async function fetchCountries() {
	let response = await fetch(url)
	let data = await response.json()

	let cardParent = document.querySelector('.card-parent')
	cardParent.innerHTML = ''

	const filterData = data.filter(function (flag) {
		return flag.name.common.toLowerCase().includes(input.value.toLowerCase())
	})

	filterData.forEach(flag => {
		const card = document.createElement('div')
		card.classList.add('card')

		card.innerHTML = `
		        <div>
		            <img src=${flag.flags.png} alt=${flag.name.common} />
		        </div>
		        <h2>${flag.name.common}</h2>
		        `

		cardParent.appendChild(card)
	})
}

button.addEventListener('click', () => {
	document.body.classList.toggle('dark')
})

fetchCountries()
input.addEventListener('input', fetchCountries)
