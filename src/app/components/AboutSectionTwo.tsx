"use client";

interface Props {
  sectionId: string;
}

function AboutSection({ sectionId }: Props) {
  return (
    <section
      className="min-h-screen text-white flex flex-col items-center  relative about section"
      data-color="#FEBAED"
    >
      {/* Pink Circle on top of the red one */}

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center relative z-20">
        {/* Paragraph Below the Flexbox */}
        <div className="container mx-auto px-6 mt-10">
          <p className="text-2xl">
            I recently transitioned from digital marketing to software
            development. I love the creative aspect of coding—bringing ideas to
            life and turning them into functional, beautiful, and user-friendly
            applications. My journey has been exciting, and I’m eager to
            continue pushing the boundaries of what I can create.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
