
export const SectionBackground = ({topPosition = 600, blur = 50, opacity = 0.7, imageUrl}: {topPosition?: number, blur?: number, opacity?: number, imageUrl?: string}) => {
  const bgStyles = {
    flexShrink: 0,
    opacity: opacity,
    backgroundSize: "100% 100%",
    backgroundImage: `url(${imageUrl})`,
    pointerEvents: 'none' as const,
  };
  const parentBgStyles = {
    WebkitFilter: `blur(${blur}px)`,
    filter: `blur(${blur}px)`,
    flex: "none",
    height: "328px",
    left: "calc(50.00000000000002% - 923px / 2)",
    opacity: opacity,
    overflow: "hidden",
    position: "absolute" as const,
    top: `calc(50.13774104683198% - ${topPosition}px / 2)`,
    width: "923px",
    zIndex: 30,
    pointerEvents: 'none' as const,
  };

  return (
    <div style={parentBgStyles} className=" absolute inset-0 ">
      <div style={bgStyles} className="absolute inset-0 "></div>
    </div>
  );
};

export default SectionBackground;
