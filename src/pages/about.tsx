import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Killer Crab Men - About Us"
          description="About Us - Creative music, sound engineering and mixing for commercials, brands and creatives."
        />
      }
    >
      <div className="text-bold z-10 w-full bg-slate-900 p-5 py-3 text-center text-white">
        <b className=" font-rubik text-xl ">
          <span className="text-yellow-400">MUSIC AND SOUND DESIGN</span> AS
          AWESOME AS YOUR IDEAS
        </b>
        <br />
        <span className="text-sm">
          <b>Want to learn about us?</b> See our mission and advocates below ↓
        </span>
      </div>

      <div className="space-around m-auto flex  w-3/4 justify-center">
        <div className="flex-1 text-center  font-rubik text-5xl font-semibold text-slate-900">
          <p className="basis-full leading-6">
            <br />
            <br />
            WE ARE <span className="text-red-500">KILLER CRAB MEN.</span>
            <br />
            <span className="text-2xl">
              A PRODUCTION DUO MAKING WAVES (OF SOUND).
            </span>
          </p>

          <p className="basis-full leading-6">
            WE WRITE MUSIC.
            <br />
            <span className="text-2xl">
              MUSIC FOR <span className="text-red-500">YOUR IDEAS.</span>
              <br />
            </span>
            <span className="text-2xl">
              MUSIC FOR <span className="text-red-500">ART AND PASSION.</span>
              <br />
            </span>
            <span className="text-2xl">
              MUSIC FOR <span className="text-red-500">SAYING SOMETHING.</span>
              <br />
            </span>
          </p>

          <p className="basis-full leading-7">
            WE CREATE THINGS <span className="text-red-500">DIFFERENTLY.</span>
            <br />
            <span className="text-2xl">
              EVERYTHING IS{' '}
              <span className="text-red-500">FRESH OFF THE BOAT.</span>
              <br />
            </span>
            <span className="text-red-500">NEVER FACTORY MADE,</span>
            <br />
            <span className="leading-10">
              <span className="text-2xl">OUR AIM:</span>
              <br />
              <span className="text-red-500">
                TO SET YOU APART IN A SEA OF "ISH".
              </span>
              <br />
            </span>
          </p>

          <p className="basis-full leading-10">
            <span className="text-yellow-500">YOUR PROJECT</span>
            <br />
            NEEDS A <span className="text-red-500">PERFECT</span> SOUNDTRACK.
            <br />
            <span className="text-yellow-500">WE'LL MAKE IT.</span>
            <br />
          </p>

          <p className="basis-full text-4xl leading-8">
            <span className="text-red-500">JUMP IN THE WATER WITH US.</span>
            <br />
            <span className="text-5xl">
              LET'S GET THAT <span className="text-yellow-500">GOLD,</span>{' '}
              <br />
            </span>
            <span className="text-5xl text-red-500">TOGETHER.</span>
          </p>

          <div className="bg-white py-16">
            <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-56">
              <div className="m-auto text-center lg:w-7/12">
                <h2 className="text-2xl font-light text-gray-700 md:text-4xl">
                  Don't take our word for it - check out our clients:
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                <div className="p-4">
                  <img
                    src={`${router.basePath}/assets/images/brands/adidas.png`}
                    className=""
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src={`${router.basePath}/assets/images/brands/nike.png`}
                    className="w-32 "
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src={`${router.basePath}/assets/images/brands/bbc.png`}
                    className="w-32 "
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src={`${router.basePath}/assets/images/brands/newbalance.png`}
                    className="w-32 "
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src={`${router.basePath}/assets/images/brands/sonos.png`}
                    className="w-32"
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src={`${router.basePath}/assets/images/brands/expedia.png`}
                    className="w-32"
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src={`${router.basePath}/assets/images/brands/ebay.png`}
                    className="w-20"
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src={`${router.basePath}/assets/images/brands/nissan.png`}
                    className="w-24"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default About;
