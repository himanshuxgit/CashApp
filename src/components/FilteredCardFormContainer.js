import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const FilteredCardFormContainer = ({ width }) => {
  return (
    <div style={{ width: width }} className="absolute w-[calc(100%_-_123px)] top-[637px] right-[63px] left-[60px] h-[65px] overflow-hidden">
      <div className="absolute top-[calc(50%_-_24.5px)] left-[calc(50%_-_621.5px)] flex flex-col items-center justify-start">
        <div className="flex flex-row items-center justify-start gap-[20px]">
          <Button
            className="w-[170px]"
            variant="outline-primary"
            href="https://www.apple.com/in/app-store/"
          >
            APP STORE
          </Button>
          <Button
            className="w-[170px]"
            variant="outline-primary"
            href={`https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi5y8HtgoGBAxWKC3sHHbVfBXUYABAAGgJ0bQ&gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4k3Hz3-gRr1sn2yo_oBIy9wfjU8gxdMNW8bHDtZr3Hv6zSgIzn2_nMaArVBEALw_wcB&ohost=www.google.com&cid=CAESbeD2_WFtsof8-1Q-ZWu-wn3rVNQRRDxUtnTOV9Fi_JMeOtatZb-qUNfDbfQZvF262ywQP8jvThIFTfBZ-_2d5ICQ-j5voS_Tp3IkiFsPlmyghb-kvlnMVz_XHx-0fcTYolgme00zdVXOiU7RSI8&sig=AOD64_1_nd1tL-mjKbw9dypWSz8o0X88ww&q&adurl&ved=2ahUKEwinlLvtgoGBAxXjk1YBHeGHC64Q0Qx6BAgGEAE`}
          >
            GOOGLE PLAY
          </Button>
        </div>
      </div>
      <div className="absolute top-[0px] left-[calc(50%_+_96.5px)] flex flex-col items-center justify-start">
        <h3 className="m-0 relative" id="introtext " />
      </div>
      <div className="absolute top-[21px] left-[calc(50%_+_495px)] flex flex-row items-center justify-start gap-[30px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6 overflow-hidden shrink-0">
          <img
            className="absolute h-full w-[95.53%] top-[0%] right-[2.24%] bottom-[0%] left-[2.24%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector1.svg"
          />
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[21px] h-[17px] overflow-hidden shrink-0">
          <img
            className="absolute h-[99.67%] w-[99.27%] top-[0%] right-[0.73%] bottom-[0.33%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector2.svg"
          />
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[21px] h-[21px] overflow-hidden shrink-0">
          <img
            className="absolute h-[95.03%] w-[95.05%] top-[2.4%] right-[2.26%] bottom-[2.57%] left-[2.69%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector3.svg"
          />
          <img
            className="absolute h-[48.81%] w-[48.81%] top-[25.5%] right-[25.4%] bottom-[25.69%] left-[25.8%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector4.svg"
          />
          <img
            className="absolute h-[11.39%] w-[11.39%] top-[18.85%] right-[18.74%] bottom-[69.76%] left-[69.87%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector5.svg"
          />
        </button>
      </div>
      <img
        className="absolute h-[46.15%] w-[1.45%] top-[27.69%] right-[49.24%] bottom-[26.15%] left-[49.32%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector6.svg"
      />
    </div>
  );
};

export default FilteredCardFormContainer;
