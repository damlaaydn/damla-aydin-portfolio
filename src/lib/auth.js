import { sql } from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  // Tarayıcıda oturum çerezi yoksa giriş sayfasına gönder.
  if (!token) {
    redirect("/giris");
  }

  // Token veritabanında bulunmalı ve oturum süresi dolmamış olmalı.
  const oturumlar = await sql`
    SELECT yonetici_id
    FROM oturumlar
    WHERE token = ${token}
      AND bitis > NOW()
    LIMIT 1
  `;

  if (oturumlar.length === 0) {
    redirect("/giris");
  }

  return oturumlar[0];
}
