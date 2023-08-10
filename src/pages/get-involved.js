import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { FaGithub, FaSlack } from 'react-icons/fa'

const supportLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/hpcng',
    description:
      'Want the source code or want to contribute? Found an issue? Head over to the HPCng GitHub page (and don\'t forget to give the projects a star).',
    icon: FaGithub,
    cta: 'Go to GitHub',
  },
  {
    name: 'Slack',
    href: 'https://join.slack.com/t/hpcng/shared_invite/zt-qda4h1ls-OP0Uouq6sSmVE6i_0NrWdw',
    description:
      'Questions? Feel free to reach out to our knowledgeable and friendly Slack community, who\'s always willing to help.',
    icon: FaSlack,
    cta: 'Join Slack',
  },
]

const GetInvolvedPage = () => (
  <Layout>
    <Seo title="Get Involved" />
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-green-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1610219542098-df1753da93bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=937&q=80"
            alt=""
          />
          <div className="absolute inset-0 bg-green-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Get Involved</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
          HPCng strives to build a community of diverse brilliant people to consider these challenges and work together on solutions.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Get Involved
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-green-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href={link.href} className="text-base font-medium text-green-700 hover:text-green-600">
                  {link.cta}<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </Layout>
)

export default GetInvolvedPage
