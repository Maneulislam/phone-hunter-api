const loadPhone = async (searchText ,isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhone(phones, isShowAll);
}





const displayPhone =( phones, isShowAll )=> {
    // console.log(phones);

    const phoneDiv = document.getElementById('phone-container');
    phoneDiv.textContent = ' ';



    const showAllBtn = document.getElementById('Show-All-btn');
    if(phones.length > 12 && !isShowAll){
        showAllBtn.classList.remove('hidden');
    }
    else{
        showAllBtn.classList.add('hidden');
    }


    console.log("Show All",isShowAll)


    if(!isShowAll){
        phones = phones.slice(0,12);

    }

    loadingSpinner(false);  



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
                      <p></p>
                      <div class="card-actions justify-center">
                        <button id="show-detail-btn" onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
                      </div>
                    </div>
        `;

        phoneDiv.appendChild(div);
        
    });

    loadingSpinner(false);  


}




const handleShowDetail = async (id) => {
    console.log("Click Show Details",id);

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    console.log(data);

}






const handleSearch = (isShowAll) => {
    const searchField = document.getElementById('searchInput')
    const searchText = searchField.value;
    console.log(searchText) 
    loadingSpinner(true);  
    loadPhone(searchText,isShowAll);
}




const loadingSpinner = (isLoading) => {
    const loadSpinnner = document.getElementById('loading-spinner');
    if(isLoading){
        loadSpinnner.classList.remove('hidden');
    }
    else{
        loadSpinnner.classList.add('hidden');
    }
}




const handleShowAll = (isShowAll) => {
    handleSearch(true);

}




loadPhone();