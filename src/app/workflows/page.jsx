import WorkflowStore from "@/app/workflows/store";
import GridBG from "../components/gridbg";

export default function Workflows(){

    return (

        <main className="flex flex-col px-4 pt-12 pb-16 md:pt-26 md:pb-20 relative">
            <GridBG />
            <WorkflowStore />
        </main>

    )

}
