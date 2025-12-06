# =================================================================
# ETAPA 1: BUILDER (Compilación de la aplicación)
# =================================================================

# 1. IMAGEN BASE: Usamos una versión LTS de Node.js
FROM node:22-alpine AS builder 

# 2. Directorio de trabajo
WORKDIR /app

# 3. Copiar manifiestos y dependencias para aprovechar el caché de Docker
COPY package*.json ./
RUN npm install

# 4. Copiar el resto del código fuente
COPY . .

# 5. Ejecutar el script de construcción de Vite
RUN npm run build


# =================================================================
# ETAPA 2: PRODUCCIÓN (Servir los archivos estáticos)
# =================================================================

# Usamos Nginx para servir los archivos estáticos.
FROM nginx:stable-alpine

# Copiamos la configuración personalizada de Nginx que creamos.
# Esto hará que Nginx escuche en el puerto 5173.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos desde la etapa 'builder'
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 5173, que es el que configuramos en nginx.conf
EXPOSE 5173

# El comando por defecto de la imagen de Nginx se encargará de iniciar el servidor.