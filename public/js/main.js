const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();// to prevent reload of the page.
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Please enter city name in the search box.`;
        datahide.classList.add('data_hide');//to hide data.
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ec35efd8815c6e8cf3ae19adb5711292&units=metric`;
            const response = await fetch(url);// fetch gets data from api in json format.
            const data = await response.json();// json to obj conversion
            const arrayData = [data];
            //console.log(arrayData);

            city_name.innerText = `${arrayData[0].name}, ${arrayData[0].sys.country}`;
            temp.innerText = arrayData[0].main.temp;
            temp_Mood = arrayData[0].weather[0].main;
            if (temp_Mood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (temp_Mood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (temp_Mood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
            }

            datahide.classList.remove('data_hide');// to remove hide

        } catch {
            city_name.innerText = `City not found! Please enter correct name.`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);