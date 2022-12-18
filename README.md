# Dinamic-Web
## _Interactividad entre HTML-CSS y JavaScript_



Este es un breve readme.md para mostrar como podemos interactuar HTML-CSS con Javascript, pasando de paginas web estaticas a dinamicas. 

## ¿Qué son las web estáticas?
web estática o dinámica
Las páginas estáticas son aquellas que se montan a partir de un código HTML sencillo y directo que no va a necesitar de mucha actualización. Es decir, tú mismo o tu diseñador escribes directamente el código de la web y lo cuelgas en la red. Sin más intermediarios o funcionalidades complejas.

Generalmente este tipo de páginas incluyen lo básico: el HTML, una hoja de estilos y un formulario. No ejecutan scripts o utilizan bases de datos. De ahí que no sea necesario el uso de un CMS para crearlas.

Por ejemplo, serían webs estáticas las páginas sencillas de presentación de empresa o de producto, un portfolio básico, o cualquier web que muestre una información de manera directa y sencilla.

## ¿Qué son las web dinámicas?

Las páginas dinámicas son aquellas que incluyen más funcionalidades para interactuar con el usuario. También pueden requerir de aplicaciones externas (como los CMS) para su creación.

Por norma general los CMS parten de una serie de archivos por defecto en su instalación e incluyen la posibilidad de añadir temas, plugins, etc. Todo eso que hace que para el usuario medio sea más sencillo montar una web.

> Mas información: https://dinahosting.com/blog/pagina-web-estatica-o-dinamica/#Que_son_las_web_estaticas

Si tomamos en cuenta que las paginas dinamicas interactuan con el usuario, entonces deberemos agregar el elemento interactivo y en este caso es y sera *Javascript*.

En este caso se elaborara una pagina que sume 2 valores enteros indicados por el usuario, ejemplo:

## 2+3=5 

Mediante esta estructura de pagina:


![alt text](https://github.com/IzzyGrant/Dinamic-Web/blob/main/page.png?raw=true)

# Estructuración

Esta pagina cuenta con 3 archivos por separado los cuales tienen una funcion independiente:

| Archivo | Función |
| ------ | ------ |
| *Index.html* | Contiene el lenguaje de etiquetado de la pagina. Define la estructura de esta. |
| *style.css* | Contiene el lenguaje de estilo de la pagina. Define la estetica de esta. |
| *script.js* | Contiene el lenguaje de programacion de la pagina. Se ejecutan funciones desde este. |

# index.html

Realizado bajo *Visual Studio Code*, requerimos de una estructura sencilla que nos permita introducir 2 valores numericos y un boton para emitir la funcion. deberemos usar tambien un sitio donde se imprimira el resultado. En este caso un < div > .

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" type="text/javascript"></script>
    <title>HTML/CSS/Javascript</title>
</head>
<body>

    <h1 class="centro">Uso de operadores mediante Javascript.</h1>
    <h5 class="centro">Operador de 2 valores mediante variables:</h5>
    <p class="centro">Ingresa 2 numeros para operar y posteriormente el boton "sumar".</p>
    <hr>
    <div class="centro">
        <input type="number" name="num1" id="num1" value="0"> 
        <h6 class="centro simbolo">+</h6>
        <input type="number" name="num2" id="num2" value="0">
        <h6 class="centro simbolo">=</h6>
        <br>
        <input type="button" value="Sumar" onclick="operar()">
        <hr>
        <div id="resultado">Resultado Aqui!</div>
    </div>

</body>
</html>
```

Vease que tenemos 2 *inputs numericos con id diferentes*. Estos tendran que ser definidos desde aqui para que cuando usemos Javascript sepamos de donde jalar los valores e identificarlos. Tambien tenemos un *<div>* con el id "resultado". Cuando operemos los 2 valores que esten dentro de los *inputs* reemplazaremos la suma de los 2 valores por el mensaje "Resultado Aqui!".

> <script src="script.js" type="text/javascript"></script>

Esta linea que esta en la parte superior dentro de *head* nos dice que tiene una dependencia de archivo. esto quiere decir que al cargar la pagina tambien buscara un archivo con el nombre "script.js" y lo cargara como archivo .js. En este caso el archivo se encuentra en la raiz junto con el resto. Tambien se puede colocar dentro de una carpeta: 

> <script src="carpeta/script.js" type="text/javascript"></script>

# style.css

Esta es la hoja de estilos. Este archivo se reduce a centrar el texto de la pagina y dar color y tamaño a los simbolos matematicos mediante clases:

```css
.centro{
text-align: center;
}

.simbolo{
    font-size: 32px; 
    margin: 2px 10px 2px 10px;
    color: #f00;
}
```
Por ejemplo:

> <h6 class="centro simbolo">+</h6>

Vease que la etiqueta *h6* tiene la clase *simbolo y centro* separados por un espacio. Esto quiere decir que se aplicaran ambos bloques de estilo en ese elemento de html. si se elimina la clase *simbolo* solo se centrara sin modificar el tamaño y color como lo especifica la clase *.simbolo*


# script.js

En este archivo añadiremos la programacion javascript que nos permitira dar interactividad a una pagina web. En este caso es evaluar 2 numeros y sumarlos y mostrar el resultado:

```js
function operar() {
    var resultado = 0;
    var numero1 = document.getElementById("num1").value;
    numero1 = parseInt(numero1);
    var numero2 = document.getElementById("num2").value;
    numero2 = parseInt(numero2);
    resultado = numero1 + numero2;
    console.log("El resultado de la operacion "+ numero1 + " y " + numero2 +" es: " + resultado);
    document.getElementById("resultado").innerHTML = resultado;
} 
```
