import React from 'react'
import AnimationFadeTop from './animations/fade-top'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectItemProps {
  title: string
  description: string
  image: string
  index: number
  url: string
}

export default function ProjectItem({ title, description, image, index, url }: ProjectItemProps) {
  return (
    <div
      className="w-full"
    >
      <Link className="w-full flex flex-col items-center gap-12 pt-6 px-6 lg:pt-24 lg:px-24 border border-1 border-secondary-muted rounded-3xl"
        href={url}
      >
        <div className="flex flex-col items-start gap-4 w-full ">
          <h4 className="text-2xl font-bold text-left">
            {title}
          </h4>
          <p className="text-lg text-left font-medium text-muted-foreground pb-8">
            {description}
          </p>
          <AnimationFadeTop
            delay={index * 0.2}
            once
            className='w-full'
          >
            <Image
              className="w-full h-[450px] object-cover object-top rounded-t-3xl"
              src={image}
              alt="Project 1"
              width={800}
              height={300}
            />
          </AnimationFadeTop>
        </div>
      </Link>
    </div>
  )
}
