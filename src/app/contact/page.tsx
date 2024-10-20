import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div>
      <header className="mt-20 h-36 flex items-center justify-start text-yellow-600">
        <h1 className="pl-10 text-6xl">Contact Me</h1>
      </header>

      <section id="home" className="ml-48 h-14 flex items-center justify-start text-zinc-600">
        <h1 className="text-3xl">Please feel to Contact if you have any querry</h1>
      </section>
      <div className="justify-center">
        <Input className="m-5 ml-48 h-12 w-2/5 text-lg text-lime-600" type="text" placeholder="Name" />
        <Input className="m-5 ml-48 h-12 w-2/5 text-lg text-blue-600" type="email" placeholder="Email" />
        <Textarea className="m-5 ml-48 h-36 w-2/5 text-lg text-zinc-500" inputMode="text" placeholder="Please write your Requirments and Feedback..." />
      </div>
      <Button className="rounded-lg h-12 w-20 text-lg bg-blue-600 ml-48 mb-5 hover:bg-green-500">Submit</Button>
    </div>
  );
}
