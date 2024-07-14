import { Header } from "../components/Header";
// import heroImage from "../assets/hero-animation.png";
import { Button } from "../elements/Button";
import { SecondaryButton } from "../elements/SecondaryButton";
import { MarqueeSlider } from "../components/MarqueeSlider";
// import { Card } from "../components/Card";
// import secure from "../assets/verified.png";
// import userControl from "../assets/userControl.png";
// import seamLess from "../assets/seamless.png";
// import effortLess from "../assets/effotLess.png";
import { Footer } from "../components/Footer";
import { InfoSection } from "../components/InfoSection";
import { SlideSection } from "../components/SlideSection";
// import Ripple from "../effects/Ripple";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-28 pt-20 md:pt-40 text-left">
                <div>
                    <div className="text-5xl md:text-6xl leading-snug pb-6 font-[barlow]">
                        <div>Next-gen wallet</div>
                        <div>for securing digital assets</div>
                    </div>
                    <div className="text-md md:text-2xl pb-6 font-[inter]">
                        <div>Protecting your digital assets with advanced security innovations.</div>
                        {/* <Ripple width={20} height={20} x={-1} y={-1} className="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] " /> */}
                    </div>
                    <div className="flex items-center gap-4 md:gap-10">
                        <Link to={"/login"}>
                            <div>
                                <Button buttonName={"Get Started"} />
                            </div>
                        </Link>
                        <Link to={"https://www.npmjs.com/package/ar-mpc-sdk"}>
                            <div>
                                <SecondaryButton buttonName={"View Docs"} />
                            </div>
                        </Link>

                    </div>
                </div>
                <div className="mt-16 md:mt-0 md:ml-10 md:block flex justify-center">
                    {/* <img className="w-[18rem] md:w-[23rem]" src={heroImage} alt="Hero-Image" /> */}
                </div>
            </div>
            <div className="mb-24">
                <MarqueeSlider />
            </div>
            <div className="pb-24">
                <InfoSection tag={"Built for Tomorrow"} subHeading={"Why ArKey ?"} description={"Our MPC wallet adapts with flexible, scalable security solutions, safeguarding your digital assets against current and future challenges."} />
            </div>
            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-32" id="features">
                    {/* <Card image={secure} tag={"Unparalleled Security"} description={"Leverage MPC technology to protect user assets."} /> */}
                    {/* <Card image={userControl} tag={"User-Controlled Wallets"} description={"Empower users with full control over their assets."} /> */}
                    {/* <Card image={seamLess} tag={"Seamless Integrations"} description={"Easily integrate MPC wallets into your platform."} /> */}
                    {/* <Card image={effortLess} tag={"Effortless Usability"} description={"Intuitive interface managing your digital assets straightforward and hassle-free."} /> */}
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center md:justify-around items-center text-center md:text-left my-12 px-4">
                <div className="text-4xl md:text-5xl font-[barlow] font-semibold mb-8 md:mb-0">
                    <div>Modern Simplicity.</div>
                    <div>Blockchain Security.</div>
                </div>
                <div className="max-w-md md:max-w-lg text-lg md:text-xl text-gray-600 font-[inter]">
                    Experience the ease and familiarity of modern web applications combined with the innovative power of blockchain technology
                </div>
            </div>
            <div id="about">
                <SlideSection />
            </div>
            <Footer />
        </div>
    );
};
