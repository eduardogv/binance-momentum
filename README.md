# binance-momentum
 Web app to find strongest coins on binance, to harvest recent momentum.



## Specs para Scott Phillips portfolio rebalance strat

La aplicacion web realiza un análisis de momentum para portfolio rebalance semanal.
La tesis se basa en Cross Sectional Momentum, explained by Titma in 1993. Básicamente se busca dentro de un basket de activos pertenecientes a un índice y correlacionados los que tengan mejor performance en un plazo de tiempo determinado.
El edge radica en holdear estos activos que tienen un performance superior a la media y rebalancearlos periodicamente, en este caso cada 7 dias.

#### I. Data Analysis

1. Obtiene las X(200) coins con mayor volumen de Binance. Lo retorna en una lista ordenada de mayor a menor volumen.
    - tambien retorna un df
    - [x] DONE

2. Obtiene la data de klines de cada coin y la guarda en la carpeta local /data en formato .csv.
    - La funcion actualmente usa una fecha de referencia y un lookback (en dias) para calcular la fecha de inicio de la obtencion de datos. Esto me parece demasiado complicado, además hace referencia a la antigua version de hacer la tarea de Ansem (comparar los lows de agosto y julio para luego checar cual es el que subio más)
    
    - TODO: 
        - [x] Crear otro notebook para analizar Ansem y copiar ahi la funcion que tengo.
        - [x] Eliminar de la función la fecha de referencia, la fecha low pero mantener el loopback en  semanas.
        - [x] Agregar una fecha de termino de la busqueda.
        - [x] Cambiar el request usando el wraper y cambiarlo para que use la API (mejor para CS50)
        - [ ] Se estan guardando csv que no tienen data, limpiar. Validar en el if status==200 tambien validar la longitud de la respuesta.

3. Data Processing: Leer cada archivo .csv y crear un df para cada uno. 
    - TODO:
        - [x] Limpiar el df, solo dejar ohlc y volume?
        - [x] Crear una columna en el df que mida el slope e intercept de los ultimos 7 dias(que deberia ser el total de velas que tengo, independiente de si son de 1 o mas semanas). Luego ordenar el df de acuerdo a los slopes de mayor a menor, indicando asi las que mejor performance tuvieron.

        | coin    | return(this week) | intercept | slope |
        | ------- | ----------------- | --------- | ----- |
        | ETHBTC  |                   |           |       |
        | SOLBTC  |                   |           |       |
        | DOGEBTC |                   |           |       |

        - [x] Crear una columna en el df que mida el cambio porcentual entre semana. Esto se calcula entre el open de la primera vela y el close de la ultima vela.


#### II. Database
1. Models
    - [ ] Crear un modelo TOP_COINS que guarde las monedas de mayor volumen.
    - [ ] Crear un modelo maestro, donde anyado una columna que indica el token


#### III. Web App

1. Desplegar el contador de rebalance en la parte de arriba de la pag. (React?)
    - [ ] Titulo: Mostrar fecha y que semana del año es (js).
    - [ ] Con JS crear el contador de horas para el rebalance: obtener las 00:00 horas del siguiente lunes que viene y mostrar el contador faltante.
    - 


x. Websocket real price update (esto da dinamismo)
    - [ ] Con ws jalar los precios realtime de las 5 coins de la semana. Multiplicarlo para tener el precio de cada coin
    - [ ] Con los valores anteriores obtener el valor total del portfolio.

2. Mostrar la grafica de BTC y su slope como medicion base.
3. Mostrar las 5 graficas de las altcoins seleccionadas y su slope.
4. Mostrar una tabla con las 5 coins seleccionadas, su cambio porcentual y su slope.



