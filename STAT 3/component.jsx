/**
 * v0 by Vercel.
 * @see https://v0.dev/t/O4UGU10nYI2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

export default function Component() {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Global Population Visualization</h1>
        <p className="text-muted-foreground">The size and color of each ball represents the population of a country.</p>
      </div>
      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="col-span-4 md:col-span-3">
          <ResizablePanelGroup direction="horizontal" className="w-full aspect-[4/3] rounded-lg border">
            <ResizablePanel defaultSize={100}>
              <div className="grid grid-cols-4 gap-4 p-4">
                <div className="bg-[#e74c3c] rounded-full aspect-square" style={{ width: "50%" }} />
                <div className="bg-[#2980b9] rounded-full aspect-square" style={{ width: "80%" }} />
                <div className="bg-[#27ae60] rounded-full aspect-square" style={{ width: "30%" }} />
                <div className="bg-[#8e44ad] rounded-full aspect-square" style={{ width: "60%" }} />
                <div className="bg-[#f1c40f] rounded-full aspect-square" style={{ width: "70%" }} />
                <div className="bg-[#16a085] rounded-full aspect-square" style={{ width: "40%" }} />
                <div className="bg-[#d35400] rounded-full aspect-square" style={{ width: "90%" }} />
                <div className="bg-[#2c3e50] rounded-full aspect-square" style={{ width: "20%" }} />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={0} />
          </ResizablePanelGroup>
        </div>
        <div className="col-span-4 md:col-span-1 bg-muted rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Legend</h2>
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-[#e74c3c] rounded-full aspect-square w-8" />
            <div>
              <div className="font-medium">Small Population</div>
              <div className="text-muted-foreground text-sm">Countries with a population under 50 million</div>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-[#d35400] rounded-full aspect-square w-8" />
            <div>
              <div className="font-medium">Medium Population</div>
              <div className="text-muted-foreground text-sm">Countries with a population between 50-100 million</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#2c3e50] rounded-full aspect-square w-8" />
            <div>
              <div className="font-medium">Large Population</div>
              <div className="text-muted-foreground text-sm">Countries with a population over 100 million</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
