import MagneticCursor from "@/components/common/framer-motion/cursor/MagneticCursor";
import MagneticTargetBox from "@/components/common/framer-motion/cursor/MagneticTargetBox";

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <MagneticCursor />
      <div style={{ display: "flex", gap: 24 }}>
        <div>
          <MagneticTargetBox>About</MagneticTargetBox>
          <MagneticTargetBox>Blog</MagneticTargetBox>
          <MagneticTargetBox>Contact</MagneticTargetBox>
        </div>
        <MagneticTargetBox>Photos</MagneticTargetBox>
      </div>
      {/* <MorphingText texts={["Hello", "Cursor", "World!"]} color="orange" /> */}
    </div>
  );
}
