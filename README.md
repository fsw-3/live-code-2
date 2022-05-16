# Binar: Car Management API

Repository ini ditujukan sebagai Latihan Live-Code

## Getting Started
Untuk menjalankan project silahkan ikuti step dibawah ini

1. Install packages
```sh
npm install
```
2. Database requirements
```sh
   - setting file database.js
   - sequelize db:create
   - sequelize db:migrate
   - sequelize db:seed:all
```
3. Run Server
```sh
node bin/www
```
## Info

- Swagger LIVECODE API

```sh
http://localhost:8000/docs/
```

## Endpoint List Yang Sudah Bisa

- `/register` untuk mendaftarkan user baru (password harus di-encrypt sebelum masuk db) `10pts`
- `/docs` untuk melihat dokumentasi API   `30pts`
