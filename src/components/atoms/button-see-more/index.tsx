import { appearsBottom } from "@/src/animation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
      <Button
        variant="galaxy"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "See Less" : "See More"}
      </Button>
    </motion.div>
  );
};
