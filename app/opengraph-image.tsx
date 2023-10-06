import { ImageResponse } from 'next/server'
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  // Font
  return new ImageResponse(
    (
      <div>

        // ImageResponse JSX element
        <h1 className='heading'>
          Hi! I am <span className='text-black dark:text-white'>Sri Ranga Sai</span>,<br/> a <span className='text-black dark:text-white'>Full Stack Web<br/> Developer</span>
        </h1>
      </div>

    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      
    }
  )
}