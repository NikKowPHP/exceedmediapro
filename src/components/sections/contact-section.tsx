import { MapPin, Mail, Phone } from "lucide-react";
import { Form } from "../form";
import { IconBadge } from "../ui/icon-badge";

export const ContactSection = () => {
  const bgStyles = {
    flexShrink: 0,
    opacity: 0.5,
    backgroundSize: "100% 100%",
    backgroundImage: "url('/bg-form.svg')",
  };
  const parentBgStyles = {
    WebkitFilter: "blur(50px)",
    filter: "blur(50px)",
    flex: "none",
    height: "328px",
    left: "calc(50.00000000000002% - 923px / 2)",
    opacity: 0.7,
    overflow: "hidden",
    position: "absolute" as const,
    top: "calc(50.13774104683198% - 600px / 2)",
    width: "923px",
    zIndex: 0,
  };

  return (
    <section
      id="cta-section"
      className="pt-[40px] md:pt-[80px] pb-[120px] px-[20px] md:px-0  flex flex-col justify-center items-center"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-[20px]">
          <div className="flex flex-col items-center gap-[16px] md:w-full">
            <ContactSectionTitleSubtitle />

            <div className="flex flex-col   justify-center items-center gap-[24px] pb-[32px]">
              <div className="flex items-center gap-[10px] text-[18px] text-subtitle">
                <Mail className="w-[20px] h-[20px] text-subtitle" />
                <span>example@gmail.com</span>
              </div>
              <div className="flex items-center gap-[10px] text-[18px] text-subtitle">
                <Phone className="w-[20px] h-[20px] text-subtitle" />

                <span>+44 123 456 7890</span>
              </div>
              <div className="flex items-center gap-[10px] text-[18px] text-subtitle">
                <MapPin className="w-[20px] h-[20px] text-subtitle" />
                <span>100 Zakopane</span>
              </div>
            </div>
          </div>
          <div className="w-full relative"></div>
          <div className="w-full relative">
            <div style={parentBgStyles} className=" inset-0 ">
              <div style={bgStyles} className="absolute inset-0 "></div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSectionTitleSubtitle = () => {
  return (
    <header className="mb-[35px] gap-[25px]  flex flex-col flex-center items-center">
      <div className="flex flex-center items-center">
        <IconBadge
          text="Contact us"
          textColor="text-subtitle"
          className="text-[14px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-[10px]">
        <h2
          id="process-title"
          className="text-[28px] md:text-[44px] font-[500] text-center"
          itemProp="name"
        >
          Apply Now!
        </h2>
        <p className=" text-subtitle text-center">
          Get a <span className="font-bold text-blue-700">FREE audit</span> and{" "}
          <span className="text-blue-700">Google Analytics</span> setup today!
        </p>
      </div>
    </header>
  );
};
