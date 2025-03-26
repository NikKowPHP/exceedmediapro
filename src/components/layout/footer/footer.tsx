import Image from "next/image";
import Link from "next/link";
import { footerConfig } from "@/config/footer";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import IconContainer from "@/components/ui/icon-section-container";
import { SectionBackground } from "@/components/ui/section-background";

const svgIcon = ({
  width = 35,
  height = 35,
  icon,
}: {
  width: number;
  height: number;
  icon: string;
}) => (
  <div className=" w-[35px] h-[35px] flex items-center justify-center">
    <Image
      src={icon}
      alt="Threads"
      className="object-contain "
      width={width}
      height={height}
    />
  </div>
);
const xIcon = svgIcon({ icon: "/X.svg", width: 20, height: 20 });
const threadsIcon = svgIcon({ icon: "/threads.svg", width: 20, height: 20 });

export function Footer() {
  const socialIcons = {
    X: xIcon,
    Instagram: Instagram,
    LinkedIn: Linkedin,
    Facebook: Facebook,
    Threads: threadsIcon,
  };

  return (
    <>
      <footer
        className=" w-full py-12 md:py-[80px] border-t-2 border-white/10 text-white text-base md:text-[16px] overflow-hidden relative"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <SectionBackground  topPosition={300} imageUrl="/bg-footer.svg" />
        <div className="max-w-7xl mx-auto px-[40px] md:px-0">
          <div className="flex flex-col justify-start md:flex-row md:flex-wrap gap-[30px] sm:gap-[30px]  md:gap-[100px]  w-full ">

      
            {/* first row */}
            <div className="flex flex-col  gap-[10px]  ">
              <div className=" relative">
                <Link
                  href="/"
                  className="relative  w-full h-full flex items-center gap-[10px]"
                  title="Exceed Media Pro"
                  aria-label="Exceed Media Pro Homepage"
                >
                  <Image
                    src="/logo.png"
                    alt="Exceed Media Pro Logo"
                    width={38}
                    height={38}
                    className="object-contain"
                  />
                  <span className="text-[28px] text-white">
                    Exceed Media Pro
                  </span>
                </Link>
              </div>

              <div className="text-subtitle">
                Your Reliable Partner for Marketing Success
              </div>
            </div>

            {/* social row*/}
            <div className="flex md:flex-1 justify-between md:justify-end md:gap-[200px] gap-[20px]">
              {/* first column */}
              <div className="flex gap-[10px]">
                {footerConfig.socialLinks.map((link) => (
                  <div className="flex items-center justify-center">

                  <Link
                    href={link.href}
                    key={link.title}
                    className="text-subtitle"
                  >
                    <IconContainer
                      icon={socialIcons[link.icon]}
                      wrapperSize={35}
                      iconSize={20}
                    />
                  </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* third row */}
            <div className="flex w-full  gap-[10px]">
              <div className="flex flex-col gap-[10px] flex-1 ">
                <h5>Sections</h5>
                {footerConfig.aboutLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.title}
                    className="text-subtitle text-sm"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-[10px] flex-1">
                <h5 className="">Pages</h5>
                {footerConfig.pageLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.title}
                    className="text-subtitle text-sm"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
