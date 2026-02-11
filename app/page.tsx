import Image from "next/image";

import Project from "./_components/project";
import Skills from "./_components/skills";
import Contact from "./_components/contacts";

import MailIcon from "./_components/icons/mail";
import NewsIcon from "./_components/icons/news";
import GithubIcon from "./_components/icons/github";
import TwitterIcon from "./_components/icons/twitter";

import me from "../public/images/me.webp";
import paytrailIcon from "../public/images/paytrail-icon.webp";
import githubImg from "../public/images/github.webp";
import nullVoidImg from "../public/images/null-void.webp";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="mx-auto space-y-8 font-sans max-w-2xl px-8 pt-20">
      <main className="space-y-10">
        <div className="size-20 relative rounded-full overflow-hidden">
          <Image
            fill
            src={me}
            preload
            quality={100}
            alt="Profile picture"
            className="object-contain"
          />
        </div>

        <h1 className="text-2xl tracking-tight font-bold">
          Hi👋, I&apos;m Olashubomi.
        </h1>

        <div id="about" className="space-y-6 text-sm">
          <p>
            I am majorly interested in backend and systems engineering but I
            dabble in frontend and mobile development sometimes (usually not by
            choice lol). I&apos;m also trying my best to deepen my understanding
            of databases like PostgreSQL and MySQL.
          </p>

          <p>
            You can find me working on some cool projects like{" "}
            <a
              href="https://apps.apple.com/us/app/paytrail/id6755418652"
              className="underline hover:opacity-75 transition-all duration-200 ease-in-out"
            >
              Paytrail
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/shubomifashakin/Temp"
              target="_blank"
              className="underline hover:opacity-75 transition-all duration-200 ease-in-out"
            >
              Temp
            </a>
          </p>
        </div>

        <div id="contact" className="space-y-4">
          <h3 className="font-semibold text-sm">Contact</h3>

          <div className="flex gap-8 text-sm flex-wrap">
            <Contact
              label="Github"
              href="https://github.com/shubomifashakin"
              icon={<GithubIcon width={14} height={14} />}
            />

            <Contact
              label="Twitter"
              href="https://twitter.com/545plea"
              icon={<TwitterIcon width={14} height={14} />}
            />

            <Contact
              label="Mail"
              href="mailto:subomifasakin@outlook.com"
              icon={<MailIcon width={14} height={14} />}
            />

            <Contact
              label="Blog"
              href="https://blog.545plea.xyz"
              icon={<NewsIcon width={14} height={14} />}
            />
          </div>
        </div>

        {/* <div id="skills" className="space-y-4">
          <h3 className="font-bold text-sm">Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <Skills
              title="Frontend"
              items={["React", "NextJS", "Tailwind", "Framer Motion"]}
            />

            <Skills title="Mobile" items={["React Native", "Expo"]} />

            <Skills
              title="Backend"
              items={[
                "NodeJS",
                "NestJS",
                "ExpressJS",
                "REST",
                "GraphQL",
                "PostgreSQL",
                "Redis",
                "DynamoDB",
                "SQLite",
              ]}
            />

            <Skills
              title="Devops/Tools"
              items={[
                "Docker",
                "AWS",
                "AWS CDK",
                "Git",
                "Github",
                "CI/CD",
                "Linux",
                "Hetzner",
                "Grafana Alloy",
              ]}
            />

            <Skills
              title="Learning"
              items={["Golang", "Terraform", "Kubernetes"]}
            />
          </div>
        </div> */}

        <div id="projects" className="space-y-4">
          <h3 className="font-semibold text-sm">Projects</h3>

          <div className="flex flex-col gap-y-4">
            <Project
              status="wip"
              name="Temp"
              description="A simple ephemeral file sharing platform that enables users to share files with time-limited access and automatic virus scanning."
              image={githubImg}
              link="https://github.com/shubomifashakin/Temp"
            />

            <div className="border-t border-t-white/10" />

            <Project
              status="completed"
              name="Null Void"
              description="Realtime collaborative canvas, (Mini-MS Paint but with Collaborative features). I built this to demonstrate how to scale websockets over distributed systems."
              image={nullVoidImg}
              link="https://null-void.545plea.xyz/"
            />

            <div className="border-t border-t-white/10" />

            <Project
              status="wip"
              name="Paytrail"
              description="AI-powered, offline first budgeting and finance tracking app."
              image={paytrailIcon}
              link="https://apps.apple.com/us/app/paytrail/id6755418652"
            />
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 gap-x-4 justify-center border-t border-t-white/10 flex text-xs items-center">
        <span className="flex items-center gap-2">Lagos, Nigeria</span>

        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>

        <span className="uppercase">
          {new Date().toLocaleTimeString("en-NG", {
            timeStyle: "short",
            hour12: true,
            timeZone: "Africa/Lagos",
          })}
        </span>
      </footer>
    </div>
  );
}
