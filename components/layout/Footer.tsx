import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 flex justify-between px-3 py-10 text-black">
      <div className="w-full p-3">
        <h3 className="font-bold text-lg mb-4">درباره فروشگاه</h3>
        <p className="text-zinc-500">
          بلک دایس، فروشگاه آنلاین بازی های فکری و بردگیم است که از سال ۱۴۰۱
          شروع به فعالیت کرد.
        </p>
      </div>

      <div className="min-w-fit p-3">
        <h3 className="font-bold text-lg mb-4">اطلاعات فروشگاه</h3>
        <div className="text-zinc-500 flex flex-col gap-3">
          <div>تلفن پشتیبانی: ۰۹۳۰۸۰۷۷۸۷۲</div>
          <div>آدرس فروشگاه: تهران، جنت آباد شمالی</div>
          <Link href={"#"}></Link>
        </div>
      </div>
    </footer>
  );
}
