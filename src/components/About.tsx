import pic from "../asset/logo192.png";
// import solidity from "../asset/solidity.png";
import { SiSolidity, SiJavascript } from "react-icons/si";

export function About() {
  return (
    <div id="About">
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <p>Hi, my name is Henry Chang</p>
            <img src={pic} />
          </div>
          <div className="flex flex-row">
            <div>Tech Stacks::</div>
            <div>
              <SiSolidity />
            </div>
            <div>
              <SiJavascript />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
