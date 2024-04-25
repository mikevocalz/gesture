'use client'
import { SolitoImage } from 'solito/image';
import { Footer } from '@expo/html-elements'
import GestureLogo from 'app/components/svgs/GestureLogo';

const WebFooter = () => {
  return (
    <Footer className="relative inset-x-0 bottom-0 left-0  right-0 w-full bg-fuchsia-900 sm:p-0">
      <div className=" items-center border-t-[0.5px]   bg-gray-200  sm:p-0">
        <div className="mx-auto w-full max-w-7xl flex-1 justify-between  px-10 py-6 md:flex">
          <div className=" mb-6 md:mb-0">
            <a
              href="https://www.gesture.vip"
              className="items-start justify-start"
            >
              <GestureLogo
                width={200}
                height={250}
                style={{
                  marginTop: 0,
                  marginLeft: -10,
                }}
              />
            </a>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-[50px] sm:mt-0 sm:gap-8">
            {/* Connect Section */}
            <div>
              <h2 className="mb-6  font-[BebasNeue-Bold] text-2xl font-semibold uppercase tracking-wide text-[#2b089f] md:text-3xl">
                Contact Us
              </h2>
              <ul className="text-gray-800 ">
                <li className="mb-4">
                  <a
                    href="mailto:info@gesture.vip"
                    className="break-all hover:underline "
                  >
                    info@gesture.vip
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials Section */}
            <div>
              <h2 className="mb-6 font-[BebasNeue-Bold] text-2xl font-semibold uppercase tracking-wide text-[#2b089f] md:text-3xl">
                Socials
              </h2>
              <ul className="text-gray-800 ">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/sendagesture"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="http://www.instagram.com/sendagesture"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-0 border-[#fdbf2e] sm:mx-auto  lg:my-8" />

        <div className="flex flex-wrap items-center justify-center bg-[#2b089f]  px-4 py-3  text-center ">
          <span className="flex-wrap px-6 text-sm font-bold text-gray-300 sm:text-center">
            © 2024
            <a href="https://www.gesture.vip" className="mx-2 tracking-wider ">
              Gesture US Inc.
            </a>
            <br className="sm:hidden" />
            <a> All Rights Reserved.</a>
          </span>
        </div>
      </div>
    </Footer>
  )
}

export default WebFooter