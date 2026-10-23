
import { sql } from "@/lib/db";

export default async function AdminPage() {
  const [mesajSonucu, hizmetSonucu] = await Promise.all([
    sql`
      SELECT COUNT(*)::int AS sayi
      FROM iletisim_mesajlari
      WHERE okundu = false
    `,
    sql`
      SELECT COUNT(*)::int AS sayi
      FROM hizmetler
    `,
  ]);

  const okunmamisMesaj = Number(mesajSonucu[0].sayi);
  const toplamHizmet = Number(hizmetSonucu[0].sayi);

  return (
    <main style={{ padding: "32px", fontFamily: "Arial, sans-serif" }}>
      <h1>Yönetim Paneli</h1>
      <p>İçerik ve iletişim kayıtlarınızı buradan yönetebilirsiniz.</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "28px",
        }}
      >
        <section
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "24px",
            minWidth: "220px",
          }}
        >
          <h2>Okunmamış Mesajlar</h2>
          <p style={{ fontSize: "32px", fontWeight: "bold" }}>
            {okunmamisMesaj}
          </p>
          <a href="/admin/mesajlar">Mesajları görüntüle</a>
        </section>

        <section
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "24px",
            minWidth: "220px",
          }}
        >
          <h2>Toplam Hizmetler</h2>
          <p style={{ fontSize: "32px", fontWeight: "bold" }}>
            {toplamHizmet}
          </p>
          <a href="/admin/hizmetler">Hizmetleri yönet</a>
        </section>
      </div>
    </main>
  );
}
