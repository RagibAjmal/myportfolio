import styles from "./loading.module.css";
import { animated, useSpring } from "react-spring";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.

  const springs = useSpring({
    from: {
      height: "100vh",
      width: "100vw",
    },
    to: { height: "0vh", width: "0vw" },
    delay: 2800,
  });
  const springsSvg = useSpring({
    from: {
      opacity: 1,
    },
    to: { opacity: 0 },
    delay: 2400,
  });

  return (
    <animated.div className={styles.main} style={{ ...springs }}>
      <animated.svg
        style={{ ...springsSvg }}
        className={styles.pl2}
        viewBox="0 0 128 128"
        width="128px"
        height="128px"
      >
        <defs>
          <linearGradient id="pl-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#000" />
            <stop offset="100%" stop-color="#fff" />
          </linearGradient>
          <mask id="pl-mask">
            <rect x="0" y="0" width="128" height="128" fill="url(#pl-grad)" />
          </mask>
        </defs>
        <g fill="#37ff8b">
          <g className={styles.pl2__rectg}>
            <rect
              className={styles.pl2__rect}
              rx="8"
              ry="8"
              x="0"
              y="128"
              width="40"
              height="24"
              transform="rotate(180)"
            />
          </g>
          <g className={styles.pl2__rectg}>
            <rect
              className={styles.pl2__rect}
              rx="8"
              ry="8"
              x="44"
              y="128"
              width="40"
              height="24"
              transform="rotate(180)"
            />
          </g>
          <g className={styles.pl2__rectg}>
            <rect
              className={styles.pl2__rect}
              rx="8"
              ry="8"
              x="88"
              y="128"
              width="40"
              height="24"
              transform="rotate(180)"
            />
          </g>
        </g>
        {/*  <g fill="#37ff8b" mask="url(#pl-mask)">
          <g className={styles.pl2__rectg}>
            <rect
              className={styles.pl2__rect}
              rx="8"
              ry="8"
              x="0"
              y="128"
              width="40"
              height="24"
              transform="rotate(180)"
            />
          </g>
          <g className={styles.pl2__rectg}>
            <rect
              className={styles.pl2__rect}
              rx="8"
              ry="8"
              x="44"
              y="128"
              width="40"
              height="24"
              transform="rotate(180)"
            />
          </g>
          <g className={styles.pl2__rectg}>
            <rect
              className={styles.pl2__rect}
              rx="8"
              ry="8"
              x="88"
              y="128"
              width="40"
              height="24"
              transform="rotate(180)"
            />
          </g>
        </g> */}
      </animated.svg>
    </animated.div>
  );
}
