import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { SOCIALS } from "@/content/socials";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import AnimationFadeRight from "./animations/fade-right";
import AnimationFadeLeft from "./animations/fade-left";


export default function Footer() {
  return (
    <section className="w-screen bg-muted">
      <MaxWidthWrapper className="flex flex-col gap-10 lg:flex-row justify-around items-center py-10 lg:py-0 pb-2">
        <AnimationFadeRight
          delay={0.3}
          className="flex flex-col gap-10">
          <h4 className="text-4xl font-bold ">
            Are you interested ?
            <br />
            Say Hi!
          </h4>

          <Card className="bg-muted rounded-full">
            <CardHeader className="flex flex-row gap-4 items-center">
              <Image
                src="/images/home/me.png"
                alt="Joao Costa"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="flex flex-col gap-2">
                <CardTitle >
                  João Costa
                </CardTitle>
                <CardDescription>
                  Software Engineer
                  <div className="flex gap-4 pt-2 text-foreground">
                    {SOCIALS.map((social, index) => (
                      <Link key={`social-${index}`} href={social.url}>
                        <social.Icon className="w-4 h-4" />
                      </Link>
                    ))}
                  </div>
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </AnimationFadeRight>
        <AnimationFadeLeft
          delay={0.7}
        >
          <div className="flex flex-col items-center justify-center gap-10 bg-primary rounded-full w-[450px] h-[450px] lg:transform lg:-translate-y-12">
            <div className=" w-[80%] flex flex-col items-start justify-center gap-4   ">
              <Input
                placeholder="Your email"
                className="backdrop-blur-sm bg-white/20 placeholder:text-white border-0 py-4 h-14"
              />
              <Input
                placeholder="Your message"
                className="backdrop-blur-sm bg-white/20 placeholder:text-white border-0 py-4 h-14"
              />
              <Button variant="secondary" size="lg">
                Send
              </Button>
            </div>
          </div>
        </AnimationFadeLeft>
      </MaxWidthWrapper>
    </section >
  )
}
