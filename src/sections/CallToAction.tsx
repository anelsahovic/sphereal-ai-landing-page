import { Button } from '@/components/Button';
import { SectionBorder } from '@/components/SectionBorder';
import { SectionContent } from '@/components/SectionContent';
import underlineImage from '@/assets/images/underline.svg?url';
import { Orbit } from '@/components/Orbit';
import { Planet } from '@/components/Planet';

export const CallToAction = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative isolate">
            <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)] -z-10" />
            <div className="absolute inset-0 -z-10">
              <Orbit className="size-[200px] absolute-center" />
              <Orbit className="size-[350px] absolute-center" />
              <Orbit className="size-[500px] absolute-center" />
              <Orbit className="size-[650px] absolute-center" />
              <Orbit className="size-[800px] absolute-center" />
            </div>
            <div className="absolute-center -z-10">
              <Planet
                size="lg"
                color="violet"
                className="translate-y-[200px] -translate-x-[200px] rotate-45"
              />
            </div>
            <div className="absolute-center -z-10">
              <Planet
                size="lg"
                color="violet"
                className="-translate-y-[200px] translate-x-[200px] -rotate-135"
              />
            </div>
            <div className="absolute-center -z-10">
              <Planet
                size="md"
                color="teal"
                className="-translate-x-[500px] rotate-90"
              />
            </div>
            <div className="absolute-center -z-10">
              <Planet
                size="md"
                color="teal"
                className="-translate-y-[100px] translate-x-[500px] -rotate-135"
              />
            </div>
            <div className="absolute-center -z-10">
              <Planet
                size="sm"
                color="fuchsia"
                className="-translate-y-[250px] -translate-x-[400px] rotate-135"
              />
            </div>
            <div className="absolute-center -z-10">
              <Planet
                size="sm"
                color="fuchsia"
                className="translate-y-[150px] translate-x-[400px] -rotate-45"
              />
            </div>
            <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center leading-tight">
              Join the AI Revolution with{' '}
              <span className="relative isolate">
                <span>Sphereal</span>
                <span
                  className="absolute top-full left-0 w-full h-4 background-linear_gradient"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'top',
                  }}
                ></span>
              </span>
            </h2>
            <p className="text-center text-xl mt-8 max-w-2xl mx-auto">
              Experience the transformative power of AI with Sphereal. Boost
              your productivity and streamline your workflow with our innovative
              AI chat platform.
            </p>
            <div className="flex justify-center items-center mt-10">
              <Button variant="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
