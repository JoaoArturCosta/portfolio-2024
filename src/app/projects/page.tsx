import MaxWidthWrapper from '@/components/max-width-wrapper'
import ProjectItem from '@/components/project-item'
import { PROJECTS } from '@/content/projects'
import React from 'react'

export default function Projects() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center justify-center h-full w-full pt-24 pb-32 gap-24 ">
        <h1 className='w-full text-center text-2xl lg:text-4xl font-medium'>My Projects</h1>
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
      </section>
    </MaxWidthWrapper>
  )
}
