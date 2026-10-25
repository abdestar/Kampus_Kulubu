# AI Notları

**Kullanılan araç:** GitHub Copilot (Codespaces).

## 1. Kullandığım prompt'lar

| Prompt özeti | Amacı |
|---|---|
| Projeyi incele, değiştirme. | Projeyi değiştirmeden önce anlamak |
| Üç sayfayı Oyun Kulübü konusuna uyarla. | İçeriği kendi konuma uyarlamak |
| etkinlikler.html'e 5 özgün etkinlik ekle. | Beş özgün etkinlik oluşturmak |
| Arama özelliğinin planını ve test yöntemini açıkla. | Aramanın nasıl çalıştığını ve nasıl test edileceğini anlamak |
| Input event listener'ı açıkla. | Event listener'ı öğrenmek |
| `title.includes(searchText)` ve `card.hidden = !matches` satırlarını açıkla. | Filtreleme koşulunu öğrenmek |
| style.css'i 390 px için incele. | Mobil görünüm için code review yapmak |

## 2. Değerlendirdiğim AI önerisi

Copilot, 390 px genişlikte yatay taşma olmadığını, ancak çok dar ekranlarda veya büyük yazı ayarında input ile Temizle düğmesinin sıkışabileceğini söyledi. Bu öneriyi **kabul ettim** ve 480 px altında düğmeyi input'un altına alan bir media query ekledim. Sebebi, telefonda hem arama kutusunun hem de düğmenin rahat kullanılması ve masaüstü görünümün bozulmamasıdır.

## 3. Event listener açıklaması

`searchInput.addEventListener('input', updateEventResults);` satırı, arama kutusunu sürekli dinler. Kullanıcı kutuya her harf yazdığında veya sildiğinde tarayıcı `updateEventResults` fonksiyonunu çalıştırır. Bu yüzden kullanıcı ayrıca bir "Ara" düğmesine basmak zorunda kalmaz; kartlar yazdıkça güncellenir. Temizle düğmesinde de aynı mantık vardır: düğmeye tıklanınca (`click`) kutu boşaltılır ve fonksiyon yeniden çalıştırılır, böylece tüm etkinlikler görünür.

## 4. Filtreleme koşulu açıklaması

`const matches = title.includes(searchText);` satırı, kartın başlığında kullanıcının yazdığı metnin geçip geçmediğine bakar ve sonucu `true` veya `false` olarak saklar. `card.hidden = !matches;` satırı ise eşleşmeyen kartı gizler, eşleşen kartı gösterir. Başlık ve aranan metin karşılaştırılmadan önce `toLocaleLowerCase('tr-TR')` ile küçük harfe çevrilir; böylece "OYUN" ve "oyun" aynı sonucu verir ve Türkçe harfler (İ, ı) doğru işlenir. `trim()` ise baştaki ve sondaki boşlukları siler. Kullanıcı sadece boşluk yazarsa arama metni boş kalır ve tüm kartlar görünür.