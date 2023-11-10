import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { animated, useSpring, useSpringRef } from "react-spring";
import { easings } from "react-spring";
import { useEffect, useState, useContext } from "react";
import { ValueContext } from "../values/valuesContext";
import ToggleIcon1, { ToggleIcon2 } from "./toggleIcon";

export default function Navbar({}) {
  const [toggleState, setToggleState] = useState(true);
  const pages = usePathname();
  var { size } = useContext(ValueContext);

  // Controls NavBar Opacity
  const springsdiv = useSpring({
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
    delay: 3000,
    config: {
      duration: 1200,
      easing: easings.easeInOutSine,
    },
  });

  // Controls Navbar Position
  const api = useSpringRef();
  const springs = useSpring({
    ref: api,
    from: { x: 200 },
  });

  const toggleapi2 = useSpringRef();
  const toggle2 = useSpring({
    ref: toggleapi2,
    from: { opacity: 0 },
  });
  const toggleapi1 = useSpringRef();
  const toggle1 = useSpring({
    ref: toggleapi1,
    from: { opacity: 1 },
  });
  function toggleOnClickLi() {
    if (size.x <= 960) {
      api.start({
        to: {
          x: springs.x.get() === 0 ? 200 : 0,
        },
        delay: 500,
      });
    }
    toggleapi2.start({
      to: {
        opacity: toggle2.opacity.get() === 0 ? 1 : 0,
      },
      delay: 400,
    });
    toggleapi1.start({
      to: {
        opacity: toggle1.opacity.get() === 0 ? 1 : 0,
      },
      delay: 400,
    });
  }
  useEffect(() => {
    if (springs.x.get() == 200) {
      setToggleState(true);
    }

    console.log(size);
  }, [springs.x.get()]);

  function toggleOnClick() {
    api.start({
      to: {
        x: springs.x.get() === 0 ? 200 : 0,
      },
    });
    toggleapi2.start({
      to: {
        opacity: toggle2.opacity.get() === 0 ? 1 : 0,
      },
    });
    toggleapi1.start({
      to: {
        opacity: toggle1.opacity.get() === 0 ? 1 : 0,
      },
    });
    if (toggleState == true) {
      setToggleState(false);
    }
  }

  return (
    <nav className={styles.header_class}>
      <ul className={styles.nav_ul}>
        <animated.li
          className={styles.item}
          style={
            size.x <= 960
              ? { display: toggleState ? "none" : "block", ...springs }
              : {}
          }
        >
          <animated.div style={springsdiv}>
            <Link href="/">
              <button
                onClick={toggleOnClickLi}
                data-text="Awesome"
                className={styles.button}
              >
                <span>&nbsp;Home&nbsp;</span>
                <span
                  className={styles.hovertext}
                  style={{
                    width: pages == "/" ? "100%" : "0",
                  }}
                  aria-hidden="true"
                >
                  &nbsp;Home&nbsp;
                </span>
              </button>
            </Link>
          </animated.div>
        </animated.li>
        <animated.li
          className={styles.item}
          style={
            size.x <= 960
              ? { display: toggleState ? "none" : "block", ...springs }
              : {}
          }
        >
          <animated.div style={springsdiv}>
            <Link href="/about">
              <button
                onClick={toggleOnClickLi}
                data-text="Awesome"
                className={styles.button}
              >
                <span className={styles.actualtext}>&nbsp;About&nbsp;</span>
                <span
                  className={styles.hovertext}
                  style={{ width: pages == "/about" ? "100%" : "0" }}
                  aria-hidden="true"
                >
                  &nbsp;About&nbsp;
                </span>
              </button>
            </Link>
          </animated.div>
        </animated.li>
        <animated.li
          className={styles.item}
          style={
            size.x <= 960
              ? { display: toggleState ? "none" : "block", ...springs }
              : {}
          }
        >
          <animated.div style={springsdiv}>
            <Link href="/projects">
              <button
                onClick={toggleOnClickLi}
                data-text="Awesome"
                className={styles.button}
              >
                <span className={styles.actualtext}>&nbsp;Projects&nbsp;</span>
                <span
                  className={styles.hovertext}
                  style={{ width: pages == "/projects" ? "100%" : "0" }}
                  aria-hidden="true"
                >
                  &nbsp;Projects&nbsp;
                </span>
              </button>
            </Link>
          </animated.div>
        </animated.li>
        <animated.li
          className={styles.item}
          style={
            size.x <= 960
              ? { display: toggleState ? "none" : "block", ...springs }
              : {}
          }
        >
          <animated.div style={springsdiv}>
            <Link href="/contact">
              <button
                onClick={toggleOnClickLi}
                data-text="Awesome"
                className={styles.button}
              >
                <span className={styles.actualtext}>&nbsp;Contact&nbsp;</span>
                <span
                  className={styles.hovertext}
                  style={{ width: pages == "/contact" ? "100%" : "0" }}
                  aria-hidden="true"
                >
                  &nbsp;Contact&nbsp;
                </span>
              </button>
            </Link>
          </animated.div>
        </animated.li>
        <li className={styles.toggle}>
          <animated.button
            onClick={toggleOnClick}
            className={styles.button}
            style={springsdiv}
          >
            <animated.div style={toggle1}>
              <ToggleIcon1 />
            </animated.div>
            <animated.div style={toggle2}>
              <ToggleIcon2 />
            </animated.div>
          </animated.button>
        </li>
      </ul>
    </nav>
  );
}
