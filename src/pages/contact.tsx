import { useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Contact = () => {
  const FORM_ENDPOINT =
    'https://public.herotofu.com/v1/a547bc20-1cdf-11ed-9730-af3c511c5e41';
  const [status, setStatus] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data: any = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot request, so bypass it to validate via captcha
        if (response.status === 422) {
          e.target.submit();
          throw new Error('Please finish the captcha challenge');
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };

  const makeForm = () => {
    if (status) {
      return (
        <>
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">{status}</div>
        </>
      );
    }

    return (
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="relative w-full rounded border-0 bg-white p-3 text-sm text-gray-600 shadow outline-none placeholder:text-gray-400 focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="relative w-full rounded border-0 bg-white p-3 text-sm text-gray-600 shadow outline-none placeholder:text-gray-400 focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            className="relative w-full rounded border-0 bg-white p-3 text-sm text-gray-600 shadow outline-none placeholder:text-gray-400 focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="mr-1 mb-1 rounded bg-blue-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blue-600"
            type="submit"
          >
            Send a message
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <Main
        meta={
          <Meta
            title="Killer Crab Men - Contact Us"
            description="Contact Us - Creative music, sound engineering and mixing for commercials, brands and creatives."
          />
        }
      >
        {/* <div className="text-bold z-10 w-full bg-slate-900 p-5 py-3 text-center text-white">
          <b className=" font-rubik text-xl ">
            <span className="text-yellow-400">MUSIC AND SOUND DESIGN</span> AS
            AWESOME AS YOUR IDEAS
          </b>
          <br />
          <span className="text-sm">
            <b>Get in touch</b> use the details below ↓
          </span>
        </div> */}
        <div className="space-around m-auto  w-3/4 justify-center">
          <div>
            {/* <p className="font-rubik text-4xl">
              We'd <b className="text-red-500">love</b> to work with you
            </p> */}
            <p>You can call us:</p>
            <a
              href="tel:+447858972529"
              className="font-bold text-black hover:text-red-500"
            >
              UK: +44 7858 972529
            </a>
            <br />
            <a
              href="tel:+16464699622"
              className="font-bold text-black hover:text-red-500"
            >
              US: +1 6464 699622
            </a>
            <p>You can email us:</p>
            <a
              href="mailto:killercrabmen@gmail.com"
              className="font-bold text-black hover:text-red-500"
            >
              killercrabmen@gmail.com
            </a>
            <p>
              Or you can use the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="flex-1 text-center text-slate-900">{makeForm()}</div>
        </div>
      </Main>
    </>
  );
};

export default Contact;
