
//CHECK CLIC MENU DERNIERE VALEUR

document.getElementById('foo').addEventListener('click', function (event) {
    // alert("foo");

    //affichage ou masquage des blocs canevas
    document.getElementById("PremiereMesure").style.display = "block";
    document.getElementById("TopMesure").style.display = "none";
    document.getElementById("TableauMesure").style.display = "none";

    //Appel de l API Rasberry ***last-measure***
    const request = new XMLHttpRequest();
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', `https://distorted-louse-3971.dataplicity.io/last-measure`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)
            //alert(jsonResult)
            // console.log(jsonResult.measureDate.substring(14, 8));
            //Affectation des valeurs retourné par l'API
            document.getElementById("ValeurRetourDate").innerText = "Dernière mesure \ndu " + jsonResult.measureDate.substring(0, 10) + " \n    à " + jsonResult.measureDate.substring(11, 19);
            document.getElementById("ValeurRetourTemperature").innerText = "Temperature : " + jsonResult.temperature + " °C";
            document.getElementById("ValeurRetourpressure").innerText = "Pression : " + jsonResult.pressure + " hPa";
            document.getElementById("ValeurRetourHumidity").innerText = "Humidity : " + jsonResult.humidity + " %Hum";
        } else {
            console.log('Erreur ...')
        }
    }

    // Send request
    request.send();
}
);


//*****CHECK CLIC MENU DES VALEURS MAX 

document.getElementById('foo2').addEventListener('click', function (event) {
    //  alert("foo2");
    //affichage ou masquage des blocs canevas/   
    document.getElementById("TopMesure").style.display = "block";
    document.getElementById("PremiereMesure").style.display = "none";
    document.getElementById("TableauMesure").style.display = "none";


    //Appel de l API Rasberry pour MAX ***humidity***
    const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', `https://distorted-louse-3971.dataplicity.io//top-measure/humidity`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)

            //Affectation des valeurs retourné par l'API
            document.getElementById("ValeurRetourDateMaxH").innerText = "Top humidity\n" + jsonResult.measureDate.substring(0, 10) + "\n " + jsonResult.measureDate.substring(11, 19);
            document.getElementById("ValeurRetourTemperatureMaxH").innerText = "Temperature : " + jsonResult.temperature + " °C";
            document.getElementById("ValeurRetourpressureMaxH").innerText = "Pression : " + jsonResult.pressure + " Hpa";
            document.getElementById("ValeurRetourHumidityMaxH").innerText = "Humidity : " + jsonResult.humidity + " %Hum";

        } else {
            console.log('Erreur ...')
        }
    }
    // Send request
    request.send();



    //Appel de l API Rasberry pour MAX ***temperature***

    const request2 = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request2.open('GET', `https://distorted-louse-3971.dataplicity.io//top-measure/temperature`, true);

    request2.onload = function () {
        if (request2.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)
            //Affectation des valeurs retourné par l'API
            document.getElementById("ValeurRetourDateMaxT").innerText = "Top temperature\n" + jsonResult.measureDate.substring(0, 10) + " \n " + jsonResult.measureDate.substring(11, 19);
            document.getElementById("ValeurRetourTemperatureMaxT").innerText = "Temperature : " + jsonResult.temperature + " °C";
            document.getElementById("ValeurRetourpressureMaxT").innerText = "Pression : " + jsonResult.pressure + " Hpa";
            document.getElementById("ValeurRetourHumidityMaxT").innerText = "Humidity : " + jsonResult.humidity + " %Hum";

        } else {
            console.log('Erreur ...')
        }
    }
    // Send request
    request2.send();



    //Appel de l API Rasberry pour MAX ***pressure***
    const request3 = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request3.open('GET', `https://distorted-louse-3971.dataplicity.io//top-measure/pressure`, true);

    request3.onload = function () {
        if (request3.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)
            //Affectation des valeurs retournées par l'API
            document.getElementById("ValeurRetourDateMaxP").innerText = "Top pression\n" + jsonResult.measureDate.substring(0, 10) + "\n " + jsonResult.measureDate.substring(11, 19);
            document.getElementById("ValeurRetourTemperatureMaxP").innerText = "Temperature : " + jsonResult.temperature + " °C";
            document.getElementById("ValeurRetourpressureMaxP").innerText = "Pression : " + jsonResult.pressure + " Hpa";
            document.getElementById("ValeurRetourHumidityMaxP").innerText = "Humidity : " + jsonResult.humidity + " %Hum";

        } else {
            console.log('Erreur ...')
        }
    }
    // Send request
    request3.send();

}
);

