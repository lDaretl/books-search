FROM node:18-alpine as build
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build --mode production

# production environment
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/sites-enabled/default
EXPOSE 80
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]