README: Instrucciones de Instalación y Ejecución
Este es un sencillo servidor web utilizando Flask que realiza solicitudes a un servicio REST externo para obtener datos de clasificación de suelo basados en una divipola proporcionada. Sigue estos pasos para instalar y ejecutar la aplicación:

Requisitos previos
Asegúrate de tener Python y pip instalados en tu sistema. Puedes descargar Python desde python.org y pip se instalará automáticamente con Python a partir de la versión 3.4.

Paso 1: Clona el Repositorio
bash
Copy code
git clone https://github.com/ronymendoza10/IGAC.git

Paso 2: Instala las Dependencias
Instala las dependencias necesarias utilizando el siguiente comando:

bash
Copy code
pip install Flask requests
Paso 3: Ejecuta la Aplicación
Ejecuta la aplicación con el siguiente comando:

bash
Copy code
python app.py
Paso 4: Accede a la Aplicación en tu Navegador
Abre tu navegador web y visita http://localhost:5000/. Deberías ver la interfaz de usuario básica.

Uso de la Aplicación
Ingresa a la página de inicio: http://localhost:5000/.
Proporciona un código de divipola en el campo correspondiente.
Haz clic en el botón para enviar la solicitud al servidor backend.
La respuesta del servidor se mostrará en formato JSON en la página.
Notas Adicionales
Asegúrate de tener una conexión a Internet activa, ya que la aplicación realiza solicitudes a un servicio externo.
Si encuentras algún problema, verifica la consola de salida para obtener mensajes de error detallados.
