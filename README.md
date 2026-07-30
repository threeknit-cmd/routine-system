# 🚀 Routine Analytics Tracker - Dual Sheet v25.7

> **Routine Analytics Tracker (v25.7)** adalah aplikasi web berbasis *frontend* modern (HTML5, Tailwind CSS, JavaScript murni, dan Chart.js) yang dirancang secara profesional untuk memantau, mengukur, dan menganalisis produktivitas harian, mingguan, hingga tahunan secara interaktif dan *real-time*[cite: 1].

---

## 🌟 Fitur Utama & Keunggulan

### 1. 📅 Sheet 1: Matriks Kalender & Pekan Dinamis
- **Navigasi Linier Komprehensif:** Menampilkan rentang waktu dari Juli 2026 hingga Desember 2027 secara berkelanjutan.
- **Filter Fleksibel:** Menyaring target berdasarkan Bulan tertentu dan Pekan ke-1 hingga ke-5.
- **Quick Jump & Hari Ini:** Fitur lompat cepat ke tanggal tertentu atau langsung kembali ke hari ini (*Jump to Today*).
- **Manajemen Tugas Interaktif:**
  - Tambah, ubah (*rename*), dan hapus (*delete*) tugas harian.
  - Indikator progres melingkar (*SVG Circle Progress*) dengan animasi angka secara *real-time*.
  - Tombol **Sembunyikan Tugas Selesai** (*Hide Completed*) untuk kerapian tampilan harian.
  - Fitur **Duplikasi Struktur Tugas** untuk menyalin daftar tugas ke 7 hari berikutnya secara otomatis.
- **Voice Input Berbasis Web Speech API:** Memungkinkan penambahan nama tugas menggunakan perintah suara dalam Bahasa Indonesia (*Speech-to-Text*).

### 2. 📊 Sheet 2: Ringkasan Analisis & Visualisasi Grafik
- **Statistik Multi-Periode:** Ringkasan persentase kepatuhan untuk Pekan Ini, Bulan Ini, dan Tahun Ini.
- **Macro Contribution Matrix (GitHub-style Heatmap):** Peta kontribusi warna-warni yang merekam tingkat konsistensi produktivitas harian sepanjang tahun.
- **Grafik Interaktif Chart.js:**
  - **Segmented Doughnut Chart:** Menampilkan distribusi penyelesaian tugas dari Senin hingga Minggu dalam bentuk donat interaktif.
  - **Monthly Trend Line Chart:** Grafik garis yang melacak tren kenaikan target kepatuhan bulanan.
- **Evaluasi Streak & Konsistensi:** Penghitungan hari beruntun (*Streak*) secara otomatis untuk memotivasi pencapaian target.

### 3. 🛠️ Utilitas & Penyimpanan Data
- **Penyimpanan Lokal (LocalStorage):** Data disimpan secara aman di dalam browser pengguna.
- **Backup & Restore (Cadangkan & Pulihkan):** Fitur ekspor data ke format `.JSON` dan impor kembali kapan saja.
- **Demo Mode:** Memuat data sampel secara instan untuk mencoba seluruh fitur aplikasi.
- **Dark Mode / Light Mode:** Dukungan penuh untuk mode gelap dan terang dengan transisi yang halus.

---

## 📂 Struktur Program

Program ini dibangun dalam satu file mandiri (*Single-File Architecture*) berbasis web standar tanpa memerlukan instalasi server backend yang rumit:
📦 Routine-Analytics-Tracker
 ┗ 📜 index.html   # Seluruh kode HTML, Tailwind CSS, JavaScript, dan Chart.js

---

## ⚙️ Cara Menjalankan (Quick Start)

Karena aplikasi ini dibangun menggunakan teknologi web murni (*Client-side*), Anda dapat menjalankannya dengan sangat mudah:

1. **Clone repository ini** atau unduh file `index.html`:
   ```bash
   git clone [https://github.com/username/routine-analytics-tracker.git](https://github.com/username/routine-analytics-tracker.git)