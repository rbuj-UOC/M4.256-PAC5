# URLs

| Tipo de URL   | URL                                               |
| ------------- | ------------------------------------------------- |
| Código fuente | https://github.com/rbuj-UOC/M4.256-PAC5           |
| Producción    | https://kaleidoscopic-tartufo-533abf.netlify.app/ |

# Auditoria PWA con Lighthouse

## Utilizando la versión actual de Lighthouse (12.3.0)

En el [informe del sitio web](kaleidoscopic-tartufo-533abf.netlify.app_2025-01-01_20-39-25.report.html) generado con la última versión de Lighthouse no aparece la categoría PWA, ya que se [eliminó](https://github.com/GoogleChrome/lighthouse/pull/15455) en la versión [12.0.0](https://github.com/GoogleChrome/lighthouse/releases/tag/v12.0.0) que se publicó el pasado 23 de abril de 2024.

Instalación de Lighthouse:

```
npm install -g lighthouse
```

Versión de Lighthouse:

```
lighthouse --version
12.3.0
```

Generación del informe:

```
lighthouse https://kaleidoscopic-tartufo-533abf.netlify.app/
```

## Utilizando una versión antigua de Lighthouse (11.7.1)

Para obtener el informe primero se construye [Lighthouse 11.7.1](https://github.com/GoogleChrome/lighthouse/releases/tag/v11.7.1) a partir del código fuente. En el informe se muestra que la página web supera satisfactoriamente todas las comprobaciones.

```
git clone https://github.com/GoogleChrome/lighthouse.git
cd lighthouse/
git checkout c317670fe6f7af85ec18d2a9f5cab4330468ba45
yarn --yes
yarn build-all
node cli https://kaleidoscopic-tartufo-533abf.netlify.app/
```

Ver el [informe del sitio web](kaleidoscopic-tartufo-533abf.netlify.app_2025-01-04_12-25-35.report.html).

# Banco de pruebas

## Forzar la actualización de la caché (online)

En la siguiente captura de pantalla se muestra como se fuerza la actualización de la memoria cache del sitio web mediante Chrome DevTools en el navegador web Google Chrome.

![title](img/online.avif)

## Lectura de la caché (offline)

En la siguiente captura de pantalla se muestra como se obtienen los datos de la memoria cache, simulado que no hay conexión a internet, mediante Chrome DevTools en el navegador web Google Chrome.

![title](img/offline.avif)

## Instalación de la aplicación en el escritorio en maOS Sonoma

### Google Chrome

Para instalar la aplicación en el escritorio, mediante la última versión del navegador Google Chrome (131.0.6778.205), solo hace falta hacer clic en el icono de instalación y después hay que pulsar el botón aceptar, como se muestra en la siguiente captura:

![title](img/install.avif)

Una vez se haya instalado, el usuario podrá acceder al sitio web con el icono de la aplicación, como si fuera una a aplicación nativa:

![title](img/access.avif)

Después de hacer clic en el icono de la aplicación:

![title](img/installed.avif)

Para desinstalar la aplicación solo hace falta hacer clic en la parte superior derecha de la ventana para desplegar el menú, y a continuación seleccionar desinstalar, como se muestra en la siguiente captura de pantalla:

![title](img/uninstall.avif)

La aplicación se instala en la carpeta de aplicaciones del usuario:

- Paso 1 para obtener la ruta de instalación de la aplicación

![title](img/path1.avif)

- Paso 2 para obtener la ruta de instalación de la aplicación
  ![title](img/path2.avif)

- Paso 3 para obtener la ruta de instalación de la aplicación

![title](img/path3.avif)

_Si se traslada a la papelera también se desinstala la aplicación_

![title](img/uninstall2.avif)

### Safari

En safari, no se pueden instalar las aplicaciones PWA, tan solo se pueden añadir enlaces en el Dock. Se puede añadir el enlace para todas las páginas web, sean PWA o no.

- Después de hacer clic en el icono de compartir

![title](img/safari-1.avif)

- Después de hacer clic en "Añadir al Dock"

![title](img/safari-2.avif)

## Prueba en un iPhone con iOS 18.2

Para comprobar que el sitio web funciona correctamente, se abre la URL del sitio web en los navegadores web Google Chrome y Safari, en los que también se accede al detalle de una imagen. Posteriormente se establece el modo avión y se vuelve acceder a las mismas páginas y al detalle de una imagen que no se había accedido anteriormente.

En modo avión, ambos navegadores cargan la la página principal, la página web del detalle de la imagen que se consultó anteriormente y muestran una página en blanco la página web del detalle de la imagen no consultada anteriormente (no se muestra la alerta ni redirecciona a la página principal del sitio web).

### Google Chrome (online)

- Página principal

<img src="img/IMG_0029.avif" alt="Description" width="300">

- Página detalle

<img src="img/IMG_0031.avif" alt="Description" width="300">

### Safari (online)

- Página principal

<img src="img/IMG_0030.avif" alt="Description" width="300">

- Página detalle

<img src="img/IMG_0032.avif" alt="Description" width="300">

### Establecer el modo avión

- Panel de control con el modo avión activado

<img src="img/IMG_0033.avif" alt="Description" width="300">

- Pantalla de carga de la aplicación

<img src="img/IMG_0034.avif" alt="Description" width="300">

## Añadir un marcador en la pantalla de inicio en iOS

En iOS no se pueden instalar PWA, no obstante en la pantalla de inicio se puede añadir marcadores a páginas web, sean PWA o no. Independientemente del navegador, esta acción se realiza mediante "Compartir". En Google Chrome, el icono para compartir está en la parte superior, en la barra de direcciones. En Safari el icono para compartir está en la parte inferior de la pantalla. Una vez se ha presionado a compartir, se tiene que seleccionar la opción añadir a la pantalla de inicio. [Más información](https://support.apple.com/es-es/guide/iphone/iph42ab2f3a7/ios).

- Añadir a la pantalla de inicio

<img src="img/IMG_0061.avif" alt="Description" width="300">

- Establecer las propiedades del marcador

<img src="img/IMG_0062.avif" alt="Description" width="300">

- Icono en la pantalla de inicio

<img src="img/IMG_0063.avif" alt="Description" width="300">

# Parámetros para el service worker

Angular genera el archivo de configuración para el service worker llamado [ngsw-config.json](ngsw-config.json). Este archivo especifica cómo el service worker debe cachear los archivos y gestionar las actualizaciones de datos.

# Parámetros para el service worker

## assetGroups

Para almacenar los datos de la aplicación y de CDNs (por ejemplo fuentes de Google Fonts).

```
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.csr.html",
          "/index.html",
          "/manifest.webmanifest",
          "/*.css",
          "/*.js"
        ]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": [
          "/**/*.(svg|cur|jpg|jpeg|png|apng|webp|avif|gif|otf|ttf|woff|woff2)"
        ],
        "urls": [
          "https://fonts.googleapis.com/**",
          "https://fonts.gstatic.com/**"
        ]
      }
    }
  ],
```

En la siguiente captura se puede ver como el ServiceWorker también gestiona las fuentes (`type: font` y `size: ServiceWorker`):

![title](img/fonts.avif)

## dataGroups

Para almacenar los datos de la API.

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
  - strategy: es la estrategia de caché, por ejemplo `freshness`.
    - Con `freshness` primero consulta a internet y después la caché: ya que nos interesa tener los últimos datos actualizados, y si por lo que fuese no hubiera internet, por lo menos, se puede seguir utilizando la aplicación con los datos de la caché, aunque estos no fueran los últimos.
    - Con `performance` se optimiza la actualización de los datos, obteniendo preferentemente los datos solicitados de internet. Solo si se agota el tiempo de espera, según el valor de timeout, la solicitud vuelve a la memoria caché. Esto resulta útil para recursos que cambian con frecuencia.
