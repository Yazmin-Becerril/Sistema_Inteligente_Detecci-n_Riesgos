# Sistema Inteligente de Detección de Objetos Peligrosos

## Descripción del proyecto

Este proyecto consiste en el desarrollo de un **sistema inteligente de detección de objetos peligrosos**, cuyo propósito es identificar objetos en un entorno cotidiano mediante **visión artificial**, clasificar su nivel de riesgo y ejecutar **acciones físicas reales** utilizando un sistema embebido con Arduino.

El sistema emplea un **modelo de aprendizaje automático entrenado en Teachable Machine**, el cual analiza imágenes capturadas por una cámara web y clasifica diferentes objetos según su peligrosidad. A partir de estas predicciones, se aplica una **lógica de decisión** que considera tanto la clase detectada como el nivel de confianza del modelo.

Dependiendo del nivel de riesgo identificado, el sistema envía comandos por **comunicación serial** a un **Arduino UNO**, el cual activa distintos **LEDs** como alertas visuales. De esta manera, el proyecto integra **percepción, razonamiento y acción**, cumpliendo con las características de un sistema inteligente funcional y demostrable.

---

## Tecnologías utilizadas

- **Teachable Machine (Google)**  
  Utilizado para entrenar un modelo de clasificación de imágenes capaz de reconocer objetos peligrosos y no peligrosos.

- **TensorFlow.js**  
  Permite ejecutar el modelo de aprendizaje automático directamente en el navegador web.

- **JavaScript**  
  Implementa la lógica de decisión del sistema, procesa las predicciones del modelo y gestiona la comunicación con el hardware.

- **Web Serial API**  
  Facilita la comunicación serial entre la aplicación web y el Arduino en tiempo real.

- **Arduino UNO**  
  Microcontrolador encargado de ejecutar acciones físicas según el nivel de riesgo detectado.

- **Hardware electrónico**  
  Protoboard, LEDs (rojo, amarillo, verde y azul), resistencias y cables Dupont para la implementación física del sistema.

---

## Arquitectura del sistema

El sistema está estructurado en las siguientes etapas:

### 1. Percepción
La cámara web captura imágenes del entorno en tiempo real.

### 2. Clasificación
El modelo entrenado en Teachable Machine analiza la imagen y determina la clase del objeto junto con su nivel de confianza.

### 3. Razonamiento (Inteligencia del sistema)
La aplicación web evalúa la clase detectada y el nivel de confianza, aplicando reglas de decisión para determinar el nivel de riesgo.

### 4. Comunicación
El sistema envía comandos al Arduino mediante comunicación serial usando la Web Serial API.

### 5. Acción
El Arduino interpreta los comandos recibidos y activa LEDs específicos para alertar visualmente al usuario.

Esta arquitectura permite una clara separación entre **percepción, inteligencia y acción**, facilitando la comprensión y demostración del funcionamiento del sistema.

---

## Clasificación de riesgos

El sistema clasifica los objetos detectados según el siguiente nivel de peligro:

- 🔴 **Rojo parpadeante (alto peligro)**
  - Fuego

- 🔴 **Rojo (peligro alto)**
  - Navaja  
  - Cutter  

- 🟠 **Amarillo / Naranja (peligro medio)**
  - Tijeras  
  - Vidrio  

- 🟢 **Verde (bajo peligro)**
  - Tenedor  
  - Lápiz  

- 🔵 **Azul (sin riesgo)**
  - Nada (fondo o ausencia de objetos peligrosos)

---

## Funcionamiento del sistema

1. El usuario abre la interfaz web y conecta el Arduino.
2. La cámara web captura imágenes del entorno.
3. El modelo de Teachable Machine clasifica el objeto observado.
4. La lógica del sistema evalúa la clase y el nivel de confianza.
5. Se envía un comando al Arduino según el nivel de riesgo.
6. El Arduino activa el LED correspondiente como alerta visual.

---

## Contenido del repositorio

- Código fuente del sistema (HTML, JavaScript y Arduino).
- Modelo entrenado en Teachable Machine (enlace).
- Documentación del proyecto.
- Evidencias de funcionamiento.

---

## Proyecto académico

Proyecto desarrollado como **Proyecto Final de la materia Sistemas Inteligentes**, demostrando la aplicación práctica de **aprendizaje automático, razonamiento lógico e integración hardware–software** en un sistema funcional.
