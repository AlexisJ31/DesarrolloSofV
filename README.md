# Laboratorio 1: Configuración del Entorno y Trabajo Colaborativo

## 👥 Integrantes del Equipo
* **Estudiante 1:** [Alexis Jaen] - `@AlexisJ31`
* **Estudiante 2:** [José Muñoz] - `@YocelPTY`
* **Estudiante 3:** [Nombre y Apellido] - `@[UsuarioGitHub]`

---

## 🎯 Objetivo
Crear y modificar un archivo HTML (`index.html`) dentro de un repositorio existente utilizando el entorno en la nube **GitHub Codespaces**, aplicando buenas prácticas de control de versiones y trabajo colaborativo mediante ramas.

---

## 🛠️ Comandos de Git Utilizados
Durante el desarrollo del laboratorio se aplicaron los siguientes comandos principales:

* `git status` — Verificar el estado de los archivos y cambios en el área de trabajo.
* `git add <archivo>` — Añadir archivos al área de preparación (*staging area*).
* `git commit -m "mensaje"` — Registrar y confirmar los cambios en el historial local.
* `git push origin <rama>` — Subir la rama local y sus commits al repositorio remoto en GitHub.
* `git log` — Consultar el historial detallado de commits realizados.

---

## 📋 Metodología y Pasos de la Actividad

### PARTE 1 — Entrar al repositorio y crear ramas
Cada colaborador ingresa al repositorio del proyecto y crea una rama independiente para trabajar sus cambios sin afectar directamente la rama principal (`main`):
```bash
git checkout -b feature/nombre-colaborador
