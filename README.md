# MahApps

_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

Repositorio donde voy desarrollando mi aplicación para divulgar este juego de origen asiático y para mejorar mis habilidades de Javascript, Angular Framework, lógica y programación en general, así como el empleo de patrones de diseño como el patrón observer (haciendo uso de la libreria RxJS).

Si quieres saber las reglas de este juego, te dejo aqui mi manual de instrucciones, que forma parte del proyecto de difusión de este popular pasatiempo de oriente: https://drive.google.com/file/d/1a9CG6i6b3x1k4glRuJ78Z_xnuCQD1Nmg/view?usp=sharing

En su estado actual, se trata de una colección de aplicaciones y consisten en las siguientes:

Buscador (variante China) : En esta subapliación, listo todas las jugadas posibles que se pueden efectuar en este juego, así como ofrecer una serie de botones que permiten filtrar las jugadas en función de sus atributos.

Quiz (variante China) : En esta subaplicación, se hace una lista de preguntas infinitas tipo test que preguntan acercan del dato que el programa te priva de una de las jugadas. Ese dato puede ser el valor de la jugada, la descripción o el nombre. En esta subapp empleo el patrón observer con la libreria RxJS para garantizar que los componentes que hacen los diferentes tipos de test (es decir, los que privan de un dato en específico), esten al tanto de cada nueva pregunta, pues de lo contrario me encontraba con el error de que en caso de ser el mismo tipo de test tras otra pregunta, el programa se paralizaba hasta que el test era de otra clase.

Letrero (variante China y Hongkonesa) : En esta subaplicación, ofrezco una interfaz al usuario para que pueda poner en su televisor o monitor un indicador de puntos para ir contabilizando una partida de MahJong que se este dando en ese momento. La gracia esta en que todos los calculos, rotación de vientos y demás mecánicas relevantes a considerar son procesadas y calculadas por el programa, no siendo una mera pizarra.

_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

Si quieres probar la aplicación en su estado actual tan solo necesitas angular CLI, node y NPM , situar una terminal en la carpeta mahapps colección, ejecutar npm install y posterior a la instalación lanzar el comando ng serve . Se abrirá un servidor en localhost:4200 donde podras ver el proyecto.

_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

Agradezco y ruego todo feedback, pues todo feedback me ayuda y me hace mejor desarrollador.
