'use client'

import React from 'react'

export function TutorialHeaderSkeleton() {
  return (
    <>
      <div className="h-8 w-36 bg-primary/10 rounded-full mb-8 animate-pulse"></div>
      <div className="glass-card rounded-xl shadow-md overflow-hidden mb-12 animate-pulse">
        <div className="relative h-[400px] bg-gray-700/20"></div>
      </div>
    </>
  )
}

export function TutorialContentSkeleton() {
  return (
    <div className="lg:col-span-2 animate-pulse">
      <div className="glass-card rounded-xl shadow-md p-8 mb-8">
        <div className="h-8 bg-gray-700/20 rounded-lg mb-4 w-56"></div>
        <div className="h-64 bg-gray-700/10 rounded-lg"></div>
      </div>

      <div className="glass-card rounded-xl shadow-md p-8 mb-8">
        <div className="h-8 bg-gray-700/20 rounded-lg mb-4 w-64"></div>
        <div className="h-6 bg-gray-700/10 rounded-lg mb-8 w-full"></div>
        <div className="space-y-4">
          <div className="h-6 bg-gray-700/10 rounded-lg w-full"></div>
          <div className="h-6 bg-gray-700/10 rounded-lg w-full"></div>
          <div className="h-6 bg-gray-700/10 rounded-lg w-4/5"></div>
          <div className="h-6 bg-gray-700/10 rounded-lg w-full"></div>
          <div className="h-6 bg-gray-700/10 rounded-lg w-3/4"></div>
        </div>
      </div>
    </div>
  )
}

export function TutorialSidebarSkeleton() {
  return (
    <div className="lg:col-span-1 animate-pulse">
      <div className="glass-card rounded-xl shadow-md p-6 mb-6">
        <div className="h-6 bg-gray-700/20 rounded-lg mb-4 w-36 flex items-center"></div>
        <div className="space-y-3">
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex items-start">
              <div className="w-5 h-5 mr-2 bg-primary/10 rounded-full flex-shrink-0 mt-1"></div>
              <div className="h-4 bg-gray-700/10 rounded-lg w-full"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-md p-6">
        <div className="from-primary/10 to-primary/5 rounded-lg px-4 py-2">
          <div className="h-6 bg-gray-700/20 rounded-lg w-48"></div>
        </div>
        <div className="space-y-4 mt-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="bg-card/50 p-3 rounded-lg">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/10 rounded-full mr-3"></div>
                <div className="h-4 bg-gray-700/10 rounded-lg w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
