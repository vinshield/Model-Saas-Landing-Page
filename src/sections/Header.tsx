import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-center gap-3 bg-black py-3">
        <p className="hidden text-white/60 md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex items-center gap-1 text-sm text-white">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas logo" height={40} width={40} />
            <MenuIcon className="h-4 w-4 md:hidden" />
            <nav className="hidden items-center gap-5 text-black/60 md:flex">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="rounded-lg bg-black px-4 py-2 font-medium tracking-tight text-white">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
