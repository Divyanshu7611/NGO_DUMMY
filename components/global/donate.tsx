"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DonationPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000); // show after 12 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Your main page content */}

      {/* Popup dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md rounded-2xl p-4">
          <DialogTitle className="text-xl text-green-700">Support a Cause 💚</DialogTitle>

          <div className="space-y-3 mt-4">
            <Image
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
              alt="Medical aid"
              width={400}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>

          <Button
            className="mt-5 w-full"
            variant='donate'
            onClick={() => window.location.href = "/donate"}
          >
            Donate Now
          </Button>


        </DialogContent>
      </Dialog>
    </>
  );
}
