import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '../../content/projects'
import { useDesktopMotion } from '../motion/useDesktopMotion'
import { FeaturedProjectPanel } from './FeaturedProjectPanel'

export function FeaturedProjectStack() {
  const animated = useDesktopMotion()
  if (!animated) return <div className="project-stack" data-stack-mode="static">{projects.map((project) => <FeaturedProjectPanel key={project.id} project={project} />)}</div>
  return <AnimatedProjectStack />
}

function AnimatedProjectStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const scale = useTransform(scrollYProgress, [0, 0.72], [1, 0.965])
  const y = useTransform(scrollYProgress, [0, 0.72], [0, -22])
  const opacity = useTransform(scrollYProgress, [0.45, 0.82], [1, 0.76])
  return (
    <div ref={containerRef} className="project-stack project-stack--animated" data-stack-mode="sticky">
      <motion.div className="project-stack__sticky" style={{ scale, y, opacity }}>
        <FeaturedProjectPanel project={projects[0]} />
      </motion.div>
      <div className="project-stack__foreground"><FeaturedProjectPanel project={projects[1]} /></div>
    </div>
  )
}
