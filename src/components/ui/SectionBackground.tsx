
export const SectionBackground = ({topPosition = 600}: {topPosition?: number}) => {
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
    top: `calc(50.13774104683198% - ${topPosition}px / 2)`,
    width: "923px",
    zIndex: 0,
  };

  return (
    <div style={parentBgStyles} className=" inset-0 ">
      <div style={bgStyles} className="absolute inset-0 "></div>
    </div>
  );
};

export default SectionBackground;
