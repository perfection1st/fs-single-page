
// defer script in HTML or else .js will load before our HTML 
//(<script defer src="./index.js"></script>)
// you can't grab the div container if it isn't loaded..

//vehicleList creates a ul element in our HTML
let ownersList = document.createElement("ul");
let carsList = document.createElement("ul");
//container selects our div element of id=container
let container = document.getElementById("container");
container.appendChild(ownersList);
container.appendChild(carsList);

//fetch our URL, then convert data to json object(parse data)
fetch('http://localhost:3001/api/cars')
//response.json converts into JS Object
  .then((data) => data.json())
  .then((data) =>  {
    data.forEach(cars => {
        let carsElement = document.createElement("li");
        carsElement.innerHTML = `${cars.make} ${cars.year} ${cars.color}`;
        carsList.appendChild(carsElement);
    })
  })
  .catch(err => {
    console.log(err);
  })

  fetch('http://localhost:3001/api/owners')
  //response.json converts into JS Object( array of objects)
    .then((data) => data.json())
    //use foreach to create li for each object property 
    .then((data) => {
    // Use the forEach method to iterate over our array of objects which we define as owners 
    //we create an li element then use innerHTML to define what is inside of our li tag
    //append all our li's to our ul 
    data.forEach(owners => {
        let ownersElement = document.createElement("li");
        ownersElement.innerHTML = `${owners.first_name} ${owners.last_name}`;
        ownersList.appendChild(ownersElement);
    })    
    })
    .catch(err => {
      console.log(err);
    })

//adding an event listener
let submitAddCar = document.getElementById("submit-add-car");

submitAddCar.addEventListener("click", function (event) {
    //event.preventDefault prevents the default action of the input type of submit
    event.preventDefault();
    console.log("working button")
})





















  //   fetch('localhost:3001/api/owners/')
//   .then((response) => response.json())
//   .then((data) => console.log(data));