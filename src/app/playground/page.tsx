import MagneticCursor from "@/components/common/framer-motion/cursor/MagneticCursor";
import MagneticTargetBox from "@/components/common/framer-motion/cursor/MagneticTargetBox";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <MagneticCursor />
      <div className="flex gap-6">
        <div>
          <MagneticTargetBox>About</MagneticTargetBox>
          <MagneticTargetBox>Blog</MagneticTargetBox>
          <MagneticTargetBox>Contact</MagneticTargetBox>
        </div>
        <MagneticTargetBox>Photos</MagneticTargetBox>
      </div>
    </div>
  );
}
