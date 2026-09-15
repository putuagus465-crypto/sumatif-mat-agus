import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // --- BAGIAN 1: PILIHAN GANDA (10 SOAL) ---
  // ==========================================
  {
    id: 1,
    type: 'pg',
    topic: 'Penjumlahan Bilangan Cacah',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat matematika penjumlahan berikut ini:\n18 + ▢ = 45\nBilangan yang tepat untuk mengisi simbol kotak (▢) adalah...',
    options: [
      { id: 'A', text: '25' },
      { id: 'B', text: '27' },
      { id: 'C', text: '37' },
      { id: 'D', text: '63' },
    ],
    correctAnswer: 'B',
    explanation:
      'Untuk mencari bilangan yang belum diketahui pada penjumlahan:\n▢ = 45 - 18\n▢ = 27.\nPembuktian: 18 + 27 = 45.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Pengurangan Bilangan Cacah',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat matematika berikut:\n▢ - 24 = 36\nBilangan yang tepat untuk melengkapi kalimat matematika di atas adalah...',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '50' },
      { id: 'C', text: '60' },
      { id: 'D', text: '70' },
    ],
    correctAnswer: 'C',
    explanation:
      'Untuk mencari bilangan yang dikurangi:\n▢ = 36 + 24\n▢ = 60.\nPembuktian: 60 - 24 = 36.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Cerita Kontekstual Penjumlahan',
    difficulty: 'Mudah',
    text: 'Siti memiliki 35 butir permen. Ibu memberinya beberapa butir permen lagi, sehingga sekarang permen Siti menjadi 60 butir. Jika banyak permen pemberian Ibu dimisalkan dengan simbol kotak (▢), kalimat matematika yang benar adalah...',
    options: [
      { id: 'A', text: '35 + ▢ = 60' },
      { id: 'B', text: '35 - ▢ = 60' },
      { id: 'C', text: '60 + 35 = ▢' },
      { id: 'D', text: '▢ - 35 = 60' },
    ],
    correctAnswer: 'A',
    explanation:
      'Permen mula-mula (35) ditambah permen dari Ibu (▢) menghasilkan total 60 permen.\nKalimat matematika: 35 + ▢ = 60.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Pengurangan Bilangan Cacah',
    difficulty: 'Sedang',
    text: 'Nilai dari simbol kotak (▢) pada kalimat matematika 85 - ▢ = 47 adalah...',
    options: [
      { id: 'A', text: '38' },
      { id: 'B', text: '42' },
      { id: 'C', text: '48' },
      { id: 'D', text: '132' },
    ],
    correctAnswer: 'A',
    explanation:
      'Untuk mencari bilangan pengurang:\n▢ = 85 - 47\n▢ = 38.\nPembuktian: 85 - 38 = 47.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Sifat Pertukaran (Komutatif)',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat matematika berikut:\n46 + 29 = ▢ + 46\nBerdasarkan sifat pertukaran (komutatif) pada penjumlahan, nilai yang tepat untuk mengisi kotak (▢) adalah...',
    options: [
      { id: 'A', text: '17' },
      { id: 'B', text: '29' },
      { id: 'C', text: '46' },
      { id: 'D', text: '75' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sifat komutatif pada penjumlahan menyatakan a + b = b + a.\nKarena 46 + 29 = ▢ + 46, maka nilai ▢ adalah 29.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Kalimat Matematika Perkalian',
    difficulty: 'Sedang',
    text: 'Di atas meja terdapat 4 piring. Setiap piring berisi buah jeruk dalam jumlah yang sama (▢). Jika total seluruh jeruk adalah 28 buah, kalimat matematika yang tepat adalah...',
    options: [
      { id: 'A', text: '4 + ▢ = 28' },
      { id: 'B', text: '4 × ▢ = 28' },
      { id: 'C', text: '28 × 4 = ▢' },
      { id: 'D', text: '▢ - 4 = 28' },
    ],
    correctAnswer: 'B',
    explanation:
      '4 piring masing-masing berisi ▢ jeruk, total 28 jeruk.\nBentuk perkalian: 4 × ▢ = 28 (sehingga ▢ = 28 ÷ 4 = 7).',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Perkalian Bilangan Cacah',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat matematika perkalian berikut:\n7 × ▢ = 56\nNilai yang tepat untuk menggantikan simbol kotak (▢) adalah...',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '7' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctAnswer: 'C',
    explanation:
      'Mencari bilangan pengali:\n▢ = 56 ÷ 7\n▢ = 8.\nPembuktian: 7 × 8 = 56.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Cerita Kontekstual Pengurangan',
    difficulty: 'Sedang',
    text: 'Di perpustakaan SDN 3 Loloan Timur mula-mula terdapat 90 buku cerita. Sebanyak ▢ buku sedang dipinjam oleh siswa, sehingga tersisa 55 buku di rak. Berapakah banyak buku yang sedang dipinjam siswa?',
    options: [
      { id: 'A', text: '25 buku' },
      { id: 'B', text: '35 buku' },
      { id: 'C', text: '45 buku' },
      { id: 'D', text: '145 buku' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kalimat matematika: 90 - ▢ = 55.\nBanyak buku dipinjam (▢) = 90 - 55 = 35 buku.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Hubungan Penjumlahan & Pengurangan',
    difficulty: 'Mudah',
    text: 'Jika diketahui kalimat matematika 38 + 27 = 65, maka bentuk pengurangan yang bernilai BENAR berdasarkan hubungan operasi hitung tersebut adalah...',
    options: [
      { id: 'A', text: '65 - 27 = 38' },
      { id: 'B', text: '65 - 38 = 17' },
      { id: 'C', text: '38 - 27 = 65' },
      { id: 'D', text: '65 - 18 = 27' },
    ],
    correctAnswer: 'A',
    explanation:
      'Operasi penjumlahan dan pengurangan saling berhubungan (invers).\nJika 38 + 27 = 65, maka 65 - 27 = 38 dan 65 - 38 = 27.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Kalimat Matematika Pembagian',
    difficulty: 'Sedang',
    text: 'Pak Guru membagikan 36 pensil kepada ▢ orang siswa sama banyak. Jika setiap siswa menerima 4 pensil, berapakah banyak siswa yang menerima pensil?',
    options: [
      { id: 'A', text: '7 siswa' },
      { id: 'B', text: '8 siswa' },
      { id: 'C', text: '9 siswa' },
      { id: 'D', text: '12 siswa' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kalimat matematika: 36 ÷ ▢ = 4.\nBanyak siswa (▢) = 36 ÷ 4 = 9 siswa.',
  },

  // ====================================================
  // --- BAGIAN 2: PILIHAN GANDA KOMPLEKS (10 SOAL) ---
  // ====================================================
  {
    id: 11,
    type: 'pgk',
    topic: 'Kesamaan Nilai Kalimat Matematika',
    difficulty: 'Mudah',
    text: 'Manakah dari kalimat matematika berikut yang menghasilkan nilai yang SAMA dengan 40 + 25? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'A', text: '30 + 35' },
      { id: 'B', text: '50 + 15' },
      { id: 'C', text: '70 - 15' },
      { id: 'D', text: '25 + 40' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Nilai dari 40 + 25 = 65.\n- A: 30 + 35 = 65 (BENAR)\n- B: 50 + 15 = 65 (BENAR)\n- C: 70 - 15 = 55 (SALAH)\n- D: 25 + 40 = 65 (BENAR)\nJawaban yang tepat adalah A, B, dan D.',
  },
  {
    id: 12,
    type: 'pgk',
    topic: 'Nilai Simbol pada Kalimat Matematika',
    difficulty: 'Sedang',
    text: 'Perhatikan beberapa kalimat matematika berikut. Manakah kalimat matematika yang nilai simbol kotak (▢) di dalamnya bernilai 15? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'A', text: '▢ + 20 = 35' },
      { id: 'B', text: '50 - ▢ = 35' },
      { id: 'C', text: '3 × ▢ = 45' },
      { id: 'D', text: '▢ + 15 = 40' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      '- A: ▢ = 35 - 20 = 15 (BENAR)\n- B: ▢ = 50 - 35 = 15 (BENAR)\n- C: ▢ = 45 ÷ 3 = 15 (BENAR)\n- D: ▢ = 40 - 15 = 25 (SALAH, nilainya 25).\nJawaban yang benar adalah A, B, dan C.',
  },
  {
    id: 13,
    type: 'pgk',
    topic: 'Pemecahan Masalah Kelereng',
    difficulty: 'Sedang',
    text: 'Made memiliki 50 butir kelereng. Ia memberikan sebagian kelerengnya kepada adiknya (▢), sehingga sisa kelereng Made sekarang adalah 32 butir. Manakah pernyataan atau kalimat matematika yang BENAR terkait cerita tersebut? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Kalimat matematikanya dapat ditulis 50 - ▢ = 32' },
      { id: 'B', text: 'Banyak kelereng yang diberikan kepada adik adalah 18 butir' },
      { id: 'C', text: 'Kalimat matematika dapat diselesaikan dengan cara 50 - 32 = ▢' },
      { id: 'D', text: 'Banyak kelereng yang diberikan kepada adik adalah 28 butir' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      '- A: Benar, mula-mula 50 dikurangi adik (▢) sama dengan 32.\n- B: Benar, 50 - 32 = 18 butir.\n- C: Benar, mencari pengurang dilakukan dengan mengurangkan 50 - 32.\n- D: Salah, bukan 28 butir melainkan 18 butir.',
  },
  {
    id: 14,
    type: 'pgk',
    topic: 'Sifat Komutatif Operasi Hitung',
    difficulty: 'Mudah',
    text: 'Manakah dari bentuk kalimat matematika berikut yang menunjukkan sifat pertukaran (komutatif) dengan BENAR? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'A', text: '34 + 18 = 18 + 34' },
      { id: 'B', text: '6 × 8 = 8 × 6' },
      { id: 'C', text: '50 - 20 = 20 - 50' },
      { id: 'D', text: '125 + 75 = 75 + 125' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Sifat komutatif berlaku pada operasi penjumlahan dan perkalian:\n- A: 34 + 18 = 18 + 34 (BENAR)\n- B: 6 × 8 = 8 × 6 (BENAR)\n- C: 50 - 20 ≠ 20 - 50, sifat komutatif TIDAK berlaku pada pengurangan (SALAH)\n- D: 125 + 75 = 75 + 125 (BENAR).',
  },
  {
    id: 15,
    type: 'pgk',
    topic: 'Kebenaran Kalimat Matematika',
    difficulty: 'Sedang',
    text: 'Manakah di antara kalimat matematika berikut yang kedua ruasnya bernilai SAMA (bernilai BENAR)? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'A', text: '28 + 14 = 50 - 8' },
      { id: 'B', text: '6 × 5 = 15 + 15' },
      { id: 'C', text: '45 - 15 = 20 + 15' },
      { id: 'D', text: '7 × 4 = 14 × 2' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      '- A: 28 + 14 = 42 dan 50 - 8 = 42 (BENAR)\n- B: 6 × 5 = 30 dan 15 + 15 = 30 (BENAR)\n- C: 45 - 15 = 30, sedangkan 20 + 15 = 35 (SALAH, 30 ≠ 35)\n- D: 7 × 4 = 28 dan 14 × 2 = 28 (BENAR).',
  },
  {
    id: 16,
    type: 'pgk',
    topic: 'Pasangan Penjumlahan Bilangan 100',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat matematika: ▢ + △ = 100. Manakah pasangan nilai ▢ dan △ berikut yang membuat kalimat matematika tersebut bernilai BENAR? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'A', text: '▢ = 45 dan △ = 55' },
      { id: 'B', text: '▢ = 32 dan △ = 68' },
      { id: 'C', text: '▢ = 60 dan △ = 50' },
      { id: 'D', text: '▢ = 73 dan △ = 27' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      '- A: 45 + 55 = 100 (BENAR)\n- B: 32 + 68 = 100 (BENAR)\n- C: 60 + 50 = 110 (SALAH)\n- D: 73 + 27 = 100 (BENAR).',
  },
  {
    id: 17,
    type: 'pgk',
    topic: 'Perkalian dan Pembagian Sederhana',
    difficulty: 'Sedang',
    text: 'Manakah dari kalimat matematika berikut yang nilai simbolnya adalah 6? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'A', text: '5 × ▢ = 30' },
      { id: 'B', text: '48 ÷ ▢ = 8' },
      { id: 'C', text: '▢ × 9 = 54' },
      { id: 'D', text: '36 ÷ ▢ = 7' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      '- A: ▢ = 30 ÷ 5 = 6 (BENAR)\n- B: ▢ = 48 ÷ 8 = 6 (BENAR)\n- C: ▢ = 54 ÷ 9 = 6 (BENAR)\n- D: 36 ÷ 6 = 6, bukan 7 (SALAH).',
  },
  {
    id: 18,
    type: 'pgk',
    topic: 'Aplikasi Kalimat Matematika Belanja Koperasi',
    difficulty: 'Sukar',
    text: 'Di koperasi sekolah SDN 3 Loloan Timur, harga 1 buku tulis adalah Rp3.000,00 dan harga 1 pensil adalah Rp2.000,00. Dayu membeli 2 buku tulis dan 1 pensil. Manakah kalimat matematika atau pernyataan yang BENAR? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Total belanjaan Dayu = (2 × 3.000) + 2.000' },
      { id: 'B', text: 'Total belanjaan Dayu adalah Rp8.000,00' },
      { id: 'C', text: 'Jika Dayu membayar dengan selembar uang Rp10.000,00, kembaliannya adalah Rp2.000,00' },
      { id: 'D', text: 'Total belanjaan Dayu adalah Rp7.000,00' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Perhitungan belanja Dayu:\n- Buku: 2 × Rp3.000 = Rp6.000\n- Pensil: 1 × Rp2.000 = Rp2.000\n- Total belanja: (2 × 3.000) + 2.000 = 6.000 + 2.000 = Rp8.000 (A dan B BENAR, D SALAH)\n- Kembalian: 10.000 - 8.000 = Rp2.000 (C BENAR).',
  },
  {
    id: 19,
    type: 'pgk',
    topic: 'Strategi Menyelesaikan Pengurangan',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat matematika: 75 - ▢ = 28. Manakah pernyataan-pernyataan berikut yang BENAR berkaitan dengan kalimat matematika tersebut? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Untuk mencari nilai ▢, kita dapat menghitung 75 - 28' },
      { id: 'B', text: 'Nilai dari ▢ adalah 47' },
      { id: 'C', text: 'Nilai dari ▢ adalah 57' },
      { id: 'D', text: 'Jika dibuktikan kembali: 75 - 47 = 28' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      '- A: Benar, mencari bilangan pengurang adalah 75 - 28.\n- B: Benar, 75 - 28 = 47.\n- C: Salah, nilainya 47 bukan 57.\n- D: Benar, 75 - 47 = 28 terbukti tepat.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Aplikasi Penjumlahan Bibit Pohon',
    difficulty: 'Sedang',
    text: 'Siswa kelas III SDN 3 Loloan Timur menanam bibit cabai di kebun sekolah. Mula-mula ada 24 bibit yang ditanam. Kepala sekolah memberikan bibit tambahan (▢), sehingga total bibit cabai yang ditanam menjadi 40 bibit. Manakah pernyataan yang BENAR? (Pilihlah semua jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Kalimat matematika dari cerita di atas adalah 24 + ▢ = 40' },
      { id: 'B', text: 'Banyak bibit tambahan yang diberikan kepala sekolah adalah 16 bibit' },
      { id: 'C', text: 'Nilai ▢ dapat dihitung dengan cara 40 - 24' },
      { id: 'D', text: 'Banyak bibit tambahan yang diberikan kepala sekolah adalah 26 bibit' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      '- A: Benar, 24 ditambah tambahan (▢) menjadi 40.\n- B: Benar, 40 - 24 = 16 bibit.\n- C: Benar, cara mencari nilai yang belum diketahui pada penjumlahan adalah pengurangan total dengan bilangan yang diketahui (40 - 24).\n- D: Salah, bukan 26 melainkan 16.',
  },

  // =========================================================
  // --- BAGIAN 3: BENAR / SALAH (PGK KATEGORI) (10 SOAL) ---
  // =========================================================
  {
    id: 21,
    type: 'pgk_kategori',
    topic: 'Konsep Kalimat Matematika',
    difficulty: 'Mudah',
    text: 'Tentukan kebenaran dari masing-masing pernyataan tentang kalimat matematika berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Kalimat "15 + 10 = 25" adalah kalimat matematika tertutup yang sudah bernilai benar.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kalimat "▢ + 8 = 20" merupakan kalimat matematika terbuka karena memuat simbol yang belum diketahui nilainya.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Simbol kotak (▢) dalam kalimat matematika tidak boleh diganti dengan suatu angka bilangan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 15 + 10 = 25 sudah dapat dipastikan kebenarannya (BENAR).\n2. Kalimat terbuka adalah kalimat matematika yang belum diketahui kebenarannya karena memuat variabel/simbol (BENAR).\n3. Simbol justru berfungsi untuk mewakili bilangan yang dicari nilainya (SALAH).',
  },
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Menentukan Nilai Simbol Penjumlahan',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat matematika: 54 + ▢ = 90. Tentukan kebenaran dari pernyataan-pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Nilai ▢ yang tepat untuk melengkapi kalimat matematika tersebut adalah 36.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kalimat matematika tersebut dapat diselesaikan dengan cara 90 - 54 = ▢.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika ▢ diganti dengan angka 46, maka kalimat matematika tersebut bernilai benar.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 90 - 54 = 36 (BENAR).\n2. Mencari suku penjumlahan adalah dengan mengurangkan jumlah dengan suku lainnya (BENAR).\n3. Jika ▢ = 46, maka 54 + 46 = 100 bukan 90 (SALAH).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Menentukan Nilai Simbol Pengurangan',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat matematika: ▢ - 35 = 48. Tentukan kebenaran dari pernyataan-pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Untuk mencari nilai ▢, kita menjumlahkan 48 dengan 35.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Nilai ▢ yang membuat kalimat matematika bernilai benar adalah 83.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Nilai ▢ yang membuat kalimat matematika bernilai benar adalah 13.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Bilangan yang dikurangi dicari dengan menjumlahkan hasil dan pengurang: 48 + 35 (BENAR).\n2. 48 + 35 = 83 (BENAR).\n3. 13 adalah hasil dari 48 - 35, padahal operasi yang dicari adalah bilangan sebelum dikurangi (SALAH).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Sifat-Sifat Operasi Hitung',
    difficulty: 'Sedang',
    text: 'Perhatikan sifat-sifat operasi hitung pada kalimat matematika berikut. Tentukan kebenaran masing-masing pernyataan (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pada operasi penjumlahan berlaku sifat pertukaran, contohnya 27 + 19 = 19 + 27.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pada operasi pengurangan berlaku sifat pertukaran, contohnya 40 - 15 = 15 - 40.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kalimat matematika (12 + 8) + 15 memiliki hasil yang sama dengan 12 + (8 + 15).',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Penjumlahan memiliki sifat komutatif (pertukaran) (BENAR).\n2. Pengurangan TIDAK memiliki sifat pertukaran: 40 - 15 = 25, sedangkan 15 - 40 bernilai negatif (SALAH).\n3. Pengelompokan (asosiatif) berlaku pada penjumlahan: keduanya menghasilkan 35 (BENAR).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Kalimat Matematika Perkalian',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat matematika perkalian: 6 × ▢ = 42. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Nilai ▢ yang tepat adalah 7, karena 6 × 7 = 42.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kalimat matematika tersebut berkaitan langsung dengan pembagian 42 ÷ 6 = ▢.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika ▢ diganti dengan angka 8, maka hasil perkaliannya adalah 42.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 42 ÷ 6 = 7 (BENAR).\n2. Perkalian merupakan kebalikan dari pembagian (BENAR).\n3. 6 × 8 = 48, bukan 42 (SALAH).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Kalimat Matematika Pembagian',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat matematika pembagian: 72 ÷ ▢ = 9. Tentukan kebenaran dari pernyataan-pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Nilai ▢ dapat diperoleh dengan menghitung 72 ÷ 9.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Nilai ▢ yang membuat kalimat matematika bernilai benar adalah 8.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bentuk perkalian yang berkaitan adalah 9 × 72 = ▢.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Pembagi dicari dengan 72 ÷ 9 (BENAR).\n2. 72 ÷ 9 = 8 (BENAR).\n3. Bentuk perkalian yang berkaitan adalah 9 × 8 = 72 atau 8 × 9 = 72 (SALAH).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Masalah Kontekstual Tabungan Siswa',
    difficulty: 'Sukar',
    text: 'Budi memiliki tabungan awal sebesar Rp45.000,00. Setiap hari Jumat ia menabung uang saku sebesar (▢). Setelah 3 minggu menabung, tabungannya bertambah Rp15.000,00. Tentukan kebenaran pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Kalimat matematika untuk uang tabungan selama 3 minggu adalah 3 × ▢ = 15.000.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Besar uang yang ditabung Budi setiap hari Jumat (▢) adalah Rp5.000,00.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Total seluruh tabungan Budi sekarang setelah 3 minggu adalah Rp70.000,00.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 3 minggu dengan uang tabungan ▢ menghasilkan tambahan Rp15.000: 3 × ▢ = 15.000 (BENAR).\n2. ▢ = 15.000 ÷ 3 = Rp5.000 (BENAR).\n3. Total tabungan = Rp45.000 + Rp15.000 = Rp60.000, bukan Rp70.000 (SALAH).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Kesamaan Dua Ruas Kalimat Matematika',
    difficulty: 'Sedang',
    text: 'Perhatikan kesamaan nilai pada dua ruas kalimat matematika berikut. Tentukan kebenaran dari masing-masing pernyataan (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Kalimat matematika "25 + 25 = 100 - 50" adalah kalimat yang bernilai benar.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kalimat matematika "4 × 5 = 10 + 12" adalah kalimat yang bernilai benar.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kalimat matematika "80 - 30 = 25 × 2" adalah kalimat yang bernilai benar.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Ruas kiri = 50, ruas kanan = 50. Keduanya bernilai sama (BENAR).\n2. Ruas kiri = 20, ruas kanan = 22. 20 ≠ 22 sehingga bernilai salah (SALAH).\n3. Ruas kiri = 50, ruas kanan = 50. Keduanya bernilai sama (BENAR).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Masalah Pembagian Buah Jeruk',
    difficulty: 'Mudah',
    text: 'Ibu membeli 30 buah jeruk dan akan membagikannya ke dalam beberapa kantong plastik (▢) sehingga masing-masing kantong berisi 5 buah jeruk. Tentukan kebenaran pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Kalimat matematika yang sesuai dengan masalah di atas adalah 30 ÷ ▢ = 5.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Banyak kantong plastik (▢) yang dibutuhkan Ibu adalah 6 buah.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika seluruh jeruk dibagikan rata ke dalam 5 kantong plastik, maka setiap kantong berisi 8 buah jeruk.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 30 jeruk dibagi ke dalam ▢ kantong berisi 5 jeruk: 30 ÷ ▢ = 5 (BENAR).\n2. ▢ = 30 ÷ 5 = 6 kantong plastik (BENAR).\n3. 30 ÷ 5 = 6 buah jeruk per kantong, bukan 8 buah (SALAH).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Operasi Campuran Kalimat Matematika',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat matematika: 60 - 25 + ▢ = 50. Tentukan kebenaran dari pernyataan-pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Hasil perhitungan dari 60 - 25 pada operasi hitung sebelah kiri adalah 35.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kalimat matematika menjadi 35 + ▢ = 50, sehingga nilai ▢ yang tepat adalah 15.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika ▢ diganti dengan angka 25, maka kalimat matematika tersebut bernilai benar.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 60 - 25 = 35 (BENAR).\n2. 35 + ▢ = 50 -> ▢ = 50 - 35 = 15 (BENAR).\n3. Jika ▢ = 25, maka 35 + 25 = 60, bukan 50 (SALAH).',
  },
];
