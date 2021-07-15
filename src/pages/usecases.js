import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UseCases = () => (
    <Layout>
        <Seo title="Use Cases" />
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
                    Use Cases
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    See who's using Warewulf for a variety of cases and applications and how they are getting the best out of Warewulf.
                </p>
            </div>
        </div>
        <div className="bg-gray-100 py-10">
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-50 lg:w-20 lg:h-20">
                    <svg
                        className="w-10 h-10 text-green-900 lg:w-16 lg:h-16"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                    >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                    </svg>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                        <h2 className="mb-4 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
                            Use Case 1
                        </h2>
                        <Link
                            to="#"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-green-900 hover:text-green-700"
                        >
                            View Use Case
                        </Link>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-base text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default UseCases
