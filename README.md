# binance-momentum
 Web app to find strongest coins on binance, to harvest recent momentum.



## Specs para Scott Phillips portfolio rebalance strat

La aplicacion web realiza un análisis de momentum para portfolio rebalance semanal.

#### I. Data Analysis

1. Obtiene las X(200) coins con mayor volumen de Binance. Lo retorna en una lista ordenada de mayor a menor volumen.
    - tambien retorna un df

2. Obtiene la data de klines de cada coin y la guarda en la carpeta local /data en formato .csv.
    - La funcion actualmente usa una fecha de referencia y un lookback (en dias) para calcular la fecha de inicio de la obtencion de datos. Esto me parece demasiado complicado, además hace referencia a la antigua version de hacer la tarea de Ansem (comparar los lows de agosto y julio para luego checar cual es el que subio más)
    
    - TODO: 
        - Crear otro notebook para analizar Ansem y copiar ahi la funcion que tengo.
        - Eliminar de la función la fecha de referencia, la fecha low pero mantener el loopback en dias.
        - Afinar el filtro de stablecoins y monedas que son sats.
        - Opcionalmente debo crear bases de datos (previamente creadas en django). 

3. Leer cada archivo .csv y crear un df para cada uno. 
    - TODO:
        - Crear una columna en el df que mida el slope de los ultimos 7 dias(que deberia ser el total de velas que tengo). El slope es una regresion lineal del precio de cierre de cada vela diaria de los ultimos 7 dias. VALIDAR con el video de Scott nuevamente.
        - Ordenar de mayor a menor de acuerdo al slope. La tesis es que el de mayor slope indica mayor momentum y por ende este momentum se debe mantener la siguiente semana.

4. OPCIONAL: Crear una BD por cada df, revisar cual es la mejor manera. 
    En realidad todo el analisis deberia hacerse creando df a partir de la bd que hemos creado, pero en realidad no le veo uso real los dataframe son superiores y guardarlo en .pkl o .csv es suficiente.

5. Retornar las 5 coins con mejor slope de la semana pasada, estas son las que se deben comprar. LISTO.

#### II. Web App





