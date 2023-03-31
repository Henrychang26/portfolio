import pic from "../asset/logo192.png";

export default function Projects() {
  return (
    <div id="Projects">
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <p>Decentralized Exchange</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                sunt, voluptatibus iste animi harum dolor illum, veritatis
                provident, ad ullam ex voluptatem excepturi aspernatur? Eaque
                distinctio sapiente natus esse corporis.
              </p>
            </div>
            <div>
              <div>
                <a href="https://google.com">
                  <img src={pic} alt="example" />
                </a>
              </div>
              <div>
                <a href="https://google.com">
                  <img src={pic} alt="example" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
