import { exportToPdf } from "@/lib/utils";

import { Button } from "../ui/button";

const Export = () => (
  <div className='flex flex-col gap-3 px-5 py-3'>
    <h3 className='text-[10px] uppercase'>Export</h3>
    <Button
      variant='outline'
      className='w-full border border-[#76ABAE] hover:bg-[#430c3fe6] '
      onClick={exportToPdf}
    >
      Export to PDF
    </Button>
  </div>
);

export default Export;
