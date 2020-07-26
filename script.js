// Write your JavaScript code here!
window.addEventListener("load", function() {

   let form = document.querySelector("form");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");

   form.addEventListener("submit", function(event) {

      event.preventDefault();
                         
       if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" ||  cargoMassInput.value === "" ) {
               alert("All fields are required!");
               event.preventDefault();
       }

       if (isNaN(pilotNameInput.value)){
       } else {   
         alert("Pilot field should be a name!");
         event.preventDefault();
       }

       if (isNaN(copilotNameInput.value)){
       } else {   
         alert("Co-pilot field should be a name!");
         event.preventDefault();
       }

       if (isNaN(fuelLevelInput.value)){
         alert("fuelLevel field should be number!");
         event.preventDefault();
       }

       if (isNaN(cargoMassInput.value)) {
         alert("CargoMass field should be number " );
         event.preventDefault();
       }

       pilotStatus.innerHTML = ` Pilot ${pilotNameInput.value} is ready for launch`;
       copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;

       if (Number(fuelLevelInput.value) < 10000 & Number(cargoMassInput.value) < 10000){
          faultyItems.style.visibility = "visible";
          cargoStatus.innerHTML = "Cargo mass low enough for launch" ;
          fuelStatus.innerHTML = "Fuel level too low for launch." ;
          launchStatus.innerHTML = "Shuttle not ready for launch.";
          launchStatus.style.color = "red";
       } else if (Number(fuelLevelInput.value) < 10000 & Number(cargoMassInput.value) > 10000){
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level too low for launch." ;
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off." ;
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.style.color = "red";
      } else if (Number(fuelLevelInput.value) > 10000 & Number(cargoMassInput.value) > 10000){
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level high enough for launch." ;
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off." ;
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.style.color = "red";
      } else if (Number(fuelLevelInput.value) > 10000 & Number(cargoMassInput.value) < 10000){
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level high enough for launch." ;
         cargoStatus.innerHTML = "Cargo mass low enough for launch" ;
         launchStatus.innerHTML = "Shuttle is ready for launch.";
         launchStatus.style.color = "green";
      } 

   });    

   // This block of code shows how to format the HTML once you fetch some planetary JSON!
   let json = [];
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         console.log(json);
      
      const missionTarget = document.getElementById("missionTarget");
      missionTarget.innerHTML += `
   
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[4].name}</li>
            <li>Diameter: ${json[4].diameter}</li>
            <li>Star: ${json[4].star}</li>
            <li>Distance from Earth: ${json[4].distance}</li>
            <li>Number of Moons: ${json[4].moons}</li>
         </ol>
         <img src="${json[4].image}">
        `;
      });
   });
  
});
 


