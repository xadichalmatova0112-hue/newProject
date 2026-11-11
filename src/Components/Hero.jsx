import heroImg from '../assets/heroImg.png'
import googleImg from '../assets/googlPlay.png'
import appStore from '../assets/store.png'

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
           <img src={googleImg} alt="" />
           <img src={appStore} alt="" />

            
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
