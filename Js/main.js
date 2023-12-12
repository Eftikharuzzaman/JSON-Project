
const loadData = async(searchText = "a", isMore) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data = await res.json()
    showItem(data.data, isMore)
  }
  
  loadData();
  
  const showItem =(phone,isMore) => {
    const phoneBox = document.getElementById('Phone-item');
    const errorMessage = document.getElementById('error');
    const ShowMoreButton = document.getElementById('showMoreButton');
    phoneBox.innerHTML = " ";
    let phones = phone;
  
    if(phones.length >= 6){
      ShowMoreButton.classList.remove('hidden')
    }
    else{
      ShowMoreButton.classList.add('hidden')
    }
  
    // ===============> Not Found Text Customize Start <===============
    if(phones.length > 0){
      errorMessage.classList.add('hidden')
    }
    else{
      errorMessage.classList.remove('hidden')
    } 
    // ========================> Not Found Text Customize End <========================
  
    // ========================> Show More Condition Setup Start <========================
  
    // isMore যদি false হয়?
    if(!isMore){
      phones = phones.slice(0,9)
    }
    // আর true হলে সবগুলো দেখাবে
  
    // ========================> Show More Condition Setup End <========================
  
    phones.forEach(phone => {
      // console.log(phone);
      
      const div =document.createElement("div");
      div.innerHTML = `
      <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>${phone.slug}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
      `;
    phoneBox.appendChild(div)
    })
    loadingPage(false)
  };
  
  
  // ========================> SearchPhone Section Start <========================
  const searchPhone =(isMore) => {
    loadingPage(true)
    const inputField = document.getElementById('search-Field').value
  
      // যদি Empty কিছু না থাকে তাহলে এটা যাবে
  if(inputField === ' '){
    loadData(inputField = "sam",isMore)
  }
      // যদি Empty কিছু থাকে তাহলে এটা যাবে
    loadData(inputField, isMore);
  }
  // ========================> SearchPhone Section End <========================
  
  // ========================> Loading Section Start <========================
  const loadingPage = (isLoading) => {
    const loaDing = document.getElementById('loading')
  
    if(isLoading){
      loaDing.classList.remove('hidden')
    }
    else{
      loaDing.classList.add('hidden')
    }
  }
  // ========================> Loading Section End <========================
  
  // ShowMore Button Customization Start
  
  const showMore = () => {
    searchPhone(true);
  }
  // ShowMore Button Customization End  