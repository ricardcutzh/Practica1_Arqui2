# Practica 1 | Arquitectura de Computadores 2 | Web API

## Herramientas
* Node JS
* Docker
* Mongo DB (MONGO ATLAS)

## Iniciar Servidor
1. Compilar el dockerfile
```
$ docker build -t nodeenv .
```
2. ejecutar el dev.sh y correr la app
```bash
$ sh dev.sh
$ cd home/code/
$ node install //instalar las librerias
$ node app.js
```
# URLs de la API REST

## Obtener Frase
Permite obtener la ultima frase que se ingreso desde la pagina
* Method Type: GET

### Parametros
<!---->
No Pide ningun parametro
<!---->

### URL example
```
// IP: 35.222.255.36
URL : http://SERVER_IP/API/get_string
```
### Responses
El tipo de traduccion depende de el codigo que retorne la respuesta en cadena solo en minusculas
* Tipo Aprendizaje: Codigo 200
```
cadena de ejemplo
```
* Tipo Traduccion: Codigo 202
```json
frase ejemplo
```
* No hay frases nuevas: codigo 204
```json
// SIN RESPUESTA
```
* Cualquier otro codigo es error...
## Vaciar La BD
Para cuestiones practicas si se necesita vaciar la base de datos
* Method Type: GET

### Parametros
<!---->
No Pide ningun parametro
<!---->

### URL example
```
// IP: 35.222.255.36
URL : http://SERVER_IP/API/empty
```
### Responses
Retorna un JSON especificando si se logro vaciar la base de datos

* Aceptada: Codigo 202
```json
{
    "message": "Database is empty now!"
}
```
* Ocurrio algun error: codigo 404
```json
{
    "message:": "Mensaje de error..."
}
```
* Cualquier otro codigo es error...