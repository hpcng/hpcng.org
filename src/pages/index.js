import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { NewspaperIcon, DownloadIcon, SupportIcon, ArrowsExpandIcon, LockClosedIcon, BadgeCheckIcon } from '@heroicons/react/outline'

import Layout from "../components/layout"
import Seo from "../components/seo"
import logo from "../images/logo.png"

const features = [
  {
    name: 'Feature 1 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 2 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 3 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 4 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 5 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 6 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 7 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 8 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
  {
    name: 'Feature 9 Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.',
  },
]


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="mb-10">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.unsplash.com/photo-1610219542098-df1753da93bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=937&q=80"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              The Next Generation of
              <span className="inline-block text-green-900">
              High Performance Computing
            </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              HPCng is an open community of people and organizations interested in the broad modernization of HPC capabilities across a wide range of use-cases ranging from traditional HPC to enterprise and hyper-scale workloads.
            </p>
            <div className="flex items-center">
              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-900 hover:bg-green-700 focus:shadow-outline focus:outline-none"
              >
                Get Involved
              </Link>
              <Link
                to="/about"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-green-800"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      


    </div>


  </Layout>
)

export default IndexPage
