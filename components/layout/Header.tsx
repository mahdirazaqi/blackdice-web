import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary flex justify-between py-2 px-5 text-white">
      <div>پشتیبانی: ۰۹۳۰۸۰۷۷۸۷۲</div>

      <div>
        <Link href={"/auth"}>حساب من</Link>
      </div>
    </header>
  );
}
