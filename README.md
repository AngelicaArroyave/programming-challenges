# programming-challenges
El repositorio contiene retos de programación que permiten mejorar la lógica de programación y el conocimiento que se tenga de un determinado lenguaje, se debe tener en cuenta que el lenguaje que se usará para las soluciones será JavaScript.

## Nota
Los retos de programación recopilados son:
1. [Ejercicios](https://retosdeprogramacion.com/ejercicios/) planteados por Moure Dev
2. [Roadmap](https://retosdeprogramacion.com/roadmap/) planteados por Moure Dev

## Descripción de los Ejercicios
1. **Fizz Buzz** Escribe un programa que muestre por consola los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
    - Múltiplo de 3 por la palabra ```fizz```
    - Múltiplo de 5 por la palabra ```buzz```
    - Múltiplo de 3 y de 5 a la vez por la palabra ```fizzbuzz```
2. **Anagrama** Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas
    - Un anagrama consiste en formar una palabra reordenando todas las letras de otra palabra inicial
    - No hace falta comprobar que ambas palabras existan
    - Dos palabras exactamente iguales no son anagrama
3. **Sucesión de Fibonacci** Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0
    - La serie de Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores: 0, 1, 1, 2, 3, 5, 8, 13, ...
4. **Número primo** Escribe un programa que se encargue de comprobar si un número es o no primo. Hecho esto, imprime los números primos entre 1 y 100
5. **Área de un polígono** Crea una única función (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono
    - La función recibirá por parámetro sólo un polígono a la vez
    - Los polígonos soportados serán:
        * Triángulo ```(b * h)/2```
        * Cuadrado ```a^2```
        * Rectángulo ```b * h```
    - Imprime el cálculo del área de un polígono de cada tipo
6. **Invirtiendo cadenas** Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguage que lo haga de forma automática
    - Si se envía ```Hola mundo``` retornaría ```odnum aloH```
7. **Contado palabras** Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas
    - Los signos de puntuación no forman parte de la palabra
    - Una palabra es la misma aunque parezca en mayúsculas y minúsculas
    - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente
8. **Aspect Ratio de una imagen** Crea run programa que se encargue de calcular el aspecto ratio de una imagen a partir de una url
    - Url de ejemplo: https://github.com/AngelicaArroyave/music-festival/blob/main/src/img/imagen_dj.jpg
    - Por ratio hacemos referencia, por ejemplo, a los "16:9" de una imagen de 1920*1080 px
9. **Decimal a binario** Crea un programa que se encargue de transformar un número decimal a binario sin utilziar funciones propias del lenguaje que lo hagan directamente
10. **Código Morse** Crea un programa que sea capaz de transformar texto natural a código Morse y viceversa
    - Debe detectar automáticamente de qué tipo se trata y realizar la conversión
    - En Morse se soporta raya ```-```, punto ```.```, un espacio " " entre letras o símbolos y dos espacios entre palabras "  "
    - El alfabeto Morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse
11. **Expresiones equilibradas** Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
    - Equilibrado significa que estos delimitadores se abren y cierran en orden y de forma correcta
    - Paréntesis, llaves y corchetes son igual de prioritarios
    - No hay uno más importante que otro
    - Expresión balanceada: ```{ [ a * ( c + d ) ] - 5 }```
    - Expresión no balanceada: ```{ a * ( c + d ) ] - 5 }```
12. **Eliminando caracteres** Crea una función que reciba dos cadenas como parámetros (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
    - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2
    - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1
13. **¿Es un palíndromo?** Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sea o no palíndromos.
    - Un palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda
    - NO se tienen en cuenta los espacios, signos de puntuación y tildes.
    - Ejemplo: ```Ana lleva al oso la avellana```
14. **Factorial reccursivo** Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva
15. **¿Es un número de Armstrong?** Escribe una función que calcule si un número dado es un número de Armstrong (o también llamado narcisista)