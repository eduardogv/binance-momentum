# binance-momentum
 Web app to find strongest coins on binance, to harvest recent momentum.



## Specs para Scott Phillips portfolio rebalance strat

La aplicacion web realiza un análisis de momentum para portfolio rebalance semanal.
La tesis se basa en Cross Sectional Momentum, explained by Titma in 1993. Básicamente se busca dentro de un basket de activos pertenecientes a un índice y correlacionados los que tengan mejor performance en un plazo de tiempo determinado.
El edge radica en holdear estos activos que tienen un performance superior a la media y rebalancearlos periodicamente, en este caso cada 7 dias.

#### I. Data Analysis

1. Obtiene las X(200) coins con mayor volumen de Binance. Lo retorna en una lista ordenada de mayor a menor volumen.
    - [x] Sigue apareciendo WBTC y AUTION. eliminarlos.

2. Obtiene la data de klines de cada coin y la guarda en la carpeta local /data en formato .csv.
    - La funcion actualmente usa una fecha de referencia y un lookback (en dias) para calcular la fecha de inicio de la obtencion de datos. Esto me parece demasiado complicado, además hace referencia a la antigua version de hacer la tarea de Ansem (comparar los lows de agosto y julio para luego checar cual es el que subio más)
    
    - TODO: 
        - [x] Eliminar de la función la fecha de referencia, la fecha low pero mantener el loopback en  semanas.
        - [x] Agregar una fecha de termino de la busqueda.
        - [x] Cambiar el request usando el wraper y cambiarlo para que use la API (mejor para CS50)
        - [x] Se estan guardando csv que no tienen data, limpiar. Validar en el if status==200 tambien validar la longitud de la respuesta.
        - [x] Guardado en base de datos listo en la aplicacion.
        - [ ] Hacer que guarde datos historicos, no solo los ultimos 7 dias. Necesario para poder obtener la data de esta semana y de la semana pasada. Guardar de 14 dias para poder mostrar en la aplicacion.
        - [ ] Crear un nuevo csv o una nueva bD para que guarde los 5 ganadores de cada semana, que no se chanque si no que siempre los actualice. Guardar el retorno de la semana de esa coin.

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
        - [ ] Obtener los resultados de la semana pasada y almacenarlos en csv y base de datos. Debe tener los siguientes datos:
        | coin    | starting price | current price | return_prc | return_usd  |
        | ------- | ----------------- | --------- | ----- |
        | ETHBTC  |                   |           |       |
        | SOLBTC  |                   |           |       |
        | DOGEBTC |                   |           |       |

        - [ ] Obtener 


4. PLOTS.
    - TODO:
        - [x] Plotear linechart close price vs BTC y la regresion lineal de los ultimos 7 dias.
        - [ ] Agregar los valores numericos de slope y intercept.
        - [ ] Agregar los 

#### III. Web App

1. Desplegar el contador de rebalance en la parte de arriba de la pag. (React?)
    - [x] Titulo: Mostrar fecha y que semana del año es (js).
    - [x] Con JS crear el contador de horas para el rebalance: obtener las 00:00 horas del siguiente lunes que viene y mostrar el contador faltante.
    - [ ] El contador  esta en UTC-5, hay que cambiarlo a UTC.
    - [ ] Arreglar el contador, se ha quedado en -1 dia...




x. Websocket real price update (esto da dinamismo)
    - [ ] Con ws jalar los precios realtime de las 5 coins de la semana. Multiplicarlo para tener el precio de cada coin
    - [ ] Con los valores anteriores obtener el valor total del portfolio.

2. Mostrar la grafica de BTC y su slope como medicion base.
3. Mostrar las 5 graficas de las altcoins seleccionadas y su slope.
4. Mostrar una tabla con las 5 coins seleccionadas, su cambio porcentual y su slope.



