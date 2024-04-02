
# MyStay 2024 - Grupo 02 - ISST

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Java** (versión 8, 11, o 15). Verifica con `java -version`.
- **Visual Studio Code**.
- **Extensiones VS Code**: Spring Boot Extension Pack, Java Extension Pack, Lombok (opcional).

## 🚀 Inicio Rápido

### Clonación y Configuración Inicial

Si ya tienes un repositorio:

```bash
git clone https://github.com/drosell271/MyStay.git
cd MyStay
```

### Estructura del Proyecto

- `pom.xml` o `build.gradle`: Configuración del proyecto.
- `src/main/java/`: Código fuente de Java.
- `src/main/resources/`: Recursos y configuraciones.
- `src/test/java/`: Pruebas.



## 🛠 Desarrollo

Escribe tu código en el directorio `src/main/java/`. Utiliza VS Code para facilitar el desarrollo.

### Ejecución de la Aplicación

Usa el terminal integrado en VS Code:


  ```bash
  ./mvnw spring-boot:run
  ```

## 🧪 Pruebas y Construcción

### Construir el Proyecto


  ```bash
  ./mvnw clean install
  ```

### Ejecutar Pruebas


  ```bash
  ./mvnw test
  ```

## ⚙️ Configuración del Entorno de Desarrollo

Para asegurar un desarrollo fluido y eficiente, es crucial tener configurado correctamente tu entorno de desarrollo. A continuación, se detallan los pasos para preparar tu entorno con Java 22 y Visual Studio Code.

### 🌐 Instalación de Java 22
1. **Verificar Java**:
   - Abre una terminal.
   - Escribe `java --version` y presiona Enter.
   - Si no ves Java 22, sigue los pasos para instalarlo.

2. **Instalar Java 22**:
   - Visita el [OpenJDK Archive](https://jdk.java.net/archive/) o el [sitio de Oracle](https://www.oracle.com/java/technologies/javase/jdk22-archive-downloads.html).
   - Descarga el JDK 22 para tu sistema operativo.
   - Sigue las instrucciones de instalación específicas para tu SO.

3. **Configurar JAVA_HOME**:
   - Encuentra la ruta de instalación de Java (por ejemplo, `C:\Program Files\Java\jdk-22` en Windows).
   - Configura la variable de entorno `JAVA_HOME` con esta ruta.

   **En Windows**:
   - Ve a 'Propiedades del sistema' > 'Variables de entorno'.
   - Agrega una nueva variable de sistema llamada `JAVA_HOME` y establece su valor a la ruta del JDK.
   - Asegúrate de que la ruta del `bin` de Java esté en la variable de entorno `Path`.

   **En macOS/Linux**:
   - Edita tu archivo de perfil (como `~/.bash_profile` o `~/.zshrc`).
   - Agrega `export JAVA_HOME="$(/usr/libexec/java_home -v 22)"` y `export PATH=$JAVA_HOME/bin:$PATH`.

### 💻 Instalación de Visual Studio Code y Extensiones
1. **Instalar Visual Studio Code**:
   - Descarga e instala desde [Visual Studio Code](https://code.visualstudio.com/).

2. **Instalar Extensiones Necesarias**:
   - Abre VS Code y ve a las extensiones (`Ctrl+Shift+X` o `Cmd+Shift+X`).
   - Busca e instala `Spring Boot Extension Pack` y `Java Extension Pack`.

## 🤝 Contribuciones

Para contribuir a este proyecto:

1. Crea una nueva rama:
   ```bash
   git checkout -b [nombre_de_tu_rama]
   ```
2. Realiza tus cambios y haz un commit:
   ```bash
   git add .
   git commit -m "[descripción de los cambios]"
   ```
3. Sube la rama y abre un pull request.

## ⚖️ Licencia

Este proyecto se publica bajo la licencia [Incluir tipo de licencia aquí].




