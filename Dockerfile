FROM golang:1.21 AS gowebapp

RUN mkdir /app
WORKDIR /app

#building go app
COPY cmd ./cmd
COPY internal ./internal
COPY go.mod ./
COPY go.sum ./

RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux go build -o /build ./cmd/web

#copying web assets

FROM gcr.io/distroless/base-debian11

WORKDIR /app

COPY web ./web

#copy application binary
COPY --from=gowebapp /build /build

EXPOSE 3000

CMD [ "/build" ]