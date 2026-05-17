import TextFlippingBoardHero from "@/components/TextFlippingBoardComponent/TextFlippingBoardComponent";
import { ThemeToggle } from "@/components/ui/ThemeToggleUI";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 bg-muted/30">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About content will go here */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                I'll implement the about section content here based on your CV and headshot with Dither Shader effect.
              </p>
            </div>
            {/* Dither shader headshot will go here */}
            <div className="flex justify-center">
              <div className="bg-muted rounded-lg p-4">
                <p className="text-center text-muted-foreground">Dither Shader Headshot Component</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiences" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Experience cards will go here */}
            <div className="bg-card rounded-lg p-6 shadow-lg border">
              <h3 className="text-xl font-bold mb-2">Experience Card</h3>
              <p className="text-muted-foreground">Experience details will be populated from your CV</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 bg-muted/30">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
            <div className="bg-card rounded-lg p-6 shadow-lg border">
              <h3 className="text-xl font-bold mb-2">Project Card</h3>
              <p className="text-muted-foreground">Project details will be populated here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section id="open-source" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Open Source</h2>
          <div className="carousel-container">
            {/* Acernity UI carousel will go here */}
            <div className="text-center p-8 bg-muted rounded-lg">
              <p className="text-muted-foreground">Acernity UI Carousel Component</p>
              <p className="mt-4">Carousel content will be populated with GitHub projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-96 flex items-center justify-center px-4 py-20 bg-muted/30">
        <div className="w-full max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something amazing together!
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
              Contact Me
            </button>
            <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
              View Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
