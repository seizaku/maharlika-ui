import Navbar from "@/components/navbar";
import Hero from "@/app/(components)/hero";
import {
  Section,
  SectionHero,
  SectionGrid1,
  SectionGrid2,
  SectionGrid4,
  SectionColumn,
  SectionHeading,
  SectionParagraph,
} from "@/components/section";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import sectionImg1 from "@/public/assets/images/section-img-1.png";
import sectionImg2 from "@/public/assets/images/section-img-2.png";
import sectionImg3 from "@/public/assets/images/section-img-3.png";
import { FeatureItem } from "@/components/feature-item";
import {
  Landmark,
  HeartPulse,
  Store,
  Banknote,
  BarChart3,
  Laptop2,
  Building2,
  Truck,
} from "lucide-react";
import { FrequentlyAskedQuestions } from "@/app/(components)/faq";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Section className="bg-slate-100">
          <div className="text-center p-24 container">
            <SectionHeading className="md:text-5xl mb-0 font-semibold">
              Why Vintazk?
            </SectionHeading>
            <SectionParagraph className="md:px-44">
              Choose Vintazk for unparalleled expertise, up to 70% cost savings,
              industry specialization, innovation, flexibility, diverse
              services, data-driven insights, and unwavering client support—all
              in one trusted partner. Elevate your business with Vintazk today.
            </SectionParagraph>
            <Button size="lg" className="mt-4">
              Learn More
            </Button>
          </div>
        </Section>
        <Section>
          <SectionGrid2>
            <SectionColumn className="flex justify-center items-center">
              <Image
                className="mx-auto drop-shadow-md"
                src={sectionImg1.src}
                width={640}
                height={640}
                alt="customer-and-back-office-support-image"
              />
            </SectionColumn>
            <SectionColumn>
              <SectionHeading>Customer & Back-Office Support</SectionHeading>
              <SectionParagraph>
                Experience excellence at every touchpoint with our unparalleled
                customer support services, designed to leave your customers
                amazed and your business thriving. Our efficient back-office
                support further ensures that your operations run like clockwork,
                allowing you to focus on what truly matters – growth and
                innovation.
              </SectionParagraph>
              <ul className="mb-4 flex flex-col gap-2">
                <FeatureItem>
                  Email, Chat, Inbound & Outbound Support
                </FeatureItem>
                <FeatureItem>Reporting and Data Analytics</FeatureItem>
                <FeatureItem>Quality Assurance</FeatureItem>
                <FeatureItem>
                  Ads Management and Influencer Acquisition
                </FeatureItem>
                <FeatureItem>Work Force Management</FeatureItem>
                <FeatureItem>Bookkeeping & Accounting</FeatureItem>
              </ul>
              <Button size="lg" className="mt-4">
                Learn More
              </Button>
            </SectionColumn>
          </SectionGrid2>
        </Section>
        <Section className="bg-slate-100">
          <SectionGrid2>
            <SectionColumn>
              <SectionHeading>SEO and Social Media Marketing</SectionHeading>
              <SectionParagraph>
                Elevate your online presence with our dynamic digital marketing
                services that not only increase visibility but also spark
                meaningful connections with your target audience. From strategic
                campaigns to impactful social media engagement, we’re your
                partner in turning clicks into lasting brand loyalty.
              </SectionParagraph>
              <ul className="mb-4 flex flex-col gap-2">
                <FeatureItem>Web Development</FeatureItem>
                <FeatureItem>Customer Relationship Management</FeatureItem>
                <FeatureItem>On-Page, Technical, and Content SEO </FeatureItem>
                <FeatureItem>Social Media Management </FeatureItem>
                <FeatureItem>Email/SMS Marketing Campaigns</FeatureItem>
                <FeatureItem>Graphic Designing and Video Editing</FeatureItem>
              </ul>
              <Button size="lg" className="mt-4">
                Learn More
              </Button>
            </SectionColumn>
            <SectionColumn className="flex justify-center items-center order-first lg:order-last">
              <Image
                className="mx-auto drop-shadow-xl"
                src={sectionImg2.src}
                width={640}
                height={640}
                alt="graphic-designing-and-video-editing-image"
              />
            </SectionColumn>
          </SectionGrid2>
        </Section>
        <Section>
          <SectionGrid2>
            <SectionColumn className="flex justify-center items-center">
              <Image
                className="mx-auto drop-shadow-xl"
                src={sectionImg3.src}
                width={640}
                height={640}
                alt="spanish-bilingual-support-image"
              />
            </SectionColumn>
            <SectionColumn>
              <SectionHeading>Bilingual Support</SectionHeading>
              <SectionParagraph>
                Seamlessly connect with your diverse audience using our
                Bilingual Support Services, ensuring effective communication and
                customer satisfaction in both English and Spanish. Our expert
                team navigates language barriers effortlessly, delivering
                top-notch assistance to foster strong customer relationships.
              </SectionParagraph>
              <ul className="mb-4 flex flex-col gap-2">
                <FeatureItem>Outbound & Inbound Support</FeatureItem>
                <FeatureItem>Collections</FeatureItem>
                <FeatureItem>Appointment Setting</FeatureItem>
              </ul>
              <Button size="lg" className="mt-4">
                Learn More
              </Button>
            </SectionColumn>
          </SectionGrid2>
        </Section>
        <Section className="bg-slate-100 ">
          <SectionGrid1>
            <SectionColumn className="text-center">
              <SectionHeading>Industries we serve</SectionHeading>
              <SectionParagraph className="md:px-44">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                bibendum metus. Nulla facilisi. Nunc efficitur augue vel justo
                bibendum, id hendrerit orci iaculis.
              </SectionParagraph>
              <SectionGrid4 className="gap-24 items-start mt-14 font-semibold">
                <div className="text-center md:text-left text-lg">
                  <Landmark className="mx-auto md:mx-0 h-12 w-12 text-slate-800 mb-2" />
                  Real estate
                  <p className="text-sm leading-7 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut bibendum metus.
                  </p>
                </div>
                <div className="text-center md:text-left text-lg">
                  <HeartPulse className="mx-auto md:mx-0 h-12 w-12 text-slate-800 mb-2" />
                  Healthcare
                  <p className="text-sm leading-7 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut bibendum metus.
                  </p>
                </div>
                <div className="text-center md:text-left text-lg">
                  <Store className="mx-auto md:mx-0 h-12 w-12 text-slate-800 mb-2" />
                  Retail & Sales
                  <p className="text-sm leading-7 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut bibendum metus.
                  </p>
                </div>
                <div className="text-center md:text-left text-lg">
                  <Banknote className="mx-auto md:mx-0 h-12 w-12 text-slate-800 mb-2" />
                  Finance
                  <p className="text-sm leading-7 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut bibendum metus.
                  </p>
                </div>
                <div className="text-center md:text-left text-lg">
                  <BarChart3 className="mx-auto md:mx-0 h-12 w-12 text-slate-800 mb-2" />
                  Accounting
                  <p className="text-sm leading-7 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut bibendum metus.
                  </p>
                </div>
                <div className="text-center md:text-left text-lg">
                  <Laptop2 className="mx-auto md:mx-0 h-12 w-12 text-slate-800 mb-2" />
                  Software
                  <p className="text-sm leading-7 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut bibendum metus.
                  </p>
                </div>
                <div className="text-center md:text-left text-lg">
                  <Building2 className="mx-auto md:mx-0 h-12 w-12 text-slate-800 mb-2" />
                  Professional
                  <p className="text-sm leading-7 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut bibendum metus.
                  </p>
                </div>
                <div className="text-center md:text-left text-lg">
                  <Truck className="mx-auto md:mx-0 h-12 w-12 text-slate-800 mb-2" />
                  Distribution
                  <p className="text-sm leading-7 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut bibendum metus.
                  </p>
                </div>
              </SectionGrid4>
            </SectionColumn>
          </SectionGrid1>
        </Section>
        <Section>
          <SectionGrid1>
            <SectionColumn className="text-center">
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              <SectionParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                bibendum metus. Nulla facilisi.
              </SectionParagraph>
              <div className="flex flex-col gap-4 justify-center">
                <FrequentlyAskedQuestions />
              </div>
              <Button size="lg" className="mt-4">
                Load More
              </Button>
            </SectionColumn>
          </SectionGrid1>
        </Section>
        <Footer />
      </main>
    </>
  );
}
