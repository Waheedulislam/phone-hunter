// search-field 
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const error = document.getElementById('error');
    const searchText = searchField.value;
    // console.log(searchText);
    if (searchText == '') {
        error.innerText = 'Sorry, No result found for your result !!';
        searchField.value = '';
    }
    else {
        searchField.value = '';
        const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => DisplayPhoneResult(data.data.slice(0, 20)))
    }

}

const DisplayPhoneResult = (phones) => {
    const searchResult = document.getElementById('search-result');
    const error = document.getElementById('error');
    searchResult.innerHTML = '';
    if (phones.length == 0) {
        error.innerText = 'Sorry, No result found for your result !!';
    };
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 w-80 p-3 bg-color shadow">
                    <img src="${phone.image}" class=" card-img-center w-100 h-100  " alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">${phone.brand}</p>
                        <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary w-50">More Explore</button>
                    </div>
                </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadPhoneDetails = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data));
}

const displayPhoneDetail = phone => {
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h4 class="card-title ">${phone.name}</h4> 
        <p class="card-text">chipSet: ${phone.mainFeatures.chipSet}</p>
        <p class="card-text">ReleaseDate: ${phone.releaseDate}</p>
        <p class="card-text">Brand: ${phone.brand}</p>
        <p class="card-text">DisplaySize: ${phone.mainFeatures.displaySize}</p>
        <p class="card-text">Memory: ${phone.mainFeatures.memory}</p>
        <h4 class="text-center text-color">Others</h4>
        <p class="card-text">Bluetooth: ${phone.others.Bluetooth}</p>
        <p class="card-text">GPS: ${phone.others.GPS}</p>
        <p class="card-text">NFC: ${phone.others.NFC}</p>
        <p class="card-text">Radio: ${phone.others.Radio}</p>
        <p class="card-text">USB: ${phone.others.USB}</p>
        <p class="card-text">WLAN: ${phone.others.WLAN}</p>
    </div>
    `;
    phoneDetails.appendChild(div);
}