//*****CHECK CLIC MENU DES GRAPHIQUE - NON EFFECTUE -
document.getElementById('foo4').addEventListener('click', function (event) {
  
    //affichage et masquage des blocs canevas/   
    document.getElementById("TopMesure").style.display = "none";
    document.getElementById("PremiereMesure").style.display = "none";
    document.getElementById("TableauMesure").style.display = "none";
    alert("Fonction non implemente");


}


);




//*****CHECK CLIC DU MENU TABLEAU 
document.getElementById('foo3').addEventListener('click', function (event) {
    // alert("foo");
    //affichage et masquage des blocs canevas/
    document.getElementById("PremiereMesure").style.display = "none";
    document.getElementById("TopMesure").style.display = "none";
    document.getElementById("TableauMesure").style.display = "block";
}


);


//*****CHECK CLIC DU BOUTON --GO-- MENU TABLEAU 


document.getElementById('PBGo').addEventListener('click', function (event) {

    //  alert("pbgo")
    //Réupération des valeurs contenue dans les ZoneTexte
    const MaDateDebut = document.getElementById("DateDebut").value;
    const MaDateFin = document.getElementById("DateFin").value;
    //constituion de la req avec dates
    const MaRequete = "https://distorted-louse-3971.dataplicity.io/measure/date?startDate=" + MaDateDebut + "&endDate=" + MaDateFin;

    //Appel de l API Rasberry pour TOTAL DES VALEURS ***measure***
    const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    // request.open('GET', `https://distorted-louse-3971.dataplicity.io/measure/date?startDate=2019-11-03&endDate=2019-11-07`, true);
    request.open('GET', MaRequete, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)
            console.log(jsonResult.m)

            //////récupuration par BOUCLE des valeurs contenues dans le tableau Jsonresult 
            for (i = 0; i < jsonResult.length; i++) {

                //////debut alimentatonb tableau    
                document.getElementById('tableComments').d

                const newDate = jsonResult[i].measureDate.substring(0, 10) + " " + jsonResult[i].measureDate.substring(11, 19);
                // const newDate = jsonResult[i].measureDate
                const newTemperature = jsonResult[i].temperature
                const newHumidity = jsonResult[i].pressure
                const newPression = jsonResult[i].humidity

                const newTR = document.createElement("tr");

                const newTDDate = document.createElement("td");
                newTDDate.innerText = newDate;

                const newTDTemperature = document.createElement("td");
                newTDTemperature.innerText = newTemperature;

                const newTDHumidity = document.createElement("td");
                newTDHumidity.innerHTML = newHumidity;

                const newTDPression = document.createElement("td");
                newTDPression.innerHTML = newPression;

                newTR.appendChild(newTDDate);
                newTR.appendChild(newTDTemperature);
                newTR.appendChild(newTDHumidity);
                newTR.appendChild(newTDPression);

                document.getElementById('tableComments').appendChild(newTR);

                event.preventDefault();

            }
            //////fin alimentaton tableau

        } else {
            console.log('Erreur ...')
        }
    }

    // Send request
    request.send();

    //fin appel fonction

    event.preventDefault();//ne pas refresh
})



//*****CHECK CLIC DU BOUTON --PURGE-- MENU TABLEAU pour vider le tableau de son contenu

document.getElementById('PBPurge').addEventListener('click', function (event) {
    // alert("purge")

    element.removeChild(tbody);

    document.getElementById("TableauMesure").style.display = "block";
    event.preventDefault(); //ne pas refresh
})
