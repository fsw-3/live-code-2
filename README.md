# Binar: Express.js

Repository ini ditujukan sebagai boilerplate dalam membuat sebuah HTTP Server menggunakan Express.js
Repository ini menggunakan Service Repository Pattern, yang artinya di dalam repository ini terdapat modul model, controller, service, dan repository.

## Getting Started

Untuk mulai membuat sebuah implementasi dari HTTP Server, mulainya menginspeksi file [`app/index.js`](./app/index.js), dan lihatlah salah satu contoh `controller` yang ada di [`app/controllers/mainController.js`](./app/controllers/mainController.js)

Lalu untuk menjalankan development server, kalian tinggal jalanin salah satu script di package.json, yang namanya `develop`.

```sh
yarn develop
```

## Database Management

Di dalam repository ini sudah terdapat beberapa script yang dapat digunakan dalam memanage database, yaitu:

- `yarn db:create` digunakan untuk membuat database
- `yarn db:drop` digunakan untuk menghapus database
- `yarn db:migrate` digunakan untuk menjalankan database migration
- `yarn db:seed` digunakan untuk melakukan seeding
- `yarn db:rollback` digunakan untuk membatalkan migrasi terakhir

## Endpoint List

- `/register` untuk mendaftarkan user baru (password harus di-encrypt sebelum masuk db) `10pts`
- `/login` untuk masuk ke dalam aplikasi (menggunakan jwt) `20pts`
- `/create` untuk membuat data baru (memerlukan token) `10pts`
- `/find-all` untuk melihat seluruh data `5pts`
- `/findbyid/:id` untuk melihat data berdasarkan id `5pts`
- `/update/:id` untuk mengubah data berdasarkan id (memerlukan token) `10pts`
- `/delete/:id` untuk menghapus data berdasarkan id (memerlukan token) `10pts`
- `/docs` untuk melihat dokumentasi API `30pts`
