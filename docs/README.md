# URL del sitio web

- https://kaleidoscopic-tartufo-533abf.netlify.app/

# Auditoria PWA con Lighthouse

Se [eliminó](https://github.com/GoogleChrome/lighthouse/pull/15455) la categoría PWA de lighthouse.

Ver el [informe del sitio web](kaleidoscopic-tartufo-533abf.netlify.app_2025-01-01_20-39-25.report.html).

Generación del informe:
```
npm install -g lighthouse
lighthouse https://kaleidoscopic-tartufo-533abf.netlify.app/
```

## Refresca la memoria caché (online)

![title](online.avif)

## Lee la memoria caché (offline)

![title](offline.avif)

# Parámetros para el service worker

Angular genera el archivo de configuración para el service worker llamado [ngsw-config.json](ngsw-config.json). Este archivo especifica cómo el service worker debe cachear los archivos y gestionar las actualizaciones de datos.

```
  "dataGroups": [
    {
      "name": "images-api",
      "urls": [
        "https://picsum.photos/**"
      ],
      "cacheConfig": {
        "maxSize": 31,
        "maxAge": "1h30m",
        "timeout": "1s",
        "strategy": "freshness"
      }
    }
  ]

```
- urls: se almacenan en cache todas las respuestas del sitio https://picsum.photos/
- cacheConfig: configura la estrategia para las llamadas a las apis.
  - maxSize: es el número máximo de respuestas que se guardaran en caché. Su valor es 31: una para obtener el listado de las images, que contiene 30 elementos, y 30 más para obtener los detalles de las 30 imágenes.
  - maxAge: el tiempo que se almacena la información en la caché, por ejemplo, una hora y media 1h30m. Sufijos:
    - u: milisegundos
    - s: segundos
    - m: minutos
    - h: horas
    - d: días
  - timeout: es el tiempo máximo que se espera para obtener una respuesta, si no hay respuesta se busca la información en la caché. Por ejemplo, un segundo.
  - strategy: es la estrategia de caché, por ejemplo ```freshness```.
     - Con ```freshness``` primero consulta a internet y después la caché: ya que nos interesa tener los últimos datos actualizados, y si por lo que fuese no hubiera internet, por lo menos, se puede seguir utilizando la aplicación con los datos de la caché, aunque estos no fueran los últimos.
     - Con ```performance``` se optimiza la actualización de los datos, obteniendo preferentemente los datos solicitados de internet. Solo si se agota el tiempo de espera, según el valor de timeout, la solicitud vuelve a la memoria caché. Esto resulta útil para recursos que cambian con frecuencia.
