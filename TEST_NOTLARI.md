# TEST_NOTLARI

**Test ortamı:** Chromium tarayıcı, `etkinlikler.html`.
**Etkinlikler (5):** Satranç Turnuvası, Masa Oyunları Gecesi, Retro Oyun Günü, Oyun Tasarımı Atölyesi, Takım Oyunları Şampiyonası.

| # | Girdi/işlem | Beklenen sonuç | Gerçekleşen sonuç | Geçti/Kaldı |
|---:|---|---|---|---|
| 1 | Başlığın tamamını veya bir bölümünü arama: `satranç`, sonra `oyun` | Yalnızca eşleşen kartlar görünür, sayaç doğru sayıyı gösterir. | `satranç` yazınca yalnızca Satranç Turnuvası göründü, sayaç "1 etkinlik gösteriliyor." dedi. `oyun` yazınca 4 kart göründü (Masa Oyunları Gecesi, Retro Oyun Günü, Oyun Tasarımı Atölyesi, Takım Oyunları Şampiyonası), sayaç "4 etkinlik gösteriliyor." dedi. | Geçti |
| 2 | Aynı kelimeyi büyük ve küçük harfle arama: `oyun` ve `OYUN` | Her iki girişte aynı kartlar görünür. | İki girişte de aynı 4 kart göründü. Ayrıca `  Satranç  ` (başta ve sonda boşluk) yazınca yalnızca Satranç Turnuvası göründü. | Geçti |
| 3 | Hiçbir başlıkta bulunmayan bir ifade yazma: `zzzxyz` | Sayaç 0 olur, sonuç bulunamadı mesajı görünür. | Sayaç "0 etkinlik gösteriliyor." dedi, "Aramanıza uygun etkinlik bulunamadı." mesajı göründü, hiç kart görünmedi. | Geçti |
| 4 | Yalnızca boşluk yazma / **Temizle**'ye basma | Her iki işlemde de tüm etkinlikler görünür. | Yalnızca boşluk yazınca 5 kart göründü, sayaç "5 etkinlik gösteriliyor." dedi. `oyun` yazıp Temizle'ye basınca kutu boşaldı ve yine 5 kart göründü. | Geçti |
| 5 | Üç sayfanın menü bağlantılarını açma | Tüm bağlantılar doğru sayfalara gider. | Üç sayfanın her birinden Ana Sayfa, Etkinlikler ve Hakkımızda bağlantılarına tıkladım (9 tıklama). Hepsi doğru sayfayı açtı. | Geçti |
| 6 | 390 px genişlikte ve Tab tuşuyla kontrol | Yatay taşma olmaz, arama alanına ve düğmeye ulaşılır. | Üç sayfada da yatay kaydırma çıkmadı. Tab sırası: Ana Sayfa, Etkinlikler, Hakkımızda, arama kutusu, Temizle düğmesi. Odak görünür. | Geçti |
