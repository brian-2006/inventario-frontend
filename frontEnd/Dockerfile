# =================================================================
# ETAPA 1: BUILDER (Compilación de la aplicación)
# =================================================================

# 1. IMAGEN BASE: Usamos la versión 22 de Node.js (v22.18.0)
FROM node:22-alpine AS builder 

# 2. Directorio de trabajo
WORKDIR /app

# 3. Copiar manifiestos y dependencias para aprovechar el caché de Docker
COPY package*.json ./
RUN npm install --silent

# 4. Copiar el resto del código fuente
COPY . .

# 5. Ejecutar el script de construcción de Vite
RUN npm run build


# =================================================================
# ETAPA 2: PRODUCCIÓN (Servir los archivos estáticos)
# =================================================================

# Usamos Nginx, que escucha en el puerto 80 por defecto dentro del contenedor.
FROM nginx:stable-alpine

# 6. CONFIGURACIÓN NGINX: Copiamos tu archivo de configuración.
# NOTA: En este archivo 'nginx.conf', Nginx debe ser configurado para escuchar en el puerto 5173 
# si deseas que ese sea el puerto interno de Nginx. (Ver sección de ajustes).
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 7. COPIAR ARCHIVOS ESTATICOS
COPY --from=builder /app/dist /usr/share/nginx/html

# 8. EXPOSICIÓN DEL PUERTO: Documentamos que la app escucha en el 5173.
EXPOSE 5173