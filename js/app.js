
let manoAjax = new XMLHttpRequest();
manoAjax.onreadystatechange = function () {
        if(manoAjax.readyState == 4){
            if (manoAjax.status == 200){
                //kad nebutu string reikia paversti i objekta parse.
                let domain = JSON.parse(manoAjax.responseText);
                let laikas = domain.forecastTimestamps;

            }
        }
}






manoAjax.open('GET', 'https://api.meteo.lt/v1/places/kaunas/forecasts/long-term?fbclid=IwAR3e6UvJChUM9m9lPsoCoBDBwBP-F_2g4IXqB2CosZyAJcQqeEx6c7FroqQ');
manoAjax.send();