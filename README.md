# MyRepublic Jawa Tengah Hub

Aplikasi React untuk menghitung insentif sales AE MyRepublic Jawa Tengah.

## Fitur kalkulator insentif

- **Insentif New SA:** tiering dinamis, komisi gross, dan estimasi pencairan 80%.
- **Uang Prestasi Bulanan:** kategori produk, syarat minimal SA, tiering, batas maksimal, dan estimasi pencairan 50%.
- **Uang Prestasi 3 Bulanan:** validasi kelayakan bulanan, potongan pencairan, dan final payout.
- **BAT (Bonus Akhir Tahun):** target tahunan, batas maksimal, dan komisi final.
- Tambah atau hapus produk, ubah kuantitas, dan lihat rincian perhitungan secara langsung.

## Menjalankan aplikasi

Perlu Node.js terpasang:

```bash
npm install
npm run dev
```

Untuk membuat build produksi:

```bash
npm run build
```

Setelah build selesai, jalankan server lokal di PowerShell:

```powershell
.\serve.ps1
```

Buka `http://localhost:3000/` atau `http://localhost:5000/`.

## Struktur proyek

```text
├── index.html
├── package.json
├── serve.ps1
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── common/
    │   │   ├── Loader.jsx
    │   │   ├── Navbar.jsx
    │   │   └── Toast.jsx
    │   └── kalkulator/
    │       ├── KalkulatorView.jsx
    │       └── KpiCard.jsx
    ├── data/
    │   └── constants.js
    └── services/
        └── exportService.js
```
