FROM node:22.23.2-alpine3.24
LABEL authors="mostafa"

RUN addgroup app && adduser -S -G app app
WORKDIR /app
RUN chown app:app /app
USER app

COPY --chown=app:app package.json package-lock.json ./
RUN npm ci --ignore-scripts

COPY --chown=app:app . .

ENV VITE_API_BASE_URL=http://localhost:4000
EXPOSE 5173 4000

CMD ["sh", "-c", "npm run api & npm run dev -- --host 0.0.0.0"]