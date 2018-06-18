var express = require('express');
var app = express();
var cors = require('cors')

app.use(cors())

app.get('/establishments', function (req, res) {
  res.send(JSON.stringify(
    [
        {
            "id": "548700501",
            "name": "PARRILLADAS EL HORNERO",
            "category": "RESTAURANTES",
            "department": "LIMA",
            "province": "LIMA",
            "district": "BARRANCO",
            "totalTransaction": 11722,
            "totalAmount": 3010266.5,
            "averageTicket": 183.54,
            "latitude": -12.133824,
            "longitude": -77.020061,
            "nameCombo": "PARRILLADAS EL HORNERO - BARRANCO - 183.54"
        },
        {
            "id": "511404702",
            "name": "VIEJO FUNDO",
            "category": "RESTAURANTES",
            "department": "LIMA",
            "province": "LIMA",
            "district": "BARRANCO",
            "totalTransaction": 5785,
            "totalAmount": 963617.7,
            "averageTicket": 131.11,
            "latitude": -12.1397275,
            "longitude": -77.01789663,
            "nameCombo": "VIEJO FUNDO - BARRANCO - 131.11"
        },
        {
            "id": "510670601",
            "name": "EL PARRILLON",
            "category": "RESTAURANTES",
            "department": "LIMA",
            "province": "LIMA",
            "district": "MIRAFLORES",
            "totalTransaction": 2863,
            "totalAmount": 682984.51,
            "averageTicket": 189.13,
            "latitude": -12.12816073,
            "longitude": -77.02614336,
            "nameCombo": "EL PARRILLON - MIRAFLORES - 189.13"
        },
        {
            "id": "510830201",
            "name": "PARDOS CHICKEN LA MOLINA",
            "category": "RESTAURANTES",
            "department": "LIMA",
            "province": "LIMA",
            "district": "LA MOLINA",
            "totalTransaction": 20851,
            "totalAmount": 1597665.34,
            "averageTicket": 56.13,
            "latitude": -12.06863157,
            "longitude": -76.94883833,
            "nameCombo": "PARDOS CHICKEN LA MOLINA - LA MOLINA - 56.13"
        },
        {
            "id": "563483901",
            "name": "LA CABRERA",
            "category": "RESTAURANTES",
            "department": "LIMA",
            "province": "LIMA",
            "district": "MIRAFLORES",
            "totalTransaction": 7219,
            "totalAmount": 1647963.43,
            "averageTicket": 181.39,
            "latitude": -12.11690848,
            "longitude": -77.02976266,
            "nameCombo": "LA CABRERA - MIRAFLORES - 181.39"
        },
        {
            "id": "518121106",
            "name": "LAS CANASTAS DELIVERY",
            "category": "RESTAURANTES",
            "department": "LIMA",
            "province": "LIMA",
            "district": "CHORRILLOS",
            "totalTransaction": 6008,
            "totalAmount": 352462.7,
            "averageTicket": 46.81,
            "latitude": -12.190578,
            "longitude": -77.006682,
            "nameCombo": "LAS CANASTAS DELIVERY - CHORRILLOS - 46.81"
        },
        {
            "id": "508877001",
            "name": "HIKARI LA MOLINA DELIVERY",
            "category": "RESTAURANTES",
            "department": "LIMA",
            "province": "LIMA",
            "district": "LA MOLINA",
            "totalTransaction": 9845,
            "totalAmount": 554430.04,
            "averageTicket": 43.31,
            "latitude": -12.0706699,
            "longitude": -76.94167444,
            "nameCombo": "HIKARI LA MOLINA DELIVERY - LA MOLINA - 43.31"
        },
        {
            "id": "552558901",
            "name": "LA TRANQUERA",
            "category": "RESTAURANTES",
            "department": "LIMA",
            "province": "LIMA",
            "district": "MIRAFLORES",
            "totalTransaction": 4260,
            "totalAmount": 1205660.59,
            "averageTicket": 229.06,
            "latitude": -12.11926861,
            "longitude": -77.03167185,
            "nameCombo": "LA TRANQUERA - MIRAFLORES - 229.06"
        },
        {
            "id": "513706201",
            "name": "EL CHARRUA RST PARRILLA",
            "category": "RESTAURANTES",
            "department": "LIMA",
            "province": "LIMA",
            "district": "LA MOLINA",
            "totalTransaction": 16656,
            "totalAmount": 5199356.51,
            "averageTicket": 250.36,
            "latitude": -12.07249168,
            "longitude": -76.95731937,
            "nameCombo": "EL CHARRUA RST PARRILLA - LA MOLINA - 250.36"
        },
        {
            "id": "302757610",
            "name": "LAS CANASTAS",
            "category": "RESTAURANTES",
            "department": "LIMA",
            "province": "LIMA",
            "district": "LA MOLINA",
            "totalTransaction": 5133,
            "totalAmount": 328035.34,
            "averageTicket": 52.07,
            "latitude": -12.09084492,
            "longitude": -76.94979938,
            "nameCombo": "LAS CANASTAS - LA MOLINA - 52.07"
        }
    ]
));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});