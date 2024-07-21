import ArrowDownIcon from '@/components/icons/ArrowDownIcon';
import ClockIcons from '@/components/icons/ClockIcons';
import Link from 'next/link';
export default function LandingPage() {
  return (
    <>
      <section className="">
        <div className="flex flex-col gap-4 items-center justify-center bg-pattern min-h-screen max-h-full relative">
          <h1 className="font-bold text-xl text-center">
            Welcome to <br />
            <span className="text-5xl md:text-6xl lg:text-9xl font-extrabold tracking-wide text-primary">CROWDCAMP</span>
          </h1>
          <p className="text-center text-sm md:text-xl">
            That is a crowdfunding platform that allows people to turn their creative ideas into reality. Creators present their
            projects and set a funding goal. Users explore projects and decide whether they want to support them by donating in
            exchange for rewards.
          </p>
          <Link href="/" className="p-5 px-14 text-center bg-primary text-white rounded-sm text-2xl uppercase">
            let's start your project
          </Link>
          <img src="/hero_1.webp" alt="" className="absolute bottom-0 opacity-20 w-full object-cover -z-10 " />
          <div className="bg-primary border border-black/50 shadowm-md py-4 px-1 rounded-full absolute bottom-0 cursor-pointer bounce">
            <ArrowDownIcon />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-3 py-20 mt-20 px-1 md:px-5">
        <h2 className="text-5xl">
          A CROWDCAMP project does much more than simply raise money. It builds a community around your work.
        </h2>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 py-5">
        <div className="relative rounded-lg shadow-lg overflow-hidden group col-span-1 row-span-2 h-96 self-center">
          <img
            src="https://img.freepik.com/foto-gratis/resumen-desenfoque-defocused-restaurante-cafeteria-interior-cafe_1203-9267.jpg?t=st=1721587951~exp=1721591551~hmac=7cb7c54f832527dd58649f8bccbc0949d97c7e793e360df4beb95a427274341c&w=996"
            alt=""
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
          />
          <div className="absolute w-full h-full top-0 p-5 bg-black/40 flex flex-col items-start justify-end gap-2">
            <h2 className="text-xl md:text-2xl text-white font-extrabold">Cafeteria en Palermo</h2>
            <p className="text-sm md:text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ea rem minima blanditiis tenetur itaque
              repudiandae hic pariatur debitis dolorum provident animi dolorem ipsam, inventore tempore quos, illo aut quod!
            </p>
            <p className="flex items-center gap-2 text-white">
              <ClockIcons /> 10 days ago.
            </p>
          </div>
        </div>

        <div className="relative rounded-lg shadow-lg overflow-hidden group h-96">
          <img
            src="https://img.freepik.com/foto-gratis/paisaje-analogico-ciudad-edificios_23-2149661456.jpg?t=st=1721588559~exp=1721592159~hmac=f772d7c35b0ad4a328cd385dd8e341edca6df91ce01a8932c153d0e86a883017&w=996"
            alt=""
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
          />
          <div className="absolute w-full h-full top-0 p-5 bg-black/40 flex flex-col items-start justify-end gap-2">
            <h2 className="text-xl md:text-2xl text-white font-extrabold">Edificio New Age II </h2>
            <p className="text-sm md:text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ea rem minima blanditiis tenetur itaque
              repudiandae hic pariatur debitis dolorum provident animi dolorem ipsam, inventore tempore quos, illo aut quod!
            </p>
            <p className="flex items-center gap-2 text-white">
              <ClockIcons /> 13 days ago.
            </p>
          </div>
        </div>

        <div className="relative rounded-lg shadow-lg overflow-hidden group h-96">
          <img
            src="https://img.freepik.com/foto-gratis/interior-restaurante_1127-3392.jpg?t=st=1721588621~exp=1721592221~hmac=9b0638110b4a84d001f5bfb85c67c6f9153a0f9b381586d3d1015aed04436718&w=900"
            alt=""
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
          />
          <div className="absolute w-full h-full top-0 p-5 bg-black/40 flex flex-col items-start justify-end gap-2">
            <h2 className="text-xl md:text-2xl text-white font-extrabold">Bodegon Las Eras</h2>
            <p className="text-sm md:text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ea rem minima blanditiis tenetur itaque
              repudiandae hic pariatur debitis dolorum provident animi dolorem ipsam, inventore tempore quos, illo aut quod!
            </p>
            <p className="flex items-center gap-2 text-white">
              <ClockIcons /> 24 days ago.
            </p>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 py-14 my-5 self-center place-self-center	">
          <Link href="/projects" className="p-5 px-14 text-center bg-primary text-white rounded-sm text-2xl uppercase">
            See all projects
          </Link>
        </div>
      </section>
    </>
  );
}
