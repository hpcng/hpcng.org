import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Talks = () => (

    <Layout>
        <Seo title="Talks" />
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
                    Talks
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Learn some knowledge from those who have their hands on the wheel with Warewulf. Learn their ways, techniques, or even get some enlightenment about where to use Warewulf.
                </p>
            </div>
        </div>
        <div className="bg-gray-100 py-10">
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col bg-white border rounded shadow-sm lg:flex-row">
                    <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0">
                        <div>
                            <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
                                Event/Individual Name
                            </p>
                            <h5 className="mb-4 text-2xl font-extrabold leading-none sm:text-3xl">
                                Presentation Name
                            </h5>
                            <p className="mb-4 text-base text-gray-700 md:text-lg sm:mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus interdum velit interdum bibendum. Vestibulum massa nulla, efficitur a ultrices eget, auctor quis elit. Curabitur dapibus tellus congue porttitor facilisis. In ac vehicula sapien. Sed eu pretium ligula, id condimentum augue. Cras ultricies lacinia rutrum. Aliquam erat volutpat. Nunc vulputate ante sem, eu suscipit ante imperdiet sed. Proin pharetra vel dui sed tristique. Ut varius ultricies elementum.
                            </p>
                        </div>
                        <div className="flex items-center">
                            <Link to="#">
                                <button
                                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-900 hover:bg-green-700 focus:shadow-outline focus:outline-none"
                                >
                                    View Presentation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
export default Talks