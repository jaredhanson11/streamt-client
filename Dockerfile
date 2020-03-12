FROM node:12.2.0-alpine as builder

WORKDIR /app

# Copy packages json then install first so that if code changes
# install layer doesn't need to refresh
COPY ./package.json ./
RUN npm install

COPY ./ ./
RUN npm run build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html
