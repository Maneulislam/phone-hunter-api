const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhone(phones);
}





const displayPhone = phones => {
    // console.log(phones);

    const phoneDiv = document.getElementById('phone-container');
    phoneDiv.textContent = ' ';



    const showAllBtn = document.getElementById('Show-All-btn');
    if(phones.length > 12){
        showAllBtn.classList.remove('hidden');
    }
    else{
        showAllBtn.classList.add('hidden');
    }


    phones = phones.slice(0,12);





    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList = `card bg-gray-100 p-4 text-black shadow-xl`;
        div.innerHTML = `
        <figure>
                      <img
                        src="${phone.image}" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">Brand : ${phone.brand}</h2>
                      <h4>Phone Name : ${phone.phone_name}</h4>
                      <p>${phone.slug}</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        `;

        phoneDiv.appendChild(div);
        
    });

}



const handleSearch = () => {
    const searchField = document.getElementById('searchInput')
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText);
}


loadPhone();