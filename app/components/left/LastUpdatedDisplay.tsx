import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useTheme } from "@mui/material/styles";
import { motion, useAnimationControls } from "framer-motion";
import { memo, useEffect, useMemo, useState } from "react";

const colors = {
  dark: "#19191C",
  medium: "#1F1F23",
  light: "#242429",
  borderLight: "1px solid rgba(255, 255, 255, 0.1)",
  borderDark: "1px solid rgba(255, 255, 255, 0.05)",
  borderBlack: "1px solid rgba(0, 0, 0, 1)",
};
const lightcolors = {
  dark: "#D3D3C7",
  medium: "#DADACF",
  light: "#ECECE2",
  borderLight: "1px solid rgba(255, 255, 255, 0.1)",
  borderDark: "1px solid rgba(255, 255, 255, 0.05)",
  borderBlack: "1px solid rgba(0, 0, 0, 0.2)",
};

const StaticCard = ({
  position,
  unit,
}: {
  position: "upper" | "lower";
  unit: number | string;
}) => {
  const theme = useTheme();
  if (position === "upper") {
    return (
      <Flex
        pos="relative"
        justifyContent="center"
        w="100%"
        h="50%"
        overflow="hidden"
        alignItems="flex-end"
        borderTopRadius={10}
        borderTop={
          theme.palette.mode == "dark"
            ? colors.borderLight
            : lightcolors.borderLight
        }
        borderLeft={
          theme.palette.mode == "dark"
            ? colors.borderLight
            : lightcolors.borderLight
        }
        borderRight={
          theme.palette.mode == "dark"
            ? colors.borderDark
            : lightcolors.borderDark
        }
        borderBottom={
          theme.palette.mode == "dark"
            ? colors.borderDark
            : lightcolors.borderDark
        }
      >
        <Text className="font-bold" fontSize="6xl" transform="translateY(50%)">
          {unit}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      className="relative justify-center w-[100%] h-[50%] items-start overflow-hidden"
      bgColor={
        theme.palette.mode == "dark" ? colors.medium : lightcolors.medium
      }
    >
      <Text className="font-bold" fontSize="6xl" transform="translateY(-50%)">
        {unit}
      </Text>
    </Flex>
  );
};

const MotionFlex = motion(Flex);

const AnimatedCard = memo(
  ({
    current,
    previous,
  }: {
    current: number | string;
    previous: number | string;
  }) => {
    const [displayUnit, setDisplayUnit] = useState(previous);
    const controls = useAnimationControls();

    useEffect(() => {
      controls.start({
        rotateX: [0, -180],
        transition: { duration: 0.5, ease: "easeInOut" },
      });
      setDisplayUnit(previous);
    }, [previous]);

    const theme = useTheme();

    return (
      <MotionFlex
        className="rounded-t-[10px] items-end w-[100%] h-[50%] overflow-hidden top-0 left-0 absolute justify-center"
        animate={controls}
        sx={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
        transformOrigin="50% 100%"
        transform="rotateX(0deg)"
        bgColor={theme.palette.mode == "dark" ? colors.dark : lightcolors.dark}
        borderBottom={
          theme.palette.mode == "dark"
            ? colors.borderBlack
            : lightcolors.borderBlack
        }
        borderRight={
          theme.palette.mode == "dark"
            ? colors.borderDark
            : lightcolors.borderDark
        }
        borderLeft={
          theme.palette.mode == "dark"
            ? colors.borderLight
            : lightcolors.borderLight
        }
        borderTop={
          theme.palette.mode == "dark"
            ? colors.borderLight
            : lightcolors.borderLight
        }
        onAnimationComplete={() => {
          setDisplayUnit(current);
          controls.set({ rotateX: 0 });
        }}
      >
        <Text className="font-bold" fontSize="6xl" transform="translateY(50%)">
          {displayUnit}
        </Text>
      </MotionFlex>
    );
  }
);

AnimatedCard.displayName = "Animated Card";

const AnimatedCardBottom = ({ unit }: { unit: number | string }) => {
  const [displayUnit, setDisplayUnit] = useState(unit);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      rotateX: [180, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    });
    setDisplayUnit(unit);
  }, [unit]);

  const theme = useTheme();

  return (
    <MotionFlex
      className="rounded-b-[10px] items-start absolute justify-center left-0 overflow-hidden w-[100%] h-[50%] top-[50%]"
      animate={controls}
      sx={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
      transformOrigin="50% 0%"
      transform="rotateX(180deg)"
      bgColor={
        theme.palette.mode == "dark" ? colors.medium : lightcolors.medium
      }
      borderTop={
        theme.palette.mode == "dark"
          ? colors.borderBlack
          : lightcolors.borderBlack
      }
      borderLeft={
        theme.palette.mode == "dark"
          ? colors.borderLight
          : lightcolors.borderLight
      }
      borderRight={
        theme.palette.mode == "dark"
          ? colors.borderDark
          : lightcolors.borderDark
      }
      borderBottom={
        theme.palette.mode == "dark"
          ? colors.borderDark
          : lightcolors.borderDark
      }
    >
      <Text className="font-bold" fontSize="6xl" transform="translateY(-50%)">
        {displayUnit}
      </Text>
    </MotionFlex>
  );
};

const FlipContainer = ({
  number,
  title,
}: {
  number: number;
  title: string;
}) => {
  const { current, previous } = useMemo(() => {
    const currentDigit = number;
    const previousDigit = number + 1;

    const current = currentDigit;
    const previous = previousDigit;

    return { current, previous };
  }, [number]);

  const theme = useTheme();

  return (
    <Box
      className={`${title == "year" ? "w-[40%]" : "w-[30%]"}`}
      borderBottomRadius={6}
    >
      <Box
        className={`overflow-hidden block relative rounded-[10px] h-[50px] w-[100%]`}
        bgColor={theme.palette.mode == "dark" ? colors.dark : lightcolors.dark}
        sx={{ perspective: "300px", perspectiveOrigin: "50% 50%" }}
      >
        <StaticCard position="upper" unit={current} />
        <StaticCard position="lower" unit={previous} />
        <AnimatedCard current={current} previous={previous} />
        <AnimatedCardBottom unit={current} />
      </Box>
      <Center
        py={2}
        bgColor={
          theme.palette.mode == "dark" ? colors.light : lightcolors.light
        }
        className="rounded-[5px]"
        borderLeft={
          theme.palette.mode == "dark"
            ? colors.borderLight
            : lightcolors.borderLight
        }
        borderRight={
          theme.palette.mode == "dark"
            ? colors.borderDark
            : lightcolors.borderDark
        }
        borderBottom={
          theme.palette.mode == "dark"
            ? colors.borderDark
            : lightcolors.borderDark
        }
      >
        <Text
          className="opacity-[0.5] font-light text-[0.5rem]"
          textTransform="uppercase"
        >
          {title}
        </Text>
      </Center>
    </Box>
  );
};

export const LastUpdatedDisplay = ({
  days,
  months,
  years,
}: {
  days: number;
  months: number;
  years: number;
}) => {
  return (
    <div className="mb-[2vh] h-[100%] w-[15vw] flex flex-col justify-end items-start">
      <span className="ml-[0.5vw] mb-[0.5rem] opacity-[0.5] text-[0.6rem] font-light">
        LAST UPDATED:
      </span>
      <div className="w-[100%] gap-x-[5px] flex flex-row justify-center items-center">
        <FlipContainer number={months} title="month" />
        <FlipContainer number={days} title="day" />
        <FlipContainer number={years} title="year" />
      </div>
    </div>
  );
};
