const url = "https://jsonplaceholder.typicode.com/posts";
// const url = "https://random-data-api.com/api/users/random_user?size=10";


interface iResponse {
  id: string;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: { title: string; key_skill: string };
  address: {
    city: string;
    street_name: string;
    street_address: string;
    zip_code: string;
    state: string;
    country: string;
    coordinates: { lat: number; lng: number };
  };
  credit_card: { cc_number: string };
  subscription: {
    plan: string;
    status: string;
    payment_method: string;
    term: string;
  };
}

const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const users: iResponse[] = await response.json();
      return users;
    } catch (error) {
      console.error(error);
    }
}

const showUserData = async () => {
  let usersInfo: any = await fetchUsers();
  
  // for (var product of usersInfo) {
    //   console.log(product);
    // }
    const mainContainer = document.querySelector("main");
    let userInfo = ''

    if (!mainContainer) return

    usersInfo.map((user: any) => {
        let info = `
          <div class="flip-card">
            <div class="flip-card-content">
                <div class="flip-card-front">
                    <img src=${user.id} alt="user-info">
                    <span>
                        <h3>${user.title} </h3>
                    </span>
                </div>
                <div class="flip-card-back">
                    <h3>More Info</h3>
                    <ul>
                        <li><h4>Address: </h4> <p>dfbhbnkndf</p></li>
                        <li><h4>Address: </h4> <p>dfbhbnkndf</p></li>
                        <li><h4>Address: </h4> <p>dfbhbnkndf</p></li>
                        <li><h4>Address: </h4> <p>dfbhbnkndf</p></li>
                        <li><h4>Address: </h4> <p>dfbhbnkndf</p></li>
                    </ul>
                </div>
            </div>
        </div>
        `;
        userInfo += info;
    })
    
    mainContainer.innerHTML = userInfo
        
}
showUserData();



const newFetchBtn = () => {
  const fetchBtn = document.querySelector(".fetch-btn");
  if (!fetchBtn) return;
  fetchBtn.addEventListener("click", () => {
    // showUserData();
    console.log("dfgvdfbdf");
  });
}
newFetchBtn()



                // <div class="flip-card-front">
                //     <img src=${user.avatar} alt="user-info">
                //     <span>
                //         <h3>${user.first_name} ${user.last_name}</h3>
                //         <p>${user.username}</p>
                //     </span>
                // </div>
