const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://svesgap97.github.io",
  "baseurl": "/coleccion-rae",
  "title": "Ediciones especiales de la Real Academia Española",
  "subtitle": "Colección personal",
  "credits": "Por Santiago Vesga",
  "copyright": "TDR, 2025",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "titulo",
        "label": "Titulo",
        "type": "text"
      },
      {
        "key": "autor",
        "label": "Autor",
        "type": "text"
      },
      {
        "key": "pais",
        "label": "Pais",
        "type": "text"
      },
      {
        "key": "anho edicion",
        "label": "Anho edicion",
        "type": "text"
      },
      {
        "key": "genero",
        "label": "Genero",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "titulo",
      "autor",
      "pais",
      "anho edicion",
      "genero"
    ]
  }
};
export default config;