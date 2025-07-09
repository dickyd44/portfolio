import { useEmailStore } from "@/src/store/email";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FormContact() {
  const { form, sendEmail } = useEmailStore();

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>SAY SOMETHING</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              name="from_name"
              placeholder="Name *"
              required
              className="focus:ring-galaxy_core focus:border-galaxy_core"
            />
            <Input
              type="email"
              name="reply_to"
              placeholder="Email *"
              required
              className="focus:ring-galaxy_core focus:border-galaxy_core"
            />
          </div>

          <Input
            type="text"
            name="subject"
            placeholder="Subject *"
            required
            className="mt-4 focus:ring-galaxy_core focus:border-galaxy_core"
          />

          <Textarea
            name="message"
            rows={4}
            placeholder="Your message *"
            required
            className="mt-4 resize-none focus:ring-galaxy_core focus:border-galaxy_core"
          />

          <div className="mt-auto flex justify-end pt-4">
            <Button
              variant="galaxy"
            type="submit"
              size="lg"
          >
            SEND MESSAGE
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
