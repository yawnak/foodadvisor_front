FROM golang:latest

RUN mkdir /app
WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY *.go ./

COPY . ./

RUN go build -o /build ./cmd/web

EXPOSE 3000

CMD [ "/build" ]