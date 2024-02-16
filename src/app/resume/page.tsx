import MaxWidthWrapper from '@/components/max-width-wrapper'
import { buttonVariants } from '@/components/ui/button'
import { RESUME } from '@/content/resume'
import { BugOff, CodeSquare, Database, Download, FileCode2, LucideGitCompareArrows, Palette } from 'lucide-react'
import Link from 'next/link'


export default function Resume() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center justify-center h-full w-full pt-24 pb-32 gap-16 ">
        <h1 className='w-full text-center text-2xl lg:text-4xl font-medium'>Resume</h1>
        <p className='max-w-[850px] text-center'>With over 8 years of extensive experience in Banking, Web3, Project Management, and E-commerce, I bring a wealth of expertise to the table as an IT professional.
          <br />
          My passion lies in crafting innovative solutions that thrive in the digital realm, fueled by a commitment to enhancing user experiences through technology.
          <br />
          {/* Driven by a profound dedication to delivering exceptional service, I am deeply motivated to not only meet but exceed the needs of both customers and colleagues alike.
          I thrive on the opportunity to collaborate with teams and contribute to a culture of excellence, consistently striving to create impactful outcomes. */}
        </p>
        <h2 className="text-2xl font-bold text-center w-full">
          Work Experience
        </h2>
        {RESUME.experience.map((experience, index) => (
          <div key={`experience-${index}`} className="flex flex-col items-center gap-2 w-full">
            <h3 className=" text-xl font-bold text-center w-full">
              {experience.title}
            </h3>
            <h4 className="text-lg font-medium text-center w-full">
              {experience.company}
            </h4>
            <h5 className="font-medium text-muted-foreground text-center w-full">
              {experience.date}
            </h5>
            <p className="text-lg text-center flex flex-col text-muted-foreground font-medium max-w-[75%]">
              {experience.description.split('\n').map((line, index) => (
                <span key={`line-${index}`}>{line}<br /></span>
              ))}
            </p>
          </div>
        ))}
        <h2 className="text-2xl font-bold text-center w-full">
          Education
        </h2>
        {RESUME.education.map((education, index) => (
          <div key={`education-${index}`} className="flex flex-col items-center gap-2 w-full">
            <h3 className=" text-xl font-bold text-center w-full">
              {education.degree}
            </h3>
            <h4 className="text-lg font-medium text-center w-full">
              {education.title}
            </h4>
            <h5 className="font-medium text-muted-foreground text-center w-full">
              {education.date}
            </h5>
            <p className="text-lg text-center flex flex-col text-muted-foreground font-medium max-w-[75%]">
              {education.location}
            </p>
          </div>
        ))}

        <div className="flex flex-col items-start gap-12">
          <h2 className="text-4xl font-bold text-center w-full">
            Skills
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 w-full ">
            <div className="flex flex-col items-center gap-2">
              <div >
                <FileCode2 size={48} />
              </div>
              <p className="text-lg text-center font-medium">
                JavaScript, TypeScript
              </p>
              <p className=" text-center text-muted-foreground">
                Languages
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div >
                <CodeSquare size={48} />
              </div>
              <p className="text-lg text-center font-medium">
                React, Redux, Next.js, NodeJs, TRPC
              </p>
              <p className=" text-center text-muted-foreground">
                Frameworks & Libraries
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div >
                <Palette size={48} />
              </div>
              <p className="text-lg text-center font-medium">
                TailwindCss, SASS
              </p>
              <p className=" text-center text-muted-foreground">
                Styling
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div >
                <LucideGitCompareArrows size={48} />
              </div>
              <p className="text-lg text-center font-medium">
                Unix, Git, CI/CD, AWS, Netlify, Vercel
              </p>
              <p className=" text-center text-muted-foreground">
                Tools
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div>
                <Database size={48} />
              </div>
              <p className="text-lg text-center font-medium">
                SQL( MySQL, PostgreSQL), NoSQL(MongoDB), ORM (Drizzle, Prisma)
              </p>
              <p className=" text-center text-muted-foreground">
                Databases
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div>
                <BugOff size={48} />
              </div>
              <p className="text-lg text-center font-medium">
                Cypress, Jest, Mocha
              </p>
              <p className=" text-center text-muted-foreground">
                Testing
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center pt-24' >
          <span className="text-lg text-center font-medium text-muted-foreground w-full">
            Download my resume for a more detailed list of skills and experience.
          </span>
          <Link
            className={[buttonVariants({ variant: 'default', size: 'xl' }), 'max-w-[220px] flex gap-2'].join(' ')}
            href="/Resume_JoaoCosta.pdf"
            target='_blank'
            download
          >
            <Download className="w-12 h-12" />
            Resume
          </Link>
        </div>
      </section>
    </MaxWidthWrapper >
  )
}
