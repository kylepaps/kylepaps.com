import About from "@/components/about";
import Contacts from "@/components/contacts";
import Education from "@/components/education";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Work from "@/components/work";

export default function Home() {
  return (
    <main className="flex items-center w-full align-middle justify-center">
      <div className="w-5/6 sm:w-3/4 md:w-2/3 lg:w-1/3 flex flex-col gap-y-16 py-16">
        <Header />
        <About />
        <Work />
        <Projects />
        <Education />
        <Contacts />
      </div>
    </main>
  );
}
