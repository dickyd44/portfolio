import { appearsBottom } from "@/src/animation";
import { motion } from "framer-motion";

interface ButtonSeeMoreProps {
  showMore: boolean;
  setShowMore: (value: boolean) => void;
}

export const ButtonSeeMore = ({
  showMore,
  setShowMore,
}: ButtonSeeMoreProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={appearsBottom}
      viewport={{ amount: 0, once: true }}
      className="mt-16 text-center"
    >
      <button
        className="px-5 py-2 bg-galaxy_core text-white rounded-sm hover:bg-galaxy_dark transition-all"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "See Less" : "See More"}
      </button>
    </motion.div>
  );
};
