/* ARCHIVO PRINCIPAL DEL CURSO: edita aquí el contenido, las fórmulas, tablas y videos de cada lección.
   Para la Lección 3 (recursos), solo cambia el campo "videoId" de cada recurso por el que tú prefieras —
   el ID es lo que va después de "watch?v=" en la URL de YouTube. */

export const LESSONS = [
  {
    id: 'que-es-ml',
    order: 1,
    title: '¿Qué es el Machine Learning?',
    subtitle: 'La idea, la definición formal, la tabla IA vs ML vs Deep Learning, y la matemática de la regresión',
    videoId: 'KytW151dpqU',
    videoTitle: '¿Qué es el Machine Learning? ¿Y Deep Learning? — DotCSV',
    sections: [
      {
        heading: '1. La idea, sin una sola fórmula',
        paragraphs: [
          'Imagina que quieres enseñarle a alguien a distinguir una manzana de una naranja, pero sin darle ninguna regla. No le dices "si es roja y redonda, es manzana" — esa regla se rompe en cuanto aparece una manzana verde o una mandarina muy roja.',
          'En vez de eso, le muestras 500 fotos de frutas, cada una con su nombre debajo. Después de ver suficientes ejemplos, esa persona reconoce manzanas y naranjas que nunca había visto — incluso variedades raras. Nadie le dio una regla explícita: encontró el patrón sola, a partir de ejemplos.',
          'Eso, exactamente, es Machine Learning: un programa que aprende patrones a partir de ejemplos (datos), en lugar de recibir reglas escritas a mano para cada caso posible.',
        ],
      },
      {
        heading: '2. La definición formal',
        paragraphs: [
          'La definición más citada en la academia es la de Tom Mitchell (1997):',
        ],
        quote: '"Se dice que un programa aprende de la experiencia E, con respecto a una tarea T y una medida de desempeño P, si su desempeño en T, medido por P, mejora con la experiencia E."',
        paragraphsAfterQuote: [
          'Suena abstracto, pero cada letra tiene un significado muy concreto — y de hecho, ya los usas en este mismo sitio:',
        ],
        bullets: [
          '<strong>T (Tarea):</strong> lo que el modelo intenta hacer. En tu proyecto: predecir el resultado de un partido (1X2) y el marcador esperado.',
          '<strong>E (Experiencia):</strong> los datos con los que aprende. En tu proyecto: el historial de partidos internacionales (dataset <code>martj42/international_results</code>).',
          '<strong>P (Medida de desempeño):</strong> cómo sabes si mejora. En tu proyecto: el accuracy 1X2 y el RPS que ya muestras en cada ficha de partido.',
        ],
      },
      {
        heading: '3. IA, Machine Learning, Deep Learning y Estadística: ¿en qué se diferencian?',
        paragraphs: [
          'Estos cuatro términos se usan a veces como sinónimos, pero no lo son — uno contiene al otro, como muñecas rusas. Esta tabla los compara en lenguaje simple:',
        ],
        table: {
          headers: ['Concepto', 'Qué es, en palabras simples', 'Ejemplo cotidiano', 'Cómo se relaciona con los demás'],
          rows: [
            ['Inteligencia Artificial (IA)', 'El campo más grande: que una computadora haga tareas que normalmente requieren "inteligencia" humana.', 'Un asistente de voz, un coche que se estaciona solo, un chatbot.', 'Es la categoría más amplia. ML y Deep Learning están <em>dentro</em> de ella.'],
            ['Machine Learning (ML)', 'Una forma de lograr IA: en vez de programar reglas, la computadora aprende patrones a partir de datos.', 'Tu correo aprendiendo a detectar spam según miles de correos previos.', 'Es un subconjunto de la IA. Dixon-Coles y XGBoost, los dos modelos de tu sitio, son ML.'],
            ['Deep Learning (Aprendizaje Profundo)', 'Un subconjunto de ML que usa redes neuronales con muchas capas para aprender patrones muy complejos.', 'Reconocer rostros en fotos, traducir idiomas, generar imágenes con IA.', 'Es un subconjunto de ML. No lo usas en este proyecto — ni Dixon-Coles ni XGBoost son redes neuronales.'],
            ['Estadística / Modelos probabilísticos', 'La disciplina matemática (mucho más antigua que la IA) que describe la incertidumbre y el azar con números.', 'Calcular la probabilidad de que llueva, o cuántos clientes llegarán a una tienda en una hora.', 'No es un subconjunto de ML — es su "abuela": muchos modelos de ML (como Dixon-Coles) son, en el fondo, estadística aplicada.'],
          ],
        },
        paragraphsMid: [
          '<strong>Cómo leer esta tabla si no programas:</strong> piensa en círculos concéntricos. El círculo más grande es la IA. Adentro de ese círculo hay otro más chico: el Machine Learning. Adentro de ese hay uno todavía más chico: el Deep Learning. La Estadística es un círculo aparte, mucho más viejo, que se traslapa con el de ML — porque muchas técnicas de ML (como la que usa Dixon-Coles) en realidad nacieron en la estadística clásica, décadas antes de que existiera la palabra "Machine Learning".',
          'En tu sitio: el modelo Dixon-Coles es 100% estadística clásica (Lección 2). XGBoost es Machine Learning "puro" basado en árboles de decisión (también Lección 2). Ninguno de los dos es Deep Learning — no hay redes neuronales en este proyecto.',
        ],
      },
      {
        heading: '4. La matemática detrás del aprendizaje',
        paragraphs: [
          'Ahora sí, formalicemos paso a paso — sin saltarnos ningún símbolo.',
          'Primero, los datos. Tenemos un conjunto de ejemplos pasados:',
        ],
        formulas: [
          'D = {(x₁,y₁), (x₂,y₂), ..., (xₙ,yₙ)}',
        ],
        paragraphsMid: [
          'Cada xᵢ es la "entrada" (por ejemplo, los equipos, su forma reciente, su Elo) y cada yᵢ es el "resultado real" de ese partido (lo que de verdad pasó). n es el número total de partidos que tenemos.',
          'Buscamos una función f, controlada por unos parámetros θ, que reciba x y devuelva una predicción ŷ ("y con gorrito", para distinguirla de la y real):',
        ],
        formulas2: [
          'ŷ = f_θ(x)',
        ],
        paragraphsMid2: [
          'Para saber qué tan mal predice f_θ, definimos una función de pérdida (loss) L que compara la predicción con la realidad — mientras más se parezcan, más chica es L:',
        ],
        formulas3: [
          'L(f_θ(xᵢ), yᵢ)  ≥  0',
        ],
        paragraphsMid3: [
          'Y el "riesgo empírico" es simplemente el promedio de esa pérdida sobre todos los partidos que ya conocemos:',
        ],
        formulas4: [
          'R̂(θ) = (1/n) · Σᵢ₌₁ⁿ L(f_θ(xᵢ), yᵢ)',
        ],
        paragraphsMid4: [
          '"Aprender" no es magia: matemáticamente, es solo encontrar el valor de θ que hace que R̂(θ) sea lo más chico posible:',
        ],
        formulas5: [
          'θ* = argmin_θ  R̂(θ)',
        ],
        paragraphsEnd: [
          'Eso es todo. Dixon-Coles, el modelo MCMC bayesiano y XGBoost —los tres modelos que comparas en cada partido de este sitio— no son más que tres formas distintas de resolver exactamente esta misma ecuación. Vamos a ver cada uno a detalle en la Lección 2.',
        ],
      },
      {
        heading: '5. Regresión: la línea que mejor ajusta',
        paragraphs: [
          'El modelo más simple que existe en todo Machine Learning es una línea recta. Sirve para introducir, con el ejemplo más sencillo posible, cómo se resuelve en la práctica ese "argmin" que acabamos de ver arriba.',
          'El modelo:',
        ],
        formulas: ['ŷ = β₀ + β₁x'],
        paragraphsMid: [
          'β₀ es dónde cruza la recta el eje vertical, β₁ es la pendiente. "Entrenar" este modelo es encontrar los valores de β₀ y β₁ que hacen que la recta pase lo más cerca posible de todos los puntos de datos reales.',
          '¿Cómo medimos "lo más cerca posible"? Con el error cuadrático medio (MSE) — el L(θ) de la sección anterior, en su versión más común:',
        ],
        formulas2: ['MSE(β) = (1/n) · Σᵢ (yᵢ − ŷᵢ)²'],
      },
      {
        heading: '6. El descenso de gradiente: cómo se busca θ* en la práctica',
        paragraphs: [
          'Imagina que estás en una montaña, de noche, sin luz, y quieres llegar al punto más bajo del valle. No puedes ver el paisaje completo — solo puedes sentir, bajo tus pies, hacia dónde baja más la pendiente justo donde estás parado. Dar un paso en esa dirección, y repetir, eventualmente te lleva al fondo.',
          'El "descenso de gradiente" es exactamente esa estrategia, aplicada a una función matemática en vez de a una montaña real. Para minimizar el error, actualizamos los parámetros una y otra vez con esta regla:',
        ],
        formulas: ['θ ← θ − η · ∇L(θ)'],
        bullets: [
          '<strong>θ</strong> son los parámetros que estamos ajustando (β₀, β₁, o miles de pesos en una red neuronal).',
          '<strong>∇L(θ)</strong> es el gradiente: un vector que apunta hacia dónde crece más rápido el error. Por eso vamos en dirección contraria (signo menos).',
          '<strong>η (eta)</strong> es la tasa de aprendizaje: qué tan grande es cada paso. Muy grande y puedes pasarte del mínimo (oscilar sin converger); muy pequeño y tardas una eternidad en llegar.',
        ],
        paragraphsMid: [
          'No necesitas implementar esto a mano para usar XGBoost — la librería ya lo hace por ti. Pero ahora, cuando veas el accuracy de un modelo subir y estabilizarse mientras entrena, sabes qué está pasando matemáticamente: el modelo está dando pasitos cuesta abajo hasta llegar al fondo del valle de error. De hecho, "gradient boosting" —el método detrás de XGBoost— le debe el nombre justamente a esta idea, como veremos en la Lección 2.',
        ],
      },
    ],
    checkYourself: 'Si tuvieras que explicarle a tu abuela, en 30 segundos y sin usar la palabra "algoritmo" ni "parámetro", la diferencia entre IA, Machine Learning y Deep Learning: ¿qué le dirías? (Pista: usa la idea de círculos uno dentro de otro.)',
  },

  {
    id: 'modelos-del-proyecto',
    order: 2,
    title: 'Los 3 modelos de tu proyecto: Poisson, Dixon-Coles y XGBoost',
    subtitle: 'Las fórmulas, las librerías de Python, y por qué tu sitio compara exactamente estos tres',
    videoId: 'sloXWU-TmDc',
    videoTitle: 'Distribución de Poisson | ¿Cuándo usarla? | Ejercicio resuelto',
    sections: [
      {
        heading: '1. La idea, sin una sola fórmula',
        paragraphs: [
          'Los goles en un partido de fútbol son un "evento raro que ocurre en un intervalo fijo de tiempo": casi nunca se mete un gol en un minuto cualquiera, pero a lo largo de 90 minutos pasan unos cuantos. Ese patrón —eventos poco frecuentes, repartidos al azar en un periodo fijo— es exactamente lo que describe la <strong>distribución de Poisson</strong>, una herramienta estadística inventada en 1837, mucho antes de que existiera la computación.',
          'El modelo <strong>Dixon-Coles</strong> (1997) usa la Poisson como base, pero le agrega algo: en vez de asumir que todos los equipos meten goles "en promedio igual", calcula una "fuerza de ataque" y una "fuerza de defensa" para cada selección, a partir de su historial. Argentina con buen ataque y Austria con defensa débil → la Poisson de Argentina tendrá una λ ("lambda", el promedio esperado de goles) más alta.',
          '<strong>XGBoost</strong>, en cambio, no asume ninguna fórmula estadística de antemano: en vez de eso, entrena cientos de "árboles de decisión" pequeños que, combinados, aprenden a estimar los goles esperados directamente de los datos históricos — sin que nadie le diga que debería parecerse a una Poisson.',
        ],
      },
      {
        heading: '2. La fórmula de Poisson',
        paragraphs: [
          'La probabilidad de que un equipo meta exactamente k goles, si su promedio esperado es λ, es:',
        ],
        formulas: ['P(X = k) = (λᵏ · e⁻λ) / k!'],
        bullets: [
          '<strong>λ ("lambda"):</strong> el número promedio de goles que se espera que meta ese equipo en ese partido específico — esto es justo lo que calcula Dixon-Coles para cada selección.',
          '<strong>k:</strong> el número de goles que estamos evaluando (0, 1, 2, 3...).',
          '<strong>e:</strong> la constante de Euler (≈2.718) — aparece en casi todas las fórmulas de probabilidad de eventos raros, es solo parte de la receta matemática.',
          '<strong>k! ("k factorial"):</strong> k×(k-1)×(k-2)×...×1 — un término que normaliza la fórmula para que las probabilidades de todos los marcadores posibles sumen exactamente 100%.',
        ],
        paragraphsMid: [
          'En la práctica: si Argentina tiene λ=2.1 contra Austria, la fórmula te da la probabilidad de que mate 0 goles, 1 gol, 2 goles, etc. Combinando la distribución de goles de ambos equipos (asumiendo que son independientes) se construye exactamente el mapa de calor que ves en la gráfica "mcmc" y "xgb" de cada partido — eso lo vemos a detalle en la Lección 4.',
        ],
      },
      {
        heading: '3. Dixon-Coles: cómo se calcula λ para cada equipo',
        paragraphs: [
          'La parte más importante del modelo Dixon-Coles es que λ no es un número fijo — se construye combinando tres parámetros que el modelo aprende de los datos históricos:',
        ],
        formulas: ['λ_local = α_local · β_visitante · γ'],
        formulas2: ['λ_visitante = α_visitante · β_local'],
        bullets: [
          '<strong>α ("alfa", fuerza de ataque):</strong> qué tan bueno es un equipo metiendo goles, en general. Un valor alto = ataque fuerte.',
          '<strong>β ("beta", fuerza de defensa):</strong> qué tan bueno es un equipo evitando que le metan goles. Aquí, un valor <em>bajo</em> significa defensa fuerte (entra como divisor conceptualmente).',
          '<strong>γ ("gamma", ventaja de local):</strong> un número fijo (>1) que refleja la ventaja estadística de jugar en casa — válida sobre todo en ligas; en un Mundial en sede neutral, suele ajustarse o ignorarse.',
        ],
        paragraphsMid: [
          'Estos parámetros (un α y un β por cada selección del torneo) se encuentran resolviendo exactamente el mismo problema de la Lección 1: <code>θ* = argmin_θ R̂(θ)</code>, donde aquí L es la "log-verosimilitud negativa" de Poisson — una forma de medir qué tan bien esos parámetros explican los marcadores que realmente ocurrieron en el historial.',
        ],
      },
      {
        heading: '4. La versión bayesiana: el modelo MCMC',
        paragraphs: [
          'En la gráfica "mcmc" de tu sitio, el encabezado cita el método de <strong>Baio & Blangiardo (2010)</strong> — una versión bayesiana jerárquica del mismo modelo Dixon-Coles. La diferencia clave: en vez de calcular un solo valor "óptimo" de α y β por equipo, el enfoque bayesiano calcula una <em>distribución completa de posibles valores</em>, y para hacerlo de forma computacional usa un método de muestreo llamado <strong>MCMC (Markov Chain Monte Carlo)</strong> — de ahí el nombre de tu gráfica.',
          'El log de entrenamiento que aparece en tu gráfica "accuracy" (con columnas como "Draws", "Divergences", "Step size", "Grad evals") es el formato característico del sampler <strong>NUTS</strong> de la librería <strong>PyMC</strong> — eso indica que tu modelo bayesiano está implementado con PyMC.',
        ],
      },
      {
        heading: '5. Librerías de Python típicas para esta parte',
        paragraphs: [
          'Para Dixon-Coles "clásico" (no bayesiano) y la distribución de Poisson, las librerías estándar son:',
        ],
        bullets: [
          '<code>numpy</code> — operaciones numéricas y vectores.',
          '<code>scipy.stats.poisson</code> — calcular probabilidades de Poisson directamente, sin escribir la fórmula a mano.',
          '<code>scipy.optimize.minimize</code> — el "argmin" de la Lección 1, resuelto numéricamente para encontrar los α y β óptimos.',
          '<code>pandas</code> — cargar y limpiar el historial de partidos antes de ajustar el modelo.',
        ],
        paragraphsMid: [
          'Para la versión bayesiana (MCMC):',
        ],
        bullets2: [
          '<code>pymc</code> (antes <code>pymc3</code>) — define el modelo bayesiano y corre el muestreo MCMC/NUTS.',
          '<code>arviz</code> — analiza y visualiza los resultados del muestreo (diagnósticos de convergencia, etc.).',
        ],
        paragraphsEnd: [
          '<em>Nota: identificamos estas librerías a partir del formato exacto de tu propia gráfica de entrenamiento — si tu notebook usa algo distinto (por ejemplo Stan o NumPyro en vez de PyMC), solo edita este párrafo para que sea 100% preciso.</em>',
        ],
      },
      {
        heading: '6. Gradient Boosting: árboles que aprenden de sus errores (XGBoost)',
        paragraphs: [
          'XGBoost no asume Poisson ni ninguna otra fórmula de antemano. En vez de eso, construye un "comité" de árboles de decisión chiquitos, uno tras otro, donde cada árbol nuevo se entrena específicamente para corregir los errores que cometieron los árboles anteriores:',
        ],
        formulas: ['F_m(x) = F_{m-1}(x) + η · h_m(x)'],
        bullets: [
          '<strong>F_{m-1}(x):</strong> la predicción acumulada de todos los árboles construidos hasta ahora.',
          '<strong>h_m(x):</strong> el nuevo árbol, entrenado para predecir el error (residuo) que dejaron los árboles anteriores.',
          '<strong>η (eta):</strong> la misma tasa de aprendizaje de la Lección 1 — qué tanto peso le damos al árbol nuevo.',
        ],
        paragraphsMid: [
          'El nombre "gradient boosting" viene literalmente de esto: cada árbol nuevo es un paso de descenso de gradiente (Lección 1), pero dando pasos con árboles en vez de pasos con números. La gráfica "xgb" de tu sitio cita a <strong>Groll et al. (2019)</strong>, un trabajo académico que aplica exactamente este enfoque —XGBoost para regresión de goles— a la predicción de partidos de fútbol.',
        ],
      },
      {
        heading: '7. Librerías típicas para XGBoost',
        bullets: [
          '<code>xgboost</code> — la librería del modelo en sí (<code>import xgboost as xgb</code>).',
          '<code>scikit-learn</code> — para dividir los datos en entrenamiento/prueba (<code>train_test_split</code>) y calcular métricas como accuracy.',
          '<code>pandas</code> y <code>numpy</code> — preparación de datos, igual que en los modelos anteriores.',
        ],
      },
      {
        heading: '8. Las tres versiones que comparas en cada partido',
        paragraphs: [
          'Con esto ya puedes leer la tabla de tu propia gráfica "accuracy" con otros ojos: <strong>Dixon-Coles</strong> (estadística clásica, un solo valor óptimo por parámetro), <strong>MCMC bayesiano</strong> (la misma idea, pero con una distribución completa de valores posibles vía PyMC) y <strong>XGBoost</strong> (Machine Learning basado en árboles, sin asumir Poisson). Los tres atacan exactamente el mismo problema —predecir el marcador de un partido— desde tres filosofías matemáticas distintas.',
        ],
      },
    ],
    checkYourself: 'Si Argentina tiene una "fuerza de ataque" (α) muy alta y Austria tiene una "fuerza de defensa" (β) muy débil, ¿qué le pasaría al valor de λ_local en la fórmula de la sección 3? ¿Y qué significaría eso, en la distribución de Poisson, para la probabilidad de un marcador como 3-0?',
  },

  {
    id: 'recursos-youtube',
    order: 3,
    type: 'resources',
    title: 'Recursos de YouTube para profundizar',
    subtitle: 'Un video por cada tema del curso — cambia el ID por el que prefieras',
    intro: 'Aquí dejamos un video real por cada tema, para que la lección no quede vacía. Si tienes tus propios videos favoritos, solo edita el campo <code>videoId</code> de cada recurso en <code>src/data/lessons.js</code> — es el texto que va después de <code>watch?v=</code> en la URL de YouTube.',
    resources: [
      { id: 'r1', topic: 'Regresión lineal', title: 'Regresión Lineal y Mínimos Cuadrados Ordinarios | DotCSV', videoId: 'k964_uNn3l0', description: 'El modelo más simple de ML — la base matemática de la Lección 1.' },
      { id: 'r2', topic: 'Descenso de gradiente', title: '¿Qué es el Descenso del Gradiente? | DotCSV', videoId: 'A6FiCDoz8_4', description: 'Cómo "aprende" un modelo en la práctica, con la analogía de la montaña.' },
      { id: 'r3', topic: 'Distribución de Poisson', title: 'Distribución de Poisson | ¿Cuándo usarla? | Ejercicio resuelto', videoId: 'sloXWU-TmDc', description: 'La base estadística detrás de Dixon-Coles — eventos raros en un intervalo fijo.' },
      { id: 'r4', topic: 'MCMC / Estadística bayesiana', title: 'Markov Chain Monte Carlo (MCMC), parte 1', videoId: 'WIebuAeuRfY', description: 'El método de muestreo detrás de la versión bayesiana de tu modelo.' },
      { id: 'r5', topic: 'XGBoost / Gradient Boosting', title: 'XGBoost: Clasificación paso a paso con Python', videoId: 'ZjfUzooCazI', description: 'Cómo se usa la librería en código real, paso a paso.' },
      { id: 'r6', topic: 'Overfitting y validación', title: '¿Qué es el Overfitting? Explicación del sobreajuste', videoId: 'MR0YTI5OB9I', description: 'Por qué siempre se mide el accuracy con partidos que el modelo nunca vio.' },
    ],
  },

  {
    id: 'interpretar-graficas',
    order: 4,
    title: 'Cómo leer las gráficas de cada partido',
    subtitle: 'Qué significa cada imagen, explicado para alguien sin conocimientos técnicos',
    sections: [
      {
        heading: '1. El panorama: 4 imágenes, 3 modelos',
        paragraphs: [
          'Cada partido en este sitio muestra hasta 4 imágenes — generadas automáticamente, sin que nadie las dibuje a mano — comparando 3 modelos: Dixon-Coles, MCMC bayesiano y XGBoost (los que vimos en la Lección 2). Aquí te explicamos cada una, con un ejemplo real (Argentina vs Austria) y sin ningún tecnicismo.',
        ],
      },
      {
        heading: '2. Las gráficas "mcmc" y "xgb": el mapa de marcadores posibles',
        images: [{ src: '/curso/ejemplos/ejemplo_xgb.png', caption: 'Ejemplo real: gráfica "XGBoost" del partido Argentina vs Austria.' }],
        paragraphs: [
          'Esta imagen tiene 3 partes, de izquierda a derecha:',
        ],
        bullets: [
          '<strong>La tabla de calor (izquierda):</strong> cada celda es un marcador exacto posible (por ejemplo "Argentina 2, Austria 0") y el número/color de esa celda es qué tan probable es ese marcador específico, en porcentaje. Mientras más oscuro/rojo, más probable.',
          '<strong>Las barras de resultado (centro):</strong> la misma información, pero agrupada solo en 3 categorías — gana el local, empate, gana el visitante. Es la forma más fácil de leer "quién es favorito".',
          '<strong>El top 10 (derecha):</strong> de los cientos de marcadores posibles (0-0, 1-0, 2-3, etc.), estos son los 10 más probables según el modelo, ordenados de mayor a menor.',
        ],
        paragraphsMid: [
          '<strong>Lo más importante para interpretarla bien:</strong> que un marcador tenga, digamos, 18% de probabilidad NO significa que el modelo está "casi seguro" de que va a pasar exactamente eso — significa que, de cada 100 partidos con esas mismas condiciones, ese marcador específico ocurriría unas 18 veces. El fútbol tiene muchísima variabilidad, así que incluso el marcador "más probable" rara vez pasa de 15-20%.',
          'La gráfica "xgb" es idéntica en estructura — son exactamente las mismas 3 partes, pero calculadas por el modelo XGBoost en vez del MCMC bayesiano. Compararlas una junto a la otra te dice si los dos modelos están de acuerdo o no.',
        ],
      },
      {
        heading: '3. La gráfica "accuracy": ¿a quién le atina más?',
        images: [{ src: '/curso/ejemplos/ejemplo_accuracy.png', caption: 'Ejemplo real: gráfica "accuracy" del partido Argentina vs Austria.' }],
        paragraphs: [
          'La parte de arriba (el texto tipo "consola", con columnas como Draws, Step size, Speed) es solo la computadora "mostrando su trabajo" mientras entrena el modelo bayesiano — para interpretar el resultado, esa parte se puede ignorar por completo.',
          'Lo que sí importa es la tabla de abajo: compara, para los 3 modelos, qué tan bien predijeron <strong>partidos que el modelo nunca vio durante su entrenamiento</strong> (por eso dice "fuera de muestra"). Tiene 2 columnas:',
        ],
        bullets: [
          '<strong>Accuracy 1X2:</strong> de 100 partidos pasados, en cuántos el modelo adivinó correctamente si ganó el local, hubo empate, o ganó el visitante. Más alto = mejor. Un 59% significa que acertó 59 de cada 100 — para referencia, adivinar al azar entre 3 opciones acertaría solo ~33 de cada 100.',
          '<strong>RPS (Rank Probability Score):</strong> una medida más fina del error, que además castiga las predicciones "lejanas" más que las "cercanas" (predecir empate cuando fue victoria local es un error más chico que predecir victoria visitante cuando fue victoria local). Aquí, a diferencia del accuracy, <em>más bajo es mejor</em>.',
        ],
        paragraphsMid: [
          'Las 2 gráficas de barras de abajo son solo esa misma tabla, dibujada visualmente para comparar los 3 modelos de un vistazo.',
        ],
      },
      {
        heading: '4. La gráfica "resumen": el resumen ejecutivo',
        images: [{ src: '/curso/ejemplos/ejemplo_resumen.png', caption: 'Ejemplo real: gráfica "resumen" del partido Argentina vs Austria.' }],
        paragraphs: [
          'Esta es, literalmente, un resumen en texto plano de las otras tres: el marcador más probable según cada modelo, la misma tabla de accuracy/RPS, de dónde vienen los datos históricos, y el disclaimer del sitio. Si solo vas a ver una imagen rápida antes de pasar al siguiente partido, es esta.',
        ],
      },
      {
        heading: '5. Entonces, ¿a quién le creo?',
        paragraphs: [
          'Una forma simple de usar estas 4 imágenes sin saber nada de programación:',
        ],
        bullets: [
          'Mira las barras de "Probabilidad de resultado" en mcmc y xgb. Si los dos modelos coinciden en el favorito, hay más razones para confiar en esa predicción.',
          'Si discrepan mucho, mira la tabla de accuracy: dale algo más de peso a la opinión del modelo con mejor accuracy histórico — pero recuerda que ninguno pasa de ~60%, así que ningún modelo es una certeza.',
          'El marcador exacto del "top 10" siempre es la apuesta menos confiable de las tres — hay demasiados marcadores posibles para que cualquiera supere el 20% de probabilidad.',
          'Y, como dice el disclaimer de tu propio sitio: esto es un ejercicio académico, no una recomendación de apuesta. El fútbol tiene aleatoriedad irreducible — un rebote, una tarjeta roja, un día inspirado — que ningún modelo puede eliminar.',
        ],
      },
    ],
    checkYourself: 'Si en un partido el modelo MCMC le da 70% a que gane el local y XGBoost le da solo 40%, ¿qué deberías revisar antes de decidir en cuál confiar más? (Pista: piensa en la gráfica de la sección 3.)',
  },
];

export function getLessonById(lessonId) {
  return LESSONS.find(l => l.id === lessonId);
}
