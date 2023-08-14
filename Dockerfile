FROM golang:1.21-alpine

RUN mkdir /app
WORKDIR /app

#building go app
COPY cmd ./cmd
COPY internal ./internal
COPY go.mod ./
COPY go.sum ./

RUN go mod download

RUN go build -o /build ./cmd/web

#copying web assets

COPY web ./web

EXPOSE 3000

CMD [ "/build" ]