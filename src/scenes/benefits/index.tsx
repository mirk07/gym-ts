import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { BenefitType } from "@/shared/types";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, molestias? Officiis eum, inventore incidunt molestias sequi nobis, libero laboriosam illum reprehenderit fugiat voluptates perferendis odio sint obcaecati esse quia soluta?",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverce",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, molestias? Officiis eum, inventore incidunt molestias sequi nobis, libero laboriosam illum reprehenderit fugiat voluptates perferendis odio sint obcaecati esse quia soluta?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, molestias? Officiis eum, inventore incidunt molestias sequi nobis, libero laboriosam illum reprehenderit fugiat voluptates perferendis odio sint obcaecati esse quia soluta?",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Header */}
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum
            quis dolore. Quasi praesentium itaque omnis iure consequatur
            possimus minus accusamus illum sapiente autem, consectetur quaerat
            maiores blanditiis fugiat laboriosam!
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              title={benefit.title}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28  md:flex">
          {/* Img */}
          <img src={BenefitsPageGraphic} alt="benefits" className="mx-auto" />

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"></div>
              <motion.div
                className=""
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMEBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>
            {/* Description */}
            <motion.div
              className="my-5"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                veniam fugit repellendus inventore sed nemo reprehenderit
                voluptas excepturi nam, iusto quos quod eius mollitia
                consequuntur accusantium est. Excepturi, eaque explicabo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente eaque modi similique eius eligendi debitis natus ullam
                corrupti numquam animi ut itaque porro esse, nobis est
                laboriosam minima rerum dicta.
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-16">
              <div className="before: z=[1] before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
