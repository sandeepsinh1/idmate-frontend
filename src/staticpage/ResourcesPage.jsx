import React from 'react';

function ResourcesPage() {
  return (
    <div className="bg-white min-h-screen px-6 py-12 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Helpful Resources</h1>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md">
            <h2 className="text-xl font-semibold mb-2">Getting Started Guide</h2>
            <p>Learn how to create your Digital ID step-by-step with screenshots and best practices.</p>
            <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">Read Guide →</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md">
            <h2 className="text-xl font-semibold mb-2">Video Tutorials</h2>
            <p>Watch quick tutorials to set up, edit, and share your digital identity card.</p>
            <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">Watch Now →</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md">
            <h2 className="text-xl font-semibold mb-2">FAQs</h2>
            <p>Got questions? We’ve got answers to the most frequently asked questions.</p>
            <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">Visit FAQ →</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md">
            <h2 className="text-xl font-semibold mb-2">Community Support</h2>
            <p>Join our Discord or community forum to ask, share, and collaborate with others.</p>
            <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">Join Now →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResourcesPage;