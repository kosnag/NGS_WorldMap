const formObject = document.getElementsByTagName("form")[0];
formObject.addEventListener("submit",(event) => {
    event.preventDefault();          
    const loginData = {
        "user": event.target[0].value,
        "pass": event.target[1].value
    } 
    const request = new XMLHttpRequest;
    request.open("POST","../../api/auth.php");
    request.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
                if (JSON.parse(this.responseText).status === "success"){
                    setTimeout(location.href = "/mapping", 1000)
                }
        }
    };
    request.send(JSON.stringify(loginData));
});

L.map(document.getElementsByTagName("map")[0],{
    zoom: 0,
    minZoom: 0,
    maxZoom: 0,
    crs: L.CRS.Simple,
    maxBounds: [[-2048-100, 0-250], [0+400, 2048+250]],
    center: [-2048/2, 2048/2],
    zoomControl: false,
    attributionControl: false,
    keyboard: false,
    maxBoundsViscosity: 0.5,
    doubleClickZoom: false,
    layers: [
        L.tileLayer("../../assets/images/tiles/{z}/{y}-{x}.png",{
            bounds: [[-2048, 0], [0, 2048]],
            tileSize: 1024,
            noWrap: true
        })
    ]
});