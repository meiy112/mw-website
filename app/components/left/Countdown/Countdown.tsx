import { Box, Center, Flex, HStack, Text } from "@chakra-ui/react";
import { motion, useAnimationControls } from "framer-motion";
import { memo, useEffect, useMemo, useState } from "react";
import ReactCountdown from "react-countdown";
import type { CountdownProps, CountdownRendererFn } from "react-countdown";
import s from "./Countdown.module.css";

const StaticCard = ({
  position,
  unit,
}: {
  position: "upper" | "lower";
  unit: number | string;
}) => {
  if (position === "upper") {
    return (
      <Flex
        pos="relative"
        justifyContent="center"
        w="100%"
        h="50%"
        overflow="hidden"
        alignItems="flex-end"
        borderBottom="1px solid #0E1116"
        className={`rounded-t-[10px] ${s.upperCard}`}
      >
        <Text fontSize="0.9rem" transform="translateY(50%)">
          {unit}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      pos="relative"
      justifyContent="center"
      w="100%"
      h="50%"
      overflow="hidden"
      alignItems="flex-start"
      borderTop="1px solid #0E1116"
      className={`rounded-b-[10px] ${s.bottomCard}`}
    >
      <Text fontSize="0.9rem" transform="translateY(-50%)">
        {unit}
      </Text>
    </Flex>
  );
};

const MotionFlex = motion.create(Flex as any);

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
        transition: { duration: 0.6, ease: "easeInOut" },
      });
      setDisplayUnit(previous);
    }, [previous]);

    return (
      <MotionFlex
        id="animated-card"
        animate={controls}
        justifyContent="center"
        pos="absolute"
        left={0}
        w="100%"
        h="50%"
        overflow="hidden"
        sx={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
        top={0}
        alignItems="flex-end"
        transformOrigin="50% 100%"
        transform="rotateX(0deg)"
        borderBottom="1px solid #0E1116"
        onAnimationComplete={() => {
          setDisplayUnit(current);
          controls.set({ rotateX: 0 });
        }}
        className={`rounded-t-[10px] ${s.upperCard}`}
      >
        <Text fontSize="0.9rem" transform="translateY(50%)">
          {displayUnit}
        </Text>
      </MotionFlex>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";

const AnimatedCardBottom = ({ unit }: { unit: number | string }) => {
  const [displayUnit, setDisplayUnit] = useState(unit);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      rotateX: [180, 0],
      transition: { duration: 0.6, ease: "easeInOut" },
    });
    setDisplayUnit(unit);
  }, [unit]);

  return (
    <MotionFlex
      id="animated-card"
      animate={controls}
      justifyContent="center"
      pos="absolute"
      left={0}
      w="100%"
      h="50%"
      overflow="hidden"
      sx={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
      top="50%"
      alignItems="flex-start"
      transformOrigin="50% 0%"
      transform="rotateX(180deg)"
      borderTop="1px solid #0E1116"
      className={`rounded-b-[10px] ${s.bottomCard}`}
    >
      <Text fontSize="0.9rem" transform="translateY(-50%)">
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
  title: "days" | "hours" | "mins" | "secs";
}) => {
  const { current, previous } = useMemo(() => {
    const currentDigit = number;
    const previousDigit = number + 1;

    const current =
      currentDigit < 10
        ? `0${currentDigit}`
        : (title === "secs" || title === "mins") && currentDigit === 60
        ? "00"
        : currentDigit;
    const previous =
      previousDigit < 10
        ? `0${previousDigit}`
        : (title === "secs" || title === "mins") && previousDigit === 60
        ? "00"
        : previousDigit;

    return { current, previous };
  }, [number]);

  return (
    <Box shadow="0px 10px 10px -10px black" borderBottomRadius={6}>
      <Box
        display="block"
        pos="relative"
        w="4vw"
        h="3em"
        sx={{ perspective: "300px", perspectiveOrigin: "50% 50%" }}
        className={`rounded-[10px]`}
      >
        <StaticCard position="upper" unit={current} />
        <StaticCard position="lower" unit={previous} />
        <AnimatedCard current={current} previous={previous} />
        <AnimatedCardBottom unit={current} />
      </Box>
      <Center className={`rounded-[5px] ${s.titleCard}`} py={2}>
        <Text className="black-gradient-text0" fontSize="0.7rem" color="white">
          {title}
        </Text>
      </Center>
    </Box>
  );
};

const renderer: CountdownRendererFn = ({
  hours,
  minutes,
  seconds,
  completed,
  days,
}) => {
  if (completed) return null;
  return (
    <div className="flex flex-col gap-y-[0.3em]">
      <span className="ml-[0.5em] text-[0.8rem] opacity-[0.5]">
        Co-op ends in:
      </span>
      <HStack align="center" spacing={1}>
        <FlipContainer number={days} title="days" />
        <FlipContainer number={hours} title="hours" />
        <FlipContainer number={minutes} title="mins" />
        <FlipContainer number={seconds} title="secs" />
      </HStack>
    </div>
  );
};

export const Countdown = ({ date }: Pick<CountdownProps, "date">) => {
  return <ReactCountdown date={date} renderer={renderer} />;
};
