"use client"
import Image from "next/image"

const OfficeGallery = () => {
  return (
    <section className="py-16 md:py-24 bg-ca-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Office </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our modern workspaces are designed to foster collaboration, innovation, and productivity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-square overflow-hidden rounded-lg relative">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Modern office space"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg relative">
            <Image
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Executive meeting room"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg relative">
            <Image
              src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Collaborative workspace"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg relative">
            <Image
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Professional workspace"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg relative">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Conference facility"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg relative">
            <Image
              src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Reception area"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfficeGallery
