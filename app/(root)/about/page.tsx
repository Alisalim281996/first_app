import React from "react";

function AboutPage() {
  return (
    <section>
        <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center sm:text-6xl tracking-wide text-4xl font-bold leading-none">
          We Love
          <span className="bg-blue-500 px-4 py-2 rounded-lg tracking-widest text-white">
            Store
          </span>
        </h1>
        <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea
          corporis aspernatur modi ipsam sit molestiae a quis fugiat,
          consequatur architecto quae culpa recusandae commodi iusto laudantium
          tempore eius ratione?
        </p>
    </section>
  );
}

export default AboutPage;
