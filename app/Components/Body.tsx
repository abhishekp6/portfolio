import Image from "next/image";
import Link from "next/link";

const Body = () => {
    return(
        <div className="h-full mx-24">
            <div id="about">
                <div>
                    Hi Everyone, Welcome to my space. I&apos;m a <span className="font-bold">Software Engineer</span> from India, currently working with awesome folks at Lumiq.
                    I have completed my undergrad in <span className="font-bold">Computer Science</span>, from Jaypee Institute Of Information Technology, Noida, in 2021.
                    I am a problem solver by heart and love to find new use cases of existing technologies.
                </div>
                <div className="mt-24">
                    <div className="text-2xl font-bold">Professional Skillset</div>
                    <div className="flex flex-wrap mt-4">
                    <Image src="/js.svg" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/ts.svg" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/cpp.svg" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/react.svg" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/angular.svg" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/node.svg" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/mongo.svg" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/redis.svg" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/kafka.svg" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/docker.svg" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/git.svg" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/aws.svg" alt="react" width="100" height="100" className="m-2"/>
                    </div>
                </div>
                <div className="mt-24">
                    <div className="text-2xl font-bold">Certifications</div>
                    <div className="flex flex-wrap mt-4">
                    <Image src="/da.png" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/cp.png" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/ta.png" alt="react" width="100" height="100" className="m-2"/>
                    <Image src="/ace.png" alt="react" width="100" height="100" className="m-2"/>
                    </div>
                </div>
            </div>
            <div id="projects" className="mt-24">
                <div className="text-2xl font-bold">Projects</div>
                <div className="flex flex-wrap mt-4">
                    <div className="border-solid border-2 w-96 h-fit mr-12 p-1">
                        <Image src="/learnest.png" alt="project" width="500" height="100"></Image>
                        <div className="text-lg my-6 flex justify-center items-center font-bold">Learnest</div>
                        <div className="mx-2 mb-12 text-justify">
                        Learnest is a web application designed for individual course creators. It enables you to create, manage, and display video tutorials to your viewers.
                        </div>
                        <div className="flex">
                            <div className="w-24 h-8 mx-2 border-2 flex items-center justify-center text-slate-600 cursor-pointer">
                                <Link href="https://github.com/abhishekp6/learnest" target="_blank">Github</Link>
                                <span className="ml-2"><svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></span>
                            </div>
                            <div className="w-24 h-8 mx-2 border-2 flex items-center justify-center text-slate-600 cursor-pointer">
                            <Link href="https://learnest-fe.vercel.app" target="_blank">Live</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-solid border-2 w-96 h-fit p-1">
                        <Image src="/yb.png" alt="project" width="500" height="100"></Image>
                        <div className="text-lg my-6 flex justify-center items-center font-bold">Youtube Browser</div>
                        <div className="text-justify mx-2">
                        It is a simple youtube wrapper, which fetches data from Google&apos;s youtube data API based on search term and plays in an iframe. The application is solely created with React and Semantic UI.
                        </div>
                        <div className="flex mt-6">
                            <div className="w-24 h-8 mx-2 border-2 flex items-center justify-center text-slate-600 cursor-pointer">
                            <Link href="https://github.com/abhishekp6/youtube-browser" target="_blank">Github</Link>
                            <span className="ml-2"><svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;