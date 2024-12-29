import AcmeCorpLogo from '../assets/images/acme-corp-logo.svg';
import EchoValleyLogo from '../assets/images/echo-valley-logo.svg';
import QuantumLogo from '../assets/images/quantum-logo.svg';
import PulseLogo from '../assets/images/pulse-logo.svg';
import OutsideLogo from '../assets/images/outside-logo.svg';
import CelestialLogo from '../assets/images/celestial-logo.svg';
import Image from 'next/image';
import { SectionBorder } from '@/components/SectionBorder';
import { SectionContent } from '@/components/SectionContent';

export const companies = [
  {
    name: 'Acme Corp',
    logo: AcmeCorpLogo,
  },
  {
    name: 'Echo Valley',
    logo: EchoValleyLogo,
  },
  {
    name: 'Quantum',
    logo: QuantumLogo,
  },
  {
    name: 'Pulse',
    logo: PulseLogo,
  },
  {
    name: 'Outside',
    logo: OutsideLogo,
  },
  {
    name: 'Celestial',
    logo: CelestialLogo,
  },
];

export const Companies = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder>
          <SectionContent className="!pt-0">
            <h2 className="text-center text-xs font-body uppercase tracking-widest text-gray-500">
              Empowering creators at leading companies
            </h2>
            <div className="flex mt-20 overflow-x-clip -mx-4 lg:-mx-8">
              <div className="flex flex-none gap-18 px-18 md:gap-36">
                {companies.map((company, index) => (
                  <div key={index}>
                    <Image
                      src={company.logo}
                      alt={company.name}
                      className="h-8"
                    />
                  </div>
                ))}
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Companies;
