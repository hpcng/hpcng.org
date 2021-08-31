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
              <div className="prose prose-green prose-lg text-gray-500 lg:max-w-none">
                <h1>Community Charter</h1>
                <p>
                  The initial <a href=https://github.com/hpcng/community-charter/blob/main/README.md>Community Charter</a> is available and hosted on github.  Please read it and submit issues or pull requests if you have ideas for improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
