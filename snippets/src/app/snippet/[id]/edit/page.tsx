import EditSnippetForm from "@/components/edit-snippet-form";
import { prisma } from "@/lib/prisma";
import React from "react";

const SnippetEditPage = async ({params}: {params: Promise<{id: string}>}) => {
    const id = parseInt((await params).id);
    const snippet = await prisma.snippet.findUnique({
        where: {
            id,
        },
    });
    if(!snippet) return <div>No Snippet Found</div>

    return <EditSnippetForm snippet={snippet} />
};

export default SnippetEditPage;
