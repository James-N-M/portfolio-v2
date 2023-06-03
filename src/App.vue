<template>
  <div id="app" class="overflow-hidden">
    <TopNav></TopNav>

    <section
      id="welcome-section"
      class="flex flex-col items-center justify-center min-h-screen py-12"
    >
      <img
        class="h-48 sm:h-64 w-48 sm:w-64 mb-8 rounded-full"
        src="@/assets/images/me.png"
        alt="profile-pic"
      />
      <h1 class="font-medium text-5xl text-center">Hey, I'm James.</h1>
      <span class="text-3xl">a software developer</span>

      <div class="flex flex-wrap justify-center mt-8 w-full">
        <Bubble
          title="instagram"
          href="https://www.instagram.com/getsomemoore94/"
          icon-type="fab"
          icon="instagram"
          color="text-pink-500"
        ></Bubble>
        <Bubble
          title="github"
          href="https://github.com/James-N-M"
          icon-type="fab"
          icon="github"
          color="text-white"
        ></Bubble>
        <Bubble
          title="linked-in"
          href="https://www.linkedin.com/in/james-moore-4797b6128/"
          icon-type="fab"
          icon="linkedin"
          color="text-blue-500"
        ></Bubble>
        <Bubble
          title="codepen"
          href="https://codepen.io/James_M0025/"
          icon-type="fab"
          icon="codepen"
          color="text-purple-500"
        ></Bubble>
        <Bubble
          title="medium"
          href="https://medium.com/@jomesmoore"
          icon-type="fab"
          icon="medium"
          color="text-green-500"
        ></Bubble>
        <Bubble
          title="exercism"
          href="https://exercism.io/profiles/James-N-M"
          icon-type="fas"
          icon="code"
          color="text-yellow-500"
        ></Bubble>
      </div>
    </section>

    <section id="About" class="py-16">
      <div class="flex justify-center flex-wrap">
        <div class="mx-2 sm:w-1/5">
          <img src="@/assets/images/about-me.png" alt="picture" />
        </div>
        <div class="px-4 py-2 sm:w-1/3">
          <h3 class="text-5xl font-bold mb-4">About Me.</h3>
          <p class="leading-loose mb-2">
            I have a Bachelors of Computer Science, Honours degree from the
            University Of Windsor as well as a Advanced Diploma in Computer
            Systems Technology from St.Clair College. I'm currently working for
            <a
              class="text-black underline"
              href="https://rocketinnovationstudio.ca/"
              >Rocket Innovation Studio</a
            >
          </p>
          <p class="leading-loose mb-2">
            I love meeting new people and working on cool stuff. I'm always
            looking for a opportunity to take these skills I've acquired and
            give back a little
          </p>
          <ul class="list-reset">
            <li class="mt-1">
              <font-awesome-icon :icon="['fas', 'map-pin']"></font-awesome-icon>
              Windsor Ontario Canada
            </li>
            <li class="mt-1">
              <font-awesome-icon
                :icon="['fas', 'briefcase']"
              ></font-awesome-icon>
              Rocket Innovation Studio
            </li>
            <li class="mt-1">
              <font-awesome-icon
                :icon="['far', 'envelope']"
              ></font-awesome-icon>
              jamesm0025@gmail.com
            </li>
          </ul>
        </div>
      </div>
      
      <div class="flex justify-center">
        <div class="timeline m-1">
          <div class="timeline-body">
            <div class="timeline-item">
              <div class="content">
                <p class="time">May 2023</p>
                <h2 class="title font-lg">Software Developer</h2>
                <h3>Rocket Innovation Studio</h3>
              </div>
            </div>
            <div class="timeline-item">
              <div class="content">
                <p class="time">Sept 2021</p>
                <h2 class="title font-lg">Associate Software Developer</h2>
                <h3>Rocket Innovation Studio</h3>
                <div class="mt-1">
                  <span class="badge-red text-red mr-1">.NET Core</span>
                  <span class="badge-blue text-blue mr-1">Angular</span>
                </div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="content">
                <p class="time">Sept 2017</p>
                <h2 class="title font-lg">Software Developer</h2>
                <h3>Flex-N-Gate Canada</h3>
                <div class="mt-1">
                  <span class="badge-red text-red mr-1">Laravel</span>
                  <span class="badge-blue text-blue mr-1">Vue</span>
                </div>
              </div>
            </div>
            <div class="start"></div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="font-bold text-3xl mb-4 text-center">
        Languages & Frameworks
      </h2>
      <div class="flex flex-wrap justify-center mt-8 w-full">
        <!-- FNG -->
        <Bubble
          title="php"
          href="https://www.php.net/"
          icon-type="fab"
          icon="php"
          color="text-purple-500"
        ></Bubble>
        <Bubble
          title="laravel"
          href="https://laravel.com/"
          icon-type="fab"
          icon="laravel"
          color="text-white"
        ></Bubble>
        <Bubble
          title="javascript"
          href="https://www.javascript.com/"
          icon-type="fab"
          icon="js"
          color="text-blue-500"
        ></Bubble>
        <Bubble
          title="vue js"
          href="https://vuejs.org/"
          icon-type="fab"
          icon="vuejs"
          color="text-green-600"
        ></Bubble>
        <!-- RIS -->
        <Bubble
          title="csharp"
          href="https://docs.microsoft.com/en-us/dotnet/csharp/"
          icon-type="fab"
          icon="windows"
          color="text-white"
        ></Bubble>
        <Bubble
          title="angular"
          href="https://angular.io/"
          icon-type="fab"
          icon="angular"
          color="text-red-600"
        ></Bubble>
      </div>
    </section>

    <span id="Work"></span>
    <section>
      <h2 class="font-bold text-3xl mb-4 text-center">
        Open Source Contributions
      </h2>
      <div class="flex justify-center mt-8 mb-8 w-full mx-8">
        <ul class="list-disc">
          <li class="font-mono leading-loose text-xl">
            <a
              class="font-bold text-black"
              href="https://github.com/Protoqol/Prequel"
              >protocol/prequel</a
            >: a modern and lightweight database browser/tool ready for the web
            of the future.
          </li>
          <li class="font-mono leading-loose text-xl">
            <a
              class="font-bold text-black"
              href="https://github.com/philippejadin/agorakit"
              >philippejadin/agorakit</a
            >: a web-based groupware for citizens.
          </li>
          <li class="font-mono leading-loose text-xl">
            <a
              class="font-bold text-black"
              href="https://github.com/iluminar/goodwork"
              >iluminar/goodwork</a
            >: self hosted project management and collaboration tool.
          </li>
        </ul>
      </div>

      <h2 id="Talks" class="font-bold text-3xl mb-4 text-center">Talks</h2>
      <div class="flex justify-center text-center">
        <ul class="list-reset pb-10 text-2xl underline">
          <a
            href="https://drive.google.com/open?id=1zCOi5LLu1sByoRqzK3MVQz_4CT0guNjF"
          >
            <li>Lighting Talk Windsor Hackforge: Tailwind CSS</li>
          </a>
        </ul>
      </div>
    </section>

    <section
      id="Projects"
      class="flex flex-col items-center justify-center py-16"
    >
    <ul>
      <li><a href="https://github.com/James-N-M/dictionary-web-app">Dictionary Web App</a></li>
    </ul>
    </section>

    <section
      id="Contact"
      class="flex flex-col items-center justify-center py-16"
    >
      <h1>Lets work together...</h1>
      <span class="text-black">I look forward to hearing from you !</span>
      <Bubble
        title="email me"
        href="mailto:jamesm0025@gmail.com"
        icon-type="far"
        icon="envelope"
        color="text-white"
      ></Bubble>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import Bubble from "@/components/Bubble";

export default {
  name: "App",
  components: {
    TopNav,
    Footer,
    Bubble,
  },
};
</script>

<style>
div .timeline .timeline-body .timeline-item:after {
  left: -11px;
}
</style>
