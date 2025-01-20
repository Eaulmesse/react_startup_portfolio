import { useState, useEffect } from "react";

const useBreakpoint = (breakpoint = 1024) => {
    const [isLg, setIsLg] = useState(window.innerWidth >= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsLg(window.innerWidth >= breakpoint);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [breakpoint]);

    return isLg;
};

// Export par défaut
export default useBreakpoint;