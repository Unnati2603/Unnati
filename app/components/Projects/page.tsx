"use client";

export default function Projects() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <p className="text-lg mb-4">
                    This page showcases some of my notable projects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">Project 1</h2>
                        <p>
                            Description of Project 1 with key features and technologies used.
                        </p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">Project 2</h2>
                        <p>
                            Description of Project 2 with key features and technologies used.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
