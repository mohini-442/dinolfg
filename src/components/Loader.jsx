import TokenomicsCartoon from "../assets/images/cartoont.png";
import { useState, useEffect } from "react";

const Loader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-[#0A4740] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <div className="preloader flex flex-col justify-center items-center h-screen">
                        <img
                            src={TokenomicsCartoon}
                            alt="TokenomicsCartoon"
                            className=" vert_move3"
                        />
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Loader