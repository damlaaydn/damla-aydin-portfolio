
import { sql } from "@/lib/db";

export default async function MesajlarPage() {
  const mesajlar = await sql`
    SELECT
      id,
      ad_soyad,
      eposta,
      mesaj,
      okundu,
      gonderim_zamani
    FROM iletisim_mesajlari
    ORDER BY gonderim_zamani DESC
  `;

  return (
    <main style={{ padding: "32px", fontFamily: "Arial, sans-serif" }}>
      <h1>İletişim Mesajları</h1>
      <p>Toplam mesaj: {mesajlar.length}</p>

      {mesajlar.length === 0 ? (
        <p>Henüz mesaj bulunmuyor.</p>
      ) : (
        <div style={{ display: "grid", gap: "16px", marginTop: "24px" }}>
          {mesajlar.map((mesaj) => (
            <article
              key={mesaj.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <p>
                <strong>Gönderen:</strong> {mesaj.ad_soyad}
              </p>

              <p>
                <strong>E-posta:</strong> {mesaj.eposta}
              </p>

              <p>
                <strong>Tarih:</strong>{" "}
                {new Date(mesaj.gonderim_zamani).toLocaleString("tr-TR")}
              </p>

              <p>
                <strong>Durum:</strong>{" "}
                {mesaj.okundu ? "Okundu" : "Okunmadı"}
              </p>

              <div style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>
                <strong>Mesaj:</strong>
                <p>{mesaj.mesaj}</p>
              </div>
            </article>
          ))}
        </div>
      )}

      <p style={{ marginTop: "24px" }}>
        <a href="/admin">Yönetim paneline dön</a>
      </p>
    </main>
  );
}
