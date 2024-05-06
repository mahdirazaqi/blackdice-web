import Link from "next/link";
import Image from "next/image";
import CartIcon from "../icon/CartIcon";
import SearchIcon from "../icon/SearchIcon";
import UserIcon from "../icon/UserIcon";

export default function Header() {
  const navItems: { title: string; link: string }[] = [
    {
      title: "صفحه اصلی",
      link: "/",
    },
    {
      title: "همه محصولات",
      link: "#",
    },
    {
      title: "دسته بندی",
      link: "#",
    },
    {
      title: "درباره ما",
      link: "#",
    },
  ];

  return (
    <>
      <div className="bg-primary flex justify-between py-2 px-5 text-white">
        <div>پشتیبانی: ۰۹۳۰۸۰۷۷۸۷۲</div>

        <div>
          <Link href={"/auth"} className="flex gap-1 items-center">
            <UserIcon />
            <span>حساب من</span>
          </Link>
        </div>
      </div>

      <header className="bg-white sticky top-0 border-b border-zinc-100 shadow-sm">
        <div className="container mx-auto flex justify-between">
          <nav className="flex items-center">
            <Link href={"/"} className="p-3">
              <Image
                src={"/logo.png"}
                alt="بلک دایس"
                width={100}
                height={100}
              />
            </Link>

            {navItems.map((navItem, index) => (
              <Link
                key={index}
                href={navItem.link}
                className="p-3 hover:text-primary"
              >
                {navItem.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <Link href={"/cart"} className="p-3 hover:text-primary">
              <CartIcon />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
