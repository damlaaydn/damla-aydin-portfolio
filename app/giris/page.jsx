import { sql } from "@/lib/db";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function GirisSayfasi({ searchParams }) {
  const params = await searchParams;
  const hata = params?.hata;

  async function girisYap(formData) {
    "use server";

    const eposta = String(formData.get("eposta") ?? "").trim();
    const sifre = String(formData.get("sifre") ?? "");

    if (!eposta || !sifre) {
      redirect("/giris?hata=1");
    }

    const kayitlar = await sql`
      SELECT id, eposta, sifre_hash
      FROM yoneticiler
      WHERE eposta = ${eposta}
      LIMIT 1
    `;

    const yonetici = kayitlar[0];

    if (!yonetici) {
      redirect("/giris?hata=1");
    }

    const sifreDogru = await bcrypt.compare(
      sifre,
      yonetici.sifre_hash
    );

    if (!sifreDogru) {
      redirect("/giris?hata=1");
    }

    const token = crypto.randomBytes(32).toString("hex");
    const bitisZamani = new Date(Date.now() + 2 * 60 * 60 * 1000);

    await sql`
      INSERT INTO oturumlar (token, yonetici_id, bitis)
      VALUES (
        ${token},
        ${yonetici.id},
        ${bitisZamani.toISOString()}
      )
    `;

    const cookieStore = await cookies();

    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: bitisZamani,
      path: "/",
    });

    redirect("/admin");
  }

  return (
    <main
      style={{
        maxWidth: "400px",
        margin: "80px auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Yönetici Girişi</h1>
      <p>Yönetim paneline erişmek için giriş yapın.</p>

      {hata && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          E-posta veya şifre hatalı.
        </p>
      )}

      <form
        action={girisYap}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <input
          type="email"
          name="eposta"
          placeholder="E-posta adresiniz"
          required
          autoComplete="username"
          style={{
            padding: "12px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          name="sifre"
          placeholder="Şifreniz"
          required
          autoComplete="current-password"
          style={{
            padding: "12px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Giriş Yap
        </button>
      </form>
    </main>
  );
}
