# Usando a imagem do Node.js para construir o projeto
FROM node:20 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Servindo o React via Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
