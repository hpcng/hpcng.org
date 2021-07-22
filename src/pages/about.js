import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <div className="relative bg-green-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1610219542098-df1753da93bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=937&q=80"
          alt=""
        />
        <div className="absolute inset-0 bg-green-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About HPCng</h1>
      </div>
    </div>
    <div className="py-8 xl:py-18 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative">
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-green prose-lg text-gray-500 lg:max-w-none">
                <h1>Background</h1>
                <p>
                  High-Performance Computing (HPC), a once niche use-case, has been growing in terms of applicability over the last 5-10 years. We are seeing large scale, tightly integrated HPC resources beginning to run non-traditional HPC workloads in what we commonly refer to as "the long tail of scientific computing". As that long tail is growing, it is becoming increasingly common for new applications, use-cases, and science domains to be making use of traditional high-performance computing infrastructures. Additionally, HPC environments are not being used only in science, adoption is growing into the enterprise via the advent of artificial intelligence training as well as compute and data-driven analytics.
                </p>
                <p>
                  Today when we refer to HPC, we no longer are referring only to those tightly coupled parallel MPI based applications. We are referring to any applications, or series of applications, which are designed to run a given workload as fast as the hardware will allow. This usually means that the performance-critical application will utilize a given subsystem of a hardware stack completely, whether that be CPU, memory, storage, network, GPU, PCI, etc. This could be on a single compute node, a massive GPU workhorse, CPU farm, or a tightly coupled parallel processing infrastructure. For the purpose of this charter, HPC inclusively refers to all of these types of workloads as HPC.
                </p>
                <p>
                  So while "HPC" is becoming increasingly diverse, the architecture to which it is built has not changed considerably over the past two and a half decades. This base architecture, commonly referred to as the "Beowulf" design, is predisposed to being flat, isolated and discrete which has imposed difficulties with the integration of non-HPC specific capabilities.
                </p>
                <p>
                  This divide has been increasingly causing separation as enterprise architectures, like micro-services, containers, orchestration, etc., have been readily innovating over the past decade and creating a lot of opportunities for optimization of development, operations, security, automation, reliability, and scale. But these new capabilities are not easily transcribed into the HPC sector due to misalignments of base architectures and thus cross-pollination is not occurring. This leads to the replication of technology and a lack of benefit of experience and capabilities for everyone. HPCng strives to build a community of diverse brilliant people to consider these challenges and work together on solutions.
                </p>
              </div>
              <div className="mt-6 prose prose-green prose-lg text-gray-500 lg:mt-0">
                <h1>Mission</h1>
                <p>
                  We, the members of the HPCng community, strive to create a diverse community of backgrounds, ideas, skill sets, and perspectives. Such diverse perspectives are needed to unite the currently disparate capabilities of HPC and enterprise to allow for running advanced computational and data analytics at scale.
                </p>
                <p>
                  Engaging with these respective communities will enable a greater understanding of requirements as well as existing technologies that could be used as part of this vision. This will facilitate cross-pollination to create technologies and solve problems across the ecosystem.
                </p>
                <p className="font-bold italic">
                  "The convergence of AI, data analytics and traditional simulation will result in systems with broader capabilities and configurability as well as cross pollination." -- Dr. Al Gara, Intel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 bg-gray-100 py-10">
      <div className="max-w-2xl mb-10 mt-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-xl mb-6 font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
            Community Charter
        </h2>
        <p className="mb-5 text-base text-gray-700 md:text-lg">
            While the community charter is still in draft, it is updated often, so download it here.
        </p>
        <a
          href="https://docs.google.com/document/d/1UNUawKaU0SlKLdszgKm8LHxyjXDfX87YwuF3zJ29d5U/export?format=pdf"
          class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-900 hover:bg-green-800 focus:shadow-outline focus:outline-none"
          aria-label="Download Community Charter"
          title="Download Community Charter"
        >
          Download
        </a>
      </div>
    </div>
  </Layout>
)

export default AboutPage
