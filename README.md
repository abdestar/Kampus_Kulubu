# Oyun Kulübü — Üç Sayfalık Statik Web Sitesi

## Öğrenci Bilgileri

- **Öğrenci:** Abdessatar Chabbani
- **Öğrenci No:** 24675221077
- **Ders:** BPR201 - İnternet Tabanlı Programlama
- **Ödev:** Haftalık Proje Ödevi 1

## GitHub Repository

https://github.com/abdestar/Kampus_Kulubu

## Projenin Amacı

Bu proje, Oyun Kulübü için hazırlanmış üç sayfalık statik bir web sitesidir. Projede backend, database, API veya kullanıcı girişi bulunmaz. Sitedeki etkinlikler kurgusaldır ve eğitim amacıyla hazırlanmıştır.

## Sayfalar

- [index.html](./index.html): Ana Sayfa
- [etkinlikler.html](./etkinlikler.html): Beş etkinlik ve başlığa göre arama
- [hakkimizda.html](./hakkimizda.html): Hakkımızda

## Dosyalar

- [style.css](./style.css): Ortak görünüm, renkler, sayfa düzeni ve mobil uyumluluk
- [script.js](./script.js): Etkinlik başlığına göre arama özelliği
- [AI_NOTLARI.md](./AI_NOTLARI.md): Yapay zekâ desteğiyle ilgili notlar
- [TEST_NOTLARI.md](./TEST_NOTLARI.md): Yapılan testlerle ilgili notlar
- [ekran_goruntuleri](./ekran_goruntuleri/): Ekran görüntüleri

## Çalıştırma

### Codespaces terminalinde

Repository kök dizininde terminali açıp şu komutu çalıştırın:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Ardından:

1. **Ports** panelinden `8000` portunu bulun.
2. Port için **Open in Browser** seçeneğine tıklayın.
3. Açılan sayfadan Ana Sayfa, Etkinlikler ve Hakkımızda bağlantılarını kullanın.

### Doğrudan açma

`index.html` dosyasına çift tıklayarak da siteyi açabilirsiniz.

## Arama Özelliği

Etkinlikler sayfasındaki arama alanı:

- Kullanıcı yazdıkça etkinlik kartlarını filtreler.
- Büyük/küçük harf farkını etkisiz hâle getirir.
- Arama metninin başındaki ve sonundaki boşlukları etkisiz hâle getirir.
- Kaç etkinliğin gösterildiğini sonuç sayacıyla bildirir.
- Hiç eşleşme yoksa sonuç yok mesajı gösterir.
- **Temizle** düğmesiyle arama alanını boşaltır ve tüm etkinlikleri yeniden gösterir.

> Bu sitedeki etkinlikler kurgusaldır ve eğitim amaçlıdır.