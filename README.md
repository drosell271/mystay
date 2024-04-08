
# MyStay 2024 - Grupo 02 - ISST

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Java JDK** (versión 22). Verifica con `java -version`.
- **Node.js** (versión 20)
- **npm** (versión 10)
- **Visual Studio Code**.
- **Extensiones VS Code**: Spring Boot Extension Pack, Java Extension Pack.

## 🚀 Inicio Rápido

### Clonación y Configuración Inicial

Si ya tienes un repositorio:

```bash
git clone https://github.com/drosell271/mystay
cd mystay
```

### Estructura del Proyecto
#### Spring Boot
- `pom.xml`: Configuración del proyecto.
- `src/main/java/`: Código fuente de Java (Back-End).
- `src/main/resources/`: Recursos Front-End y configuraciones.

#### React
- `others/mystay-react`: Proyecto de desarrollo en React 

#### Otros
- `others/db-commands`: Comandos de configuraci de la base de datos
- `database.mv.db`: Base de datos de H2

### Ejecución de la Aplicación

Usa el terminal integrado en VS Code:

#### Windows
 ```bash
  ./mvnw.cmd spring-boot:run
  ```

#### Linux/Mac
 ```bash
  ./mvnw spring-boot:run
  ```

 

## 🧪 Construir el Proyecto
#### Windows
 ```bash
  ./mvnw.cmd clean install
  ```

#### Linux/Mac
 ```bash
  ./mvnw clean install
  ```

## ⚙️ Configuración del Entorno de Desarrollo

Para asegurar un desarrollo fluido y eficiente, es crucial tener configurado correctamente tu entorno de desarrollo. A continuación, se detallan los pasos para preparar tu entorno con Java 22 y Visual Studio Code.

### 📦 Instalación de Node.js v20 y npm v10

1. **Windows**:
   - Descarga el instalador de Node.js desde [la página oficial](https://nodejs.org/).
   - Ejecuta el archivo `.exe` descargado y sigue las instrucciones de instalación.
   - Asegúrate de que la opción para instalar npm esté seleccionada y que se añada al `PATH`.
   - Abre una terminal y verifica las versiones instaladas: `node -v`, `npm -v`.

2. **macOS**:
   - Instala Homebrew si aún no lo has hecho: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
   - Instala Node.js (esto instalará npm también): `brew install node@20`.
   - Verifica las versiones de Node.js y npm: `node -v`, `npm -v`.

3. **Linux (Debian/Ubuntu)**:
   - Actualiza tu lista de paquetes: `sudo apt update`.
   - Instala Node.js: `curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -`, `sudo apt-get install -y nodejs`.
   - Verifica las versiones de Node.js y npm: `node -v`, `npm -v`.

### 🌐 Instalación de Java 22

1. **Verificar Java**:
   - Abre una terminal.
   - Escribe `java --version` y presiona Enter.
   - Si no ves Java 22, sigue los pasos para instalarlo.

2. **Instalar Java**:
   - Visita [OpenJDK Archive](https://jdk.java.net/archive/) o [Oracle](https://www.oracle.com/java/technologies/javase/jdk22-archive-downloads.html).
   - Descarga el JDK 22 para tu SO.
   - Sigue las instrucciones de instalación para tu SO.

3. **Configurar JAVA_HOME**:
   - Encuentra la ruta de instalación de Java (ejemplo: `C:\\Program Files\\Java\\jdk-22` en Windows).
   - Configura `JAVA_HOME` con esta ruta.

   **Windows**:
   - 'Propiedades del sistema' > 'Variables de entorno'.
   - Nueva variable `JAVA_HOME`, valor: ruta del JDK.
   - Ruta del `bin` de Java en la variable `Path`.

   **macOS/Linux**:
   - Edita `~/.bash_profile` o `~/.zshrc`.
   - Agrega `export JAVA_HOME="$(/usr/libexec/java_home -v 22)"` y `export PATH=$JAVA_HOME/bin:$PATH`.
"""



### 💻 Instalación de Visual Studio Code y Extensiones
1. **Instalar Visual Studio Code**:
   - Descarga e instala desde [Visual Studio Code](https://code.visualstudio.com/).

2. **Instalar Extensiones Necesarias**:
   - Abre VS Code y ve a las extensiones (`Ctrl+Shift+X` o `Cmd+Shift+X`).
   - Busca e instala `Spring Boot Extension Pack` y `Java Extension Pack`.



## ⚖️ Licencia

Este proyecto se publica bajo la licencia [Incluir tipo de licencia aquí].
