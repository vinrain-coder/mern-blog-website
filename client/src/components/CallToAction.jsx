import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 clssName='text-2xl'>Want to learn more about web development?</h2>
        <p className='text-gray-500 my-2'>Checkout these resources on my website.</p>
        <Button gradientDuoTone="purpleToPink" className="rounded-tl-xl rounded-bl-none">
          <a
            href="https://vinrain.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </Button>
      </div>
      <div className="p-7 rounded-md">
        <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png"/>
      </div>
    </div>
  );
}
