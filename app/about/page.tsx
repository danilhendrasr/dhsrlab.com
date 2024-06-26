export default function DefaultPage() {
  return (
    <main className="my-32 max-w-[1200px] mx-auto flex flex-col gap-20">
      <section className="px-5 flex flex-col-reverse md:flex-row gap-20 md:gap-10">
        <div className="flex flex-col gap-5 w-full md:w-3/5">
          <h1 className="text-3xl font-bold">Hey there 👋</h1>
          <p className="font-semibold">
            I&apos;m Danil Hendra Suryawan. You can call me Danil.
          </p>
          <div className="text-[#425466] flex flex-col gap-5">
            <p className="w-5/6">
              I&apos;m a muslim and a software engineer based in Sidoarjo,
              Indonesia. Currently a full-stack engineer in a South
              Tangerang-based consulting company.
            </p>
            <p className="w-5/6">
              I&apos;m a computer science graduate from Universitas Pembangunan
              Nasional &quot;Veteran&quot; Jawa Timur. I&apos;ve been in touch
              with programming since high-school, mostly through web-development
              (HTML, CSS, JS, PHP and stuff). I&apos;ve graduated in 2023 with
              3.9/4 GPA. Have done several internships as a student and have
              been working as a full-stack engineer since 1 year before
              graduation.
            </p>
            <p className="w-5/6">
              Now I&apos;m meddling around with technologies like React,
              TypeScript, and Go. I&apos;m interested in learning more about the
              cloud-native way, and would love the chance to work with Rust
              full-time.
            </p>
            <p className="w-5/6">
              I&apos;m a guy with lots of interests, so aside of programming I
              also do stuff like:
            </p>
            <ol className="list-disc text-sm px-3">
              <li>
                Sports (football, badminton, weightlifting, running, hiking, and
                combat sports).
              </li>
              <li>
                Taking pictures (albeit I&apos;m not really good at it :p)
              </li>
              <li>
                Reading non-technical books (novels, religions, history,
                politics, financial, just anything other than comics)
              </li>
              <li>Writing (I write poems sometimes by the way)</li>
            </ol>
            <p>
              So feel free to talk to me about those if you happen to have the
              same interest! :D
            </p>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col gap-10 items-center justify-center">
          <div className="overflow-hidden flex justify-center items-center rotate-12 shadow-md p-3 flex-col w-fit">
            <img
              src="me.webp"
              alt="Danil Hendra Suryawans's Picture"
              className="w-[260px] h-[290px] md:w-[270px] md:h-[300px] object-cover"
            />
          </div>
          <div className="overflow-hidden flex justify-center items-center -rotate-12 shadow-md p-3 flex-col w-fit bg-white mr-10 translate-x-10 -translate-y-10">
            <img
              src="sidoarjo.png"
              alt="Sidoarjo"
              className="w-[270px] md:w-[300px] object-fill"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
