// search-field 
const searchPhone = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`

    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => DisplayPhoneResult(data.data))
}

const DisplayPhoneResult = (phones) => {
    // console.log(phones);
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 w-80 p-3 bg-color shadow">
                    <img src="${phone.image}" class=" card-img-center w-100 h-100  " alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">${phone.brand}</p>
                        <button class="btn btn-primary w-50">More Detaisl</button>
                    </div>
                </div>
        `;
        searchResult.appendChild(div);
    })
}