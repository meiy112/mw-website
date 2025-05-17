import { motion } from "framer-motion";
import { Link, X } from "lucide-react";
import Image from "next/image";

const ImageModal = ({
  image,
  url,
  anchor,
  closeModal,
}: {
  image: string;
  url?: string;
  anchor?: string;
  closeModal: () => void;
}) => {
  return (
    <div className="fixed z-40 flex justify-center items-center inset-0">
      <div className="w-[60%]">
        <div className="relative flex flex-col gap-y-[1em] items-end">
          <motion.div
            className="p-[0.5em] glass-container-2 rounded-[18px]"
            layoutId={`image-modal-${image}`}
          >
            <div
              className={`absolute opacity-[0.4] right-[1em] top-[1em] bg-black rounded-[50%] cursor-pointer p-[0.2em]`}
              onClick={closeModal}
            >
              <X size={20} />
            </div>
            <div className="relative w-full h-full">
              <Image
                className="rounded-[12px]"
                src={image}
                alt={image}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>
          {url ? (
            <motion.div
              layoutId={`image-modal-link-${url}`}
              className="flex flex-row gap-x-[0.5vw]"
            >
              <Link size={24} className="opacity-[0.5]" />
              <a
                href={url}
                className="text-[1rem] --text-gradient-pink font-light"
              >
                {anchor}
              </a>
            </motion.div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
