import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(request) {
  try {
    const data = await request.json();

    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const subject = String(data.subject ?? "").trim();
    const message = String(data.message ?? "").trim();
    const kvkk = data.kvkk === true;

    // Gelen bilgileri kontrol et
    if (
      !name ||
      !email ||
      !subject ||
      !message ||
      !kvkk ||
      name.length > 150 ||
      email.length > 254 ||
      subject.length > 200 ||
      message.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        {
          error: "Lütfen bilgileri kontrol edip tekrar deneyin.",
        },
        { status: 400 }
      );
    }

    // Konuyu mesajın başına ekle
    const fullMessage = `Konu: ${subject}\n\n${message}`;

    // Mesajı Neon PostgreSQL veritabanına kaydet
    await sql`
      INSERT INTO iletisim_mesajlari
        (ad_soyad, eposta, mesaj, kvkk_onay, okundu)
      VALUES
        (${name}, ${email}, ${fullMessage}, ${kvkk}, false)
    `;

    // Başarılı yanıt döndür
    return NextResponse.json(
      { success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("İletişim formu hatası:", error);

    return NextResponse.json(
      {
        error: "Mesaj şu anda kaydedilemedi. Lütfen tekrar deneyin.",
      },
      { status: 500 }
    );
  }
}
