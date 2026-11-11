import heroImg from '../assets/heroImg.png'

function Hero() {
  return (
    <section className="hero bg-base-100 py-[60px]">
      <div className="hero-content w-[85%] max-w-none p-0 flex flex-col lg:flex-row items-center justify-between gap-[40px]">
        <div className="w-full lg:w-[45%] flex flex-col items-start">
          <h1 className="text-[48px] font-bold text-[#0E1E2A] leading-[60px]">
            Develop Your Life <br />
            With <span className="text-[#42C298]">One Step...</span>
          </h1>

          <p className="text-[16px] text-gray-500 leading-[26px] mt-[20px] mb-[32px] max-w-[440px]">
            Pushing the possibilities of the internet. Good for the last software. Make it A software night.
          </p>

          <div className="flex items-center w-full max-w-[440px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-[8px] p-[6px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="input border-none focus:outline-none w-full text-[15px] px-[16px] bg-transparent"
            />
            <button className="btn bg-[#F64C4C] hover:bg-[#e03e3e] text-white border-none rounded-[6px] px-[28px] h-[46px] text-[15px] font-normal">
              Send
            </button>
          </div>

          <div className="flex items-center gap-[32px] mt-[32px]">
            <a href="#googleplay" className="flex items-center gap-[10px] hover:opacity-80">
              <svg className="w-[24px] h-[24px] fill-gray-700" viewBox="0 0 24 24">
                <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 leading-[12px]">Android App on</span>
                <span className="text-[14px] font-semibold text-gray-700 leading-[16px]">GOOGLE PLAY</span>
              </div>
            </a>

            <a href="#applestore" className="flex items-center gap-[10px] hover:opacity-80">
              <svg className="w-[24px] h-[24px] fill-gray-700" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.96 6.3c.67-.81 1.12-1.94 1-3.07-.96.04-2.13.64-2.82 1.45-.61.7-.15 1.86-1.01 2.96 1.07.08 2.16-.53 2.83-1.34z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 leading-[12px]">Available on the</span>
                <span className="text-[14px] font-semibold text-gray-700 leading-[16px]">Apple Store</span>
              </div>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[55%] flex justify-end">
          <img
            src={heroImg}
            alt="Dashboard Preview"
            className="w-full max-w-[650px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
