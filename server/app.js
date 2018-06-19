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

app.post('/find/establishment', function(req, res) {
    res.send(JSON.stringify(
        [
            {
                "id": "302629028",
                "name": "BOTICAS BTL",
                "category": "FARMACIAS",
                "department": "",
                "province": "",
                "district": "COMAS",
                "totalTransaction": 1986,
                "totalAmount": 116047.87,
                "averageTicket": 36.75,
                "latitude": -11.93353098,
                "longitude": -77.04726451,
                "nameCombo": "BOTICAS BTL - COMAS - 36.75"
            },
            {
                "id": "302629416",
                "name": "BTL111 COMAS4B DELIVERY",
                "category": "FARMACIAS",
                "department": "",
                "province": "",
                "district": "COMAS",
                "totalTransaction": 434,
                "totalAmount": 37732.35,
                "averageTicket": 60.42,
                "latitude": -11.9415252,
                "longitude": -77.06233726,
                "nameCombo": "BTL111 COMAS4B DELIVERY - COMAS - 60.42"
            },
            {
                "id": "305354105",
                "name": "FASA SANTA LUZMILA",
                "category": "FARMACIAS",
                "department": "",
                "province": "",
                "district": "COMAS",
                "totalTransaction": 2428,
                "totalAmount": 123138.32,
                "averageTicket": 34,
                "latitude": -11.94160897,
                "longitude": -77.06187356,
                "nameCombo": "FASA SANTA LUZMILA - COMAS - 34.0"
            },
            {
                "id": "331060135",
                "name": "INKAFARMA SAN FELIPE 4 DV",
                "category": "FARMACIAS",
                "department": "",
                "province": "",
                "district": "CARABAYLLO",
                "totalTransaction": 337,
                "totalAmount": 23302.97,
                "averageTicket": 48.1,
                "latitude": -11.89842268,
                "longitude": -77.03810014,
                "nameCombo": "INKAFARMA SAN FELIPE 4 DV - CARABAYLLO - 48.1"
            },
            {
                "id": "331066278",
                "name": "INKAFARMA SANTA LUZMILA",
                "category": "FARMACIAS",
                "department": "",
                "province": "",
                "district": "COMAS",
                "totalTransaction": 2268,
                "totalAmount": 114935.32,
                "averageTicket": 32.76,
                "latitude": -11.94377633,
                "longitude": -77.05859237,
                "nameCombo": "INKAFARMA SANTA LUZMILA - COMAS - 32.76"
            },
            {
                "id": "384891068",
                "name": "BOTICAS Y SALUD COMAS DV",
                "category": "FARMACIAS",
                "department": "",
                "province": "",
                "district": "COMAS",
                "totalTransaction": 228,
                "totalAmount": 31480.51,
                "averageTicket": 67.39,
                "latitude": -11.95611984,
                "longitude": -77.05278365,
                "nameCombo": "BOTICAS Y SALUD COMAS DV - COMAS - 67.39"
            },
            {
                "id": "418140094",
                "name": "BOTICAS ARCANGEL COMAS 4",
                "category": "FARMACIAS",
                "department": "",
                "province": "",
                "district": "COMAS",
                "totalTransaction": 1039,
                "totalAmount": 43759.22,
                "averageTicket": 28.95,
                "latitude": -11.94086224,
                "longitude": -77.05013875,
                "nameCombo": "BOTICAS ARCANGEL COMAS 4 - COMAS - 28.95"
            }
        ]        
    ));
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});