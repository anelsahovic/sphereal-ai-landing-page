'use client';

import { Button } from '@/components/Button';
import robotImg from '@/assets/images/robot.jpg';
import underlineImage from '@/assets/images/underline.svg?url';
import Image from 'next/image';
import { LoaderCircle } from 'lucide-react';
import { Orbit } from '@/components/Orbit';
import { Planet } from '@/components/Planet';
import { SectionBorder } from '@/components/SectionBorder';
import { SectionContent } from '@/components/SectionContent';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useMousePosition } from '@/utils/hooks';

export const Hero = () => {
  const { xProgress, yProgress } = useMousePosition();

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end start', 'start end'],
  });

  const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeX = useTransform(springX, [0, 1], ['-25%', '25%']);
  const translateLargeY = useTransform(springY, [0, 1], ['-25%', '25%']);

  const translateMediumX = useTransform(springX, [0, 1], ['-50%', '50%']);
  const translateMediumY = useTransform(springY, [0, 1], ['-50%', '50%']);

  const translateSmallX = useTransform(springX, [0, 1], ['-100%', '100%']);
  const translateSmallY = useTransform(springY, [0, 1], ['-100%', '100%']);
  return (
    <section ref={sectionRef}>
      <div className="container">
        <SectionBorder>
          <SectionContent className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10">
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[600px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[850px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1100px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1350px]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
              Unlock the Future of AI Conversations with{' '}
              <span className="relative">
                <span>Sphereal</span>
                <span
                  className="absolute w-full h-4 left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: 'contain',
                    maskPosition: 'center',
                    maskRepeat: 'no-repeat',
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-center text-lg md:text-xl mt-8 lg:max-w-3xl lg:mx-auto">
              Harness the power of AI with Sphereal. Elevate your productivity
              and streamline workflow with our cutting-edge AI chat platform.
            </p>
            <div className="flex justify-center mt-10">
              <Button variant="secondary">Start Chatting</Button>
            </div>

            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <motion.div
                  style={{
                    x: translateLargeX,
                    y: translateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="-translate-x-[316px] -translate-y-[76px] rotate-135"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateLargeX,
                    y: translateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="translate-x-[300px] -translate-y-[170px] -rotate-135 "
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateSmallX,
                    y: translateSmallY,
                  }}
                >
                  <Planet
                    size="sm"
                    color="fuchsia"
                    className="-translate-x-[500px] -translate-y-[370px] rotate-135 "
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateMediumX,
                    y: translateMediumY,
                  }}
                >
                  <Planet
                    size="md"
                    color="teal"
                    className="translate-x-[470px] -translate-y-[350px] -rotate-135 "
                  />
                </motion.div>
              </div>

              <div className="hidden lg:block absolute top-[30%] left-0 -translate-x-10 z-10 ">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{ y: transformedY }}
                >
                  <div>
                    Can you design an intuitive user interface for a fitness
                    app?
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </div>
                </motion.div>
              </div>

              <div className="hidden lg:block absolute top-[50%] right-0 translate-x-10 z-10">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{ y: transformedY }}
                >
                  <div>
                    <strong>Brainwave:</strong> I created one inspired by modern
                    fitness apps.
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    Just now
                  </div>
                </motion.div>
              </div>

              <div className="border-2 rounded-2xl mt-16 overflow-hidden border-gradient relative ">
                <Image src={robotImg} alt="robot image" className="" />
                <div className="absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 w-full px-4 flex items-center justify-center">
                  <div className="bg-gray-950/80 flex justify-center items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                    <LoaderCircle className="text-violet-400 animate-spin " />
                    <div className="font-semibold text-xl text-gray-100">
                      AI is generating
                      <span className="animate-cursor-blink font-thin">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
