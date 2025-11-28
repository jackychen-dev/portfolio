import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ExperienceSnippet from '@/components/Experience' // This is now the snippet version
import Initiatives from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <ExperienceSnippet />
      <Initiatives />
      <Contact />
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-100 dark:border-neutral-900">
        © {new Date().getFullYear()} Jacky Chen. All Rights Reserved.
      </footer>
    </main>
  )
}
