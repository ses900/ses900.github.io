
<!DOCTYPE html>
<html>


<head>
  <!-- Importering af leaflet biblioteket, som sørger for præsentationslaget -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />
  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
  <script src="https://d3js.org/d3.v5.js"></script>
</head>

<body>
  <!-- Div her er blot en sektion af siden. vi giver den det unikke id "coronaMap", som bruges af leaflet biblioteket -->
  <div id="coronaMap" style="height: 600px;"></div>
  <!-- Main.js skal loades efter "coronaMap", så den kan tilgåes i JavaScript-koden -->
  <script src="main.js"></script>
</body>

</html>