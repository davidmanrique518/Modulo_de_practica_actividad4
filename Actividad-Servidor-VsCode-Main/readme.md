# Reporte de Actividad: Creación y Configuración del Servidor Web Local

## 1. Instalación de Herramientas y Entorno de Desarrollo

* **Extensión en VS Code:** Se instaló la extensión **Dadroit JSON Generator** para facilitar la visualización y estructuración de archivos de datos JSON.
* **Instalación de Node.js:** Se descargó e instaló la versión LTS de **Node.js** desde su sitio web oficial (`nodejs.org`) para permitir la ejecución de código JavaScript en el entorno local.

---

## 2. Configuración de Permisos en Windows PowerShell

Para autorizar la ejecución de scripts de Node.js y paquetes de `npm` en el sistema, se realizaron los siguientes pasos:

1. Se ejecutó **Windows PowerShell** como Administrador.
2. Se ingresó el comando para ajustar la directiva de ejecución del usuario actual:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
luego se confirmo la accion presionando la tecla S (SI).
