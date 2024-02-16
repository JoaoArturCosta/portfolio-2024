"use client"

import AnimationFadeLeft from "@/components/animations/fade-left";
import AnimationFadeRight from "@/components/animations/fade-right";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useHover, useMouse } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import { BugOff, Code2, CodeSquare, Database, FileCode2, LucideGitCompareArrows, Palette } from "lucide-react";
import AnimationFadeTop from "@/components/animations/fade-top";
import ProjectItem from "@/components/project-item";
import { PROJECTS } from "@/content/projects";

export default function Home() {
  const [educationRef, hoveringEducation] = useHover();
  const [experienceRef, hoveringExperience] = useHover();
  const [projectsRef, hoveringProjects] = useHover();
  const [mouse, sectionRef] = useMouse();

  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center justify-center h-full w-full pt-12 pb-32 lg:flex-row">
        <AnimationFadeRight
          className=" flex-1 w-full space-y-8 lg:max-w-[50%] relative z-10 p-12"
          delay={0.5}
          once
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-center lg:text-left">
            Hi!👋 I am João Costa.
          </h2>
          <h1 className="text-6xl font-bold text-center lg:text-left">
            A <span className="text-primary underline">software engineer</span> {' '}
            from Porto
          </h1>
          <div className="flex justify-center lg:justify-start gap-10 w-full">
            <Link href={'/contact'} className={buttonVariants({ variant: 'default', size: 'xl' })}>
              Contact Me
            </Link>
            <Link href={'/portfolio'} className={buttonVariants({ variant: 'secondary', size: 'xl' })}>
              View Portfolio
            </Link>
          </div>
        </AnimationFadeRight>
        <AnimationFadeLeft className="mt-8 relative w-full lg:w-[500px] h-[500px] z-0"
          once
        >
          <div className="w-[350px] h-[350px] bg-primary rounded-full absolute -z-1 right-[5%] top-[75px] lg:-right-[50px]"></div>
          <Image
            src="/images/home/me.png"
            alt="João Costa"
            width={500}
            height={500}
            className="rounded-full absolute left-1/2 transform -translate-x-1/2 lg:-left-[50px] lg:translate-x-0 z-2"
          />
        </AnimationFadeLeft>
      </section>
      <section className="flex flex-col  items-left justify-center h-full w-full pt-24 lg:flex-row relative z-0"  >
        <div className="bg-secondary h-full w-screen left-1/2 transform -translate-x-1/2  absolute -z-1 overflow-hidden"
          ref={sectionRef as React.RefObject<HTMLDivElement>}
        >

          <div className={cn("bg-white h-[300px] w-[300px] absolute -z-1  transform  rounded-full",)}
            style={{
              left: `${mouse.elementX - 150}px`,
              top: `${mouse.elementY - 150}px`,
            }}
          />
        </div>
        <div
          className="grid grid-rows-3  gap-12 relative z-10  w-full items-start py-6"
        >
          <div className="flex items-start gap-32" ref={educationRef}>
            <h3 className=" flex flex-col max-w-[15%]">
              <span className={cn("text-muted-foreground text-5xl font-bold text-left", {
                "text-primary": hoveringEducation,
              })}>
                5
              </span>
              <span className={cn("text-muted-foreground font-medium text-xl", {
                "text-primary": hoveringEducation,
              })}>
                Years of education
              </span>

            </h3>
            <p className={cn("text-lg text-left flex flex-col text-muted-foreground font-medium max-w-[75%]", {
              "text-default": hoveringEducation,
            })}>
              <span>Instituto Superior de Engenharia do Porto</span>
              <span>B.S in Electronics and Computers</span>
              <span>September 2012 - November 2016</span>
              <span>Porto, Portugal</span>
            </p>
          </div>
          <div className="flex items-start gap-32 mt-0" ref={experienceRef}>
            <h3 className=" flex flex-col w-[15%]">
              <span className={cn("text-muted-foreground text-5xl font-bold text-left", {
                "text-primary": hoveringExperience,
              })}>
                8+
              </span>
              <span className={cn("text-muted-foreground font-medium text-xl", {
                "text-primary": hoveringExperience,
              })}>
                Years of experience
              </span>

            </h3>
            <p className={cn("text-lg text-left flex flex-col text-muted-foreground font-medium max-w-[75%]", {
              "text-default": hoveringExperience,
            })}>
              Prolific, Web Developer , I like to craft (and occasionally design) solid and scalable, exceptional digital experiences.
              I’ve built several applications with great emphasis on frontend development and user experience.
            </p>
          </div>
          <div className="flex items-start gap-32" ref={projectsRef}>
            <h3 className=" flex flex-col w-[15%]">
              <span className={cn("text-muted-foreground text-5xl font-bold text-left", {
                "text-primary": hoveringProjects,
              })}>
                12+
              </span>
              <span className={cn("text-muted-foreground font-medium text-xl", {
                "text-primary": hoveringProjects,
              })}>
                Projects
              </span>

            </h3>
            <p className={cn("text-lg text-left flex flex-col text-muted-foreground font-medium max-w-[75%]", {
              "text-default": hoveringProjects,
            })}>
              Decreased rework by 22% and costs by 15%. Consistently receive high user experience scores for all web development projects.
              Passionate about building worb class web applications.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center h-full w-full pt-32 pb-32 space-y-24">
        <h3 className="text-4xl font-bold text-left w-full">
          My Skills
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 w-full ">
          <div className="flex flex-col items-start gap-2">
            <div >
              <FileCode2 size={48} />
            </div>
            <p className="text-lg text-left font-medium">
              JavaScript, TypeScript
            </p>
            <p className=" text-left text-muted-foreground">
              Languages
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div >
              <CodeSquare size={48} />
            </div>
            <p className="text-lg text-left font-medium">
              React, Redux, Next.js, NodeJs, TRPC
            </p>
            <p className=" text-left text-muted-foreground">
              Frameworks & Libraries
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div >
              <Palette size={48} />
            </div>
            <p className="text-lg text-left font-medium">
              TailwindCss, SASS
            </p>
            <p className=" text-left text-muted-foreground">
              Styling
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div >
              <LucideGitCompareArrows size={48} />
            </div>
            <p className="text-lg text-left font-medium">
              Unix, Git, CI/CD, AWS, Netlify, Vercel
            </p>
            <p className=" text-left text-muted-foreground">
              Tools
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div>
              <Database size={48} />
            </div>
            <p className="text-lg text-left font-medium">
              SQL( MySQL, PostgreSQL), NoSQL(MongoDB), ORM (Drizzle, Prisma)
            </p>
            <p className=" text-left text-muted-foreground">
              Databases
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div>
              <BugOff size={48} />
            </div>
            <p className="text-lg text-left font-medium">
              Cypress, Jest, Mocha
            </p>
            <p className=" text-left text-muted-foreground">
              Testing
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start justify-center h-full w-full pt-12 pb-32 space-y-24">
        <h3 className="text-4xl font-bold text-left w-full">
          My Projects
        </h3>
        {PROJECTS.map((project, index) => (
          <ProjectItem
            key={`project-${index}`}
            title={project.title}
            description={project.description}
            image={project.image}
            index={index}
            url={project.url}
          />
        ))}
        <Link href={'/portfolio'} className={buttonVariants({ variant: 'default', size: 'xl' })}>
          View More
        </Link>
      </section>

    </MaxWidthWrapper>
  );
}